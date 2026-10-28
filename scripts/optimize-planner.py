"""Remove the web-only font startup gate from the pinned published export.

The original export is retained. No authentication or saved-trip code changes.
For future source builds, render App immediately on web while useFonts loads;
retain the existing font gate for native builds if the native app needs it.
"""
from pathlib import Path
import hashlib
import re

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "planner/_expo/static/js/web/index-a0937a058ceaa5a686b384f848631e4a.js"
source = SOURCE.read_text()
modules = [line for line in source.splitlines() if
           "Fraunces_400Regular:e.Fraunces_400Regular" in line and
           "s.preventAutoHideAsync()" in line]
assert len(modules) == 1, "Published App module has changed; inspect before updating."
original = modules[0]
assert original.count(",[h,b]),h||b?(0,v.jsx)") == 1
assert original.count("}):null}s.preventAutoHideAsync()") == 1
updated = original.replace(",[h,b]),h||b?(0,v.jsx)", ",[h,b]),(0,v.jsx)")
updated = updated.replace("}):null}s.preventAutoHideAsync()", "})}s.preventAutoHideAsync()")
updated, count = re.subn(
    r"((?:Fraunces|Manrope)_[A-Za-z0-9]+):([a-z]\.(?:Fraunces|Manrope)_[A-Za-z0-9]+)",
    r'\1:{uri:\2,display:"swap"}', updated)
assert count == 7, "Expected exactly the seven custom text fonts."
result = source.replace(original, updated, 1)
digest = hashlib.sha256(result.encode()).hexdigest()[:32]
destination = SOURCE.with_name(f"index-{digest}.js")
destination.write_text(result)
url = "/" + str(destination.relative_to(ROOT))
for name in ("index.html", "planner/index.html"):
    page = ROOT / name
    html, count = re.subn(r"/planner/_expo/static/js/web/index-[0-9a-f]{32}\.js", url, page.read_text())
    assert count == 1, f"Unexpected planner script references in {name}"
    page.write_text(html)
print(url)
