with open('responsive-fix.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if '.kcc-header-root' in line:
        for j in range(max(0, i-5), min(len(lines), i+150)):
            print(f"{j+1}: {lines[j]}", end='')
        break

