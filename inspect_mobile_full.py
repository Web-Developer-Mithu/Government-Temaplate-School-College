from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time, os

chrome_options = Options()
chrome_options.add_argument("--headless=new")
chrome_options.add_argument("--window-size=375,812")
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--no-sandbox")

driver = webdriver.Chrome(options=chrome_options)
html_path = os.path.abspath("index.html")
driver.get(f"file:///{html_path}")
time.sleep(2)

# Screenshot full top on mobile
driver.save_screenshot("mobile_top_screenshot.png")

# Scroll down a bit and capture middle
driver.execute_script("window.scrollTo(0, 700);")
time.sleep(1)
driver.save_screenshot("mobile_mid_screenshot.png")

# Scroll to footer on mobile
footer = driver.find_element("id", "def-smart-footer")
driver.execute_script("arguments[0].scrollIntoView({behavior: 'instant', block: 'center'});", footer)
time.sleep(1)
driver.save_screenshot("mobile_footer_screenshot.png")

driver.quit()
print("Mobile screenshots captured!")

