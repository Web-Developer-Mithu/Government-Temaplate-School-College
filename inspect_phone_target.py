with open('responsive-fix.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('var phoneLinks = document.querySelectorAll')
print("Line in responsive-fix.js:")
print(text[idx-50:idx+250])
