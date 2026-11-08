with open('responsive-fix.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for j in range(2730, min(len(lines), 2820)):
    print(f"{j+1}: {lines[j]}", end='')

