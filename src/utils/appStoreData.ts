// Build-time App Store metadata lookup (rating + review count).
// Fetched once per build; deploy.yml also runs on a weekly schedule so the
// numbers stay reasonably fresh without manual pushes.
export const APP_ID = "6759177555";

// Below this many ratings we don't show social proof at all — a 5.0 with two
// reviews reads as fake. Same gate as the sister sites (home-stories).
export const MIN_RATING_COUNT = 5;

export interface AppStoreData {
  rating: number;
  ratingCount: number;
}

export async function fetchAppStoreData(): Promise<AppStoreData> {
  try {
    const res = await fetch(`https://itunes.apple.com/br/lookup?id=${APP_ID}`);
    if (!res.ok) throw new Error(`iTunes lookup failed: ${res.status}`);
    const json = await res.json();
    const result = json.results?.[0];
    return {
      rating: result?.averageUserRating ?? 0,
      ratingCount: result?.userRatingCount ?? 0,
    };
  } catch (err) {
    console.warn("[appStoreData] lookup failed, hiding rating:", err);
    return { rating: 0, ratingCount: 0 };
  }
}
