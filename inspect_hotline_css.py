with open('responsive-fix.css', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'\.kc-hotline-card\b', text)]
print('Matches in responsive-fix.css:', len(matches))
for idx in matches[:5]:
    print('Found at:', idx)
    print(text[max(0, idx-50):min(len(text), idx+300)])
    print('='*40)
