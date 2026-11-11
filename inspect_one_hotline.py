with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = 15863598
print(text[idx-20:idx+1300])
