with open('responsive-fix.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for j in range(2340, min(len(lines), 2450)):
    print(f"{j+1}: {lines[j]}", end='')

