import os
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

chrome_options = Options()
chrome_options.add_argument('--headless=new')
chrome_options.add_argument('--disable-gpu')
driver = webdriver.Chrome(options=chrome_options)
file_path = os.path.abspath('index.html')

# 1. Desktop 1280px
driver.set_window_size(1280, 900)
driver.get(f'file:///{file_path}')

# Check hotline cards content
js = """
var cards = Array.from(document.querySelectorAll('.kc-hotline-card')).map(c => {
    var num = c.querySelector('.kc-hl-number');
    var name = c.querySelector('.kc-hl-name');
    var badge = c.querySelector('.kc-hl-badge');
    var action = c.querySelector('.kc-hl-call-action');
    return {
        href: c.getAttribute('href'),
        num: num ? num.innerText : 'null',
        name: name ? name.innerText : 'null',
        badge: badge ? badge.innerText : 'null',
        hasAction: !!action,
        innerRawText: c.innerText.replace(/\\s+/g, ' ').trim()
    };
});
return cards;
"""
cards = driver.execute_script(js)
import pprint
print("Hotline cards count:", len(cards))
pprint.pprint(cards[:4])

# Scroll to hotline on desktop and screenshot
driver.execute_script("""
var h5 = Array.from(document.querySelectorAll('h5')).find(el => el.innerText.includes('জরুরি হটলাইন') || el.innerText.includes('Emergency Hotline'));
if (h5) h5.scrollIntoView({block: 'center', behavior: 'instant'});
""")
driver.save_screenshot('hotline_desktop_restored.png')

# 2. Mobile 390px
driver.execute_cdp_cmd('Emulation.setDeviceMetricsOverride', {'width': 390, 'height': 844, 'deviceScaleFactor': 1, 'mobile': True})
driver.get(f'file:///{file_path}')
driver.execute_script("""
var h5 = Array.from(document.querySelectorAll('h5')).find(el => el.innerText.includes('জরুরি হটলাইন') || el.innerText.includes('Emergency Hotline'));
if (h5) h5.scrollIntoView({block: 'start', behavior: 'instant'});
""")
driver.save_screenshot('hotline_mobile_restored.png')

driver.quit()
print("Saved screenshots!")
