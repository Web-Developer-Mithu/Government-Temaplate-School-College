from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import json
import time

viewports = [
    (320, 568, "mobile_320"),
    (360, 640, "mobile_360"),
    (375, 667, "mobile_375"),
    (390, 844, "mobile_390"),
    (414, 896, "mobile_414"),
    (768, 1024, "tablet_768"),
    (992, 1024, "desktop_992"),
    (1200, 900, "desktop_1200")
]

options = Options()
options.add_argument('--headless')
driver = webdriver.Chrome(options=options)
driver.get('file:///c:/Users/Md.%20Mithu%20Rahman/Downloads/kc%20col%20tem/index.html')

overflow_report = {}

for width, height, name in viewports:
    driver.set_window_size(width, height)
    time.sleep(1)
    
    res = driver.execute_script('''
        const winWidth = window.innerWidth;
        const docWidth = document.documentElement.clientWidth;
        const scrollWidth = document.documentElement.scrollWidth;
        const bodyScrollWidth = document.body.scrollWidth;
        
        const overflowing = [];
        const all = document.querySelectorAll('*');
        all.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Ignore scripts, styles, head, etc.
            if (['SCRIPT', 'STYLE', 'HEAD', 'META', 'TITLE', 'LINK'].includes(el.tagName)) return;
            // Check if element spills significantly beyond viewport
            if (rect.right > winWidth + 2 && rect.width > 0 && rect.height > 0) {
                // Find selector
                let sel = el.tagName.toLowerCase();
                if (el.id) sel += '#' + el.id;
                else if (el.className && typeof el.className === 'string') sel += '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.');
                overflowing.push({
                    selector: sel,
                    rectRight: Math.round(rect.right),
                    rectWidth: Math.round(rect.width),
                    winWidth: winWidth,
                    overflowPx: Math.round(rect.right - winWidth)
                });
            }
        });
        
        return {
            winWidth: winWidth,
            docWidth: docWidth,
            scrollWidth: scrollWidth,
            bodyScrollWidth: bodyScrollWidth,
            hasHorizontalScroll: scrollWidth > winWidth || bodyScrollWidth > winWidth,
            overflowCount: overflowing.length,
            sampleOverflows: overflowing.slice(0, 10)
        };
    ''')
    overflow_report[name] = res

print(json.dumps(overflow_report, indent=2))
driver.quit()
