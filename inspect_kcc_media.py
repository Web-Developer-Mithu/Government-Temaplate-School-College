with open('responsive-fix.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for j in range(2450, min(len(lines), 2600)):
    if '@media' in lines[j] or 'kcc-banner' in lines[j]:
        print(f"{j+1}: {lines[j]}", end='')

