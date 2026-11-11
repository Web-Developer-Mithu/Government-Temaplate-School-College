with open('responsive-fix.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'a\[href\*="tel:"\]', text)]
print("Occurrences in responsive-fix.js:", len(matches))
for idx in matches:
    print(text[max(0, idx-50):min(len(text), idx+150)])
