#!/usr/bin/env node
// Regenerates the `faq.q*` translation lines in public/js/main.js from
// src/data/faq.ts, which is the single source of truth for FAQ content.
//
// The FAQ lives in three places by design: faq.ts drives the rendered markup
// and the FAQPage JSON-LD, while main.js drives the client-side PT/EN toggle.
// Hand-syncing ~30 entries x 2 languages is how typos and drift get in, so
// this script does it: it rewrites the contiguous block of `'faq.qN.q'` /
// `'faq.qN.a'` lines inside each of the two dictionaries, in faq.ts order,
// and leaves everything else in main.js untouched.
//
// Usage: node scripts/sync-faq-i18n.mjs   (add --check to fail instead of write)

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const faqPath = resolve(root, "src/data/faq.ts");
const mainJsPath = resolve(root, "public/js/main.js");

/** Reads faq.ts and evaluates just its array literal (plain JS once typed). */
function loadFaq() {
  const source = readFileSync(faqPath, "utf8");
  const start = source.indexOf("export const faq");
  if (start === -1) throw new Error("faq.ts: could not find `export const faq`");
  const arrayStart = source.indexOf("[", start);
  const arrayEnd = source.lastIndexOf("];");
  if (arrayStart === -1 || arrayEnd === -1) throw new Error("faq.ts: malformed array literal");
  const literal = source.slice(arrayStart, arrayEnd + 1);
  // eslint-disable-next-line no-new-func
  return new Function(`return ${literal}`)();
}

/** Quotes a string the way main.js does: single quotes unless that needs escaping. */
function quote(value) {
  if (!value.includes("'")) return `'${value}'`;
  if (!value.includes('"')) return `"${value}"`;
  return `'${value.replace(/'/g, "\\'")}'`;
}

function block(faq, lang) {
  const q = lang === "pt" ? "questionPt" : "questionEn";
  const a = lang === "pt" ? "answerPt" : "answerEn";
  return faq
    .flatMap((entry) => [
      `    '${entry.key}.q': ${quote(entry[q])},`,
      `    '${entry.key}.a': ${quote(entry[a])},`,
    ])
    .join("\n");
}

/** Replaces the Nth contiguous run of `'faq.qN.(q|a)'` lines. */
function replaceBlock(lines, occurrence, replacement) {
  const isFaqLine = (line) => /^\s*'faq\.q\d+\.[qa]':/.test(line);
  let seen = 0;
  for (let i = 0; i < lines.length; i += 1) {
    if (!isFaqLine(lines[i])) continue;
    let end = i;
    while (end + 1 < lines.length && isFaqLine(lines[end + 1])) end += 1;
    seen += 1;
    if (seen === occurrence) {
      return [...lines.slice(0, i), ...replacement.split("\n"), ...lines.slice(end + 1)];
    }
    i = end;
  }
  throw new Error(`main.js: could not find FAQ block #${occurrence}`);
}

const faq = loadFaq();
const original = readFileSync(mainJsPath, "utf8");
let lines = original.split("\n");
lines = replaceBlock(lines, 1, block(faq, "pt"));
lines = replaceBlock(lines, 2, block(faq, "en"));
const updated = lines.join("\n");

if (process.argv.includes("--check")) {
  if (updated !== original) {
    console.error("main.js FAQ strings are out of sync with src/data/faq.ts — run: node scripts/sync-faq-i18n.mjs");
    process.exit(1);
  }
  console.log(`FAQ i18n in sync (${faq.length} entries).`);
} else {
  writeFileSync(mainJsPath, updated);
  console.log(`Synced ${faq.length} FAQ entries x 2 languages into public/js/main.js`);
}
