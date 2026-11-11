with open('responsive-fix.css', 'r', encoding='utf-8') as f:
    text = f.read()

idx = 454719
print(text[idx-50:idx+1500])
