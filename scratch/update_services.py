with open('index.html', encoding='utf-8') as f:
    lines = f.readlines()

print('Total lines in index.html:', len(lines))
for i in range(len(lines)):
    if 'id="box-267"' in lines[i]:
        print('Box 267 line:', i+1)
    if 'id="box-268"' in lines[i]:
        print('Box 268 line:', i+1)
    if 'id="box-269"' in lines[i]:
        print('Box 269 line:', i+1)
    if 'id="box-270"' in lines[i]:
        print('Box 270 line:', i+1)
    if 'ফটো গ্যালারি' in lines[i]:
        print('Gallery line:', i+1)
    if 'important-services-grid' in lines[i]:
        print('important-services-grid line:', i+1)

