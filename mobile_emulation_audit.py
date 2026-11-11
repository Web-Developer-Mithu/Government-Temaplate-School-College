from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import json
import time

mobile_emulations = [
    {"name": "iPhone_SE_375", "width": 375, "height": 667, "pixelRatio": 2.0},
    {"name": "Pixel_7_412", "width": 412, "height": 915, "pixelRatio": 2.6},
    {"name": "Galaxy_S8_360", "width": 360, "height": 740, "pixelRatio": 3.0},
    {"name": "Small_320", "width": 320, "height": 568, "pixelRatio": 2.0}
]

results = {}

for dev in mobile_emulations:
    opts = Options()
    opts.add_argument('--headless')
    opts.add_experimental_option("mobileEmulation", {
        "deviceMetrics": {"width": dev["width"], "height": dev["height"], "pixelRatio": dev["pixelRatio"]},
        "userAgent": "Mozilla/5.0 (Linux; Android 10; Mobile) AppleWebKit/537.36"
    })
    
    driver = webdriver.Chrome(options=opts)
    driver.get('file:///c:/Users/Md.%20Mithu%20Rahman/Downloads/kc%20col%20tem/index.html')
    time.sleep(1)
    
    data = driver.execute_script('''
        const winW = window.innerWidth;
        const scrollW = document.documentElement.scrollWidth;
        const bodyScrollW = document.body.scrollWidth;
        
        // Find any element that actually causes horizontal scrolling
        const culprits = [];
        document.querySelectorAll('*').forEach(el => {
            if (['SCRIPT', 'STYLE', 'HEAD', 'META'].includes(el.tagName)) return;
            const rect = el.getBoundingClientRect();
            // If element is not inside an overflow:hidden container
            if (rect.right > winW + 1 && el.offsetWidth > winW) {
                let name = el.tagName.toLowerCase();
                if (el.id) name += '#' + el.id;
                else if (el.className) name += '.' + el.className.toString().trim().split(/\\s+/)[0];
                culprits.push({
                    name: name,
                    rectRight: rect.right,
                    width: el.offsetWidth,
                    winW: winW
                });
            }
        });
        
        return {
            winW: winW,
            scrollW: scrollW,
            bodyScrollW: bodyScrollW,
            hasHScroll: scrollW > winW || bodyScrollW > winW,
            culprits: culprits.slice(0, 10)
        };
    ''')
    results[dev["name"]] = data
    driver.save_screenshot(f'screenshot_{dev["name"]}.png')
    driver.quit()

print(json.dumps(results, indent=2))
