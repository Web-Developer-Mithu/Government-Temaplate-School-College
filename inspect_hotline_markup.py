with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = [m.start() for m in re.finditer(r'kc-hotline-card', text)]
print('Matches in index.html:', len(matches))
for idx in matches[:4]:
    print('Found at:', idx)
    print(text[idx:idx+350])
    print('='*40)
