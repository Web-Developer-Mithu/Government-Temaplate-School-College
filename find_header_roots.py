with open('responsive-fix.css', 'r', encoding='utf-8') as f:
    css = f.read()

import re
matches = [m.start() for m in re.finditer(r'\.kcc-header-root', css)]
print('Matches of .kcc-header-root:', len(matches), matches)

