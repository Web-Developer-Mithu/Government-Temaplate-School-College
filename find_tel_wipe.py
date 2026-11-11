with open('responsive-fix.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'phoneLinks|1700-000000', text)]
print('Matches found:', len(matches))
for idx in matches:
    print('Found at:', idx)
    print(text[max(0, idx-100):min(len(text), idx+200)])
    print('='*40)
