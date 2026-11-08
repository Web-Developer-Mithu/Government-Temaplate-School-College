with open('responsive-fix.css', 'r', encoding='utf-8') as f:
    css = f.read()

m1 = 252029
m2 = 261843
m3 = 273977

print("Length of match 1 to match 2:", m2 - m1)
print("Length of match 2 to match 3:", m3 - m2)

with open('match2_header.css', 'w', encoding='utf-8') as f:
    f.write(css[m2:m3])
print("Saved match2_header.css")

