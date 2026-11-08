with open('responsive-fix.css', 'r', encoding='utf-8') as f:
    css = f.read()

import re
matches = [m.start() for m in re.finditer(r'\.kcc-header-root', css)]
for i, m in enumerate(matches):
    print(f"=== MATCH {i+1} at {m} ===")
    print(css[m:m+350])

