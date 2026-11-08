with open('responsive-fix.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")
for j in range(max(0, len(lines)-100), len(lines)):
    print(f"{j+1}: {lines[j]}", end='')

