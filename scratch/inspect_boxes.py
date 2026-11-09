with open('index.html', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(8920, 9084):
    line = lines[i]
    if 'base64' in line:
        line = line[:line.find('base64')] + '...base64..." />\n'
    print(f'{i+1}: {line}', end='')

