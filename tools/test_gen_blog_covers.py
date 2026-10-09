"""Tests for the cover post-process step of scripts/gen_blog_covers.py.

Run: python3 -m unittest discover -s tools -p 'test_*.py'
"""
import importlib.util
import os
import tempfile
import unittest

HERE = os.path.dirname(os.path.abspath(__file__))
SPEC = importlib.util.spec_from_file_location(
    "gen_blog_covers", os.path.join(HERE, "..", "scripts", "gen_blog_covers.py"))
covers = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(covers)

from PIL import Image  # noqa: E402  (Pillow: in the Hermes container and on the Mac)


class PublishTest(unittest.TestCase):
    def test_flux_render_becomes_a_1200x700_jpeg(self):
        with tempfile.TemporaryDirectory() as tmp:
            src, dst = os.path.join(tmp, "s.png"), os.path.join(tmp, "s.jpg")
            Image.new("RGBA", (1216, 704), (10, 120, 90, 255)).save(src)
            covers.publish(src, dst)
            with Image.open(dst) as out:
                self.assertEqual(out.format, "JPEG")
                self.assertEqual(out.size, (1200, 700))
                self.assertEqual(out.mode, "RGB")

    def test_other_aspect_is_centre_cropped_not_stretched(self):
        with tempfile.TemporaryDirectory() as tmp:
            src, dst = os.path.join(tmp, "sq.png"), os.path.join(tmp, "sq.jpg")
            im = Image.new("RGB", (1000, 1000), (255, 0, 0))
            im.paste((0, 0, 255), (0, 0, 1000, 150))  # blue band at the top
            im.save(src)
            covers.publish(src, dst)
            with Image.open(dst) as out:
                self.assertEqual(out.size, (1200, 700))
                r, g, b = out.getpixel((600, 5))
                self.assertGreater(r, 200)  # the top band was cropped away
                self.assertLess(b, 60)


if __name__ == "__main__":
    unittest.main()
