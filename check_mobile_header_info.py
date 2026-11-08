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
time.sleep(1)

info = driver.execute_script("""
    const logo = document.querySelector('.kcc-brand-logo-frame');
    const textBlock = document.querySelector('.kcc-brand-text-block');
    const campus = document.querySelector('.kcc-banner-campus-wrap');
    const banner = document.querySelector('.kcc-banner-area');
    return {
        banner: banner ? {
            rect: banner.getBoundingClientRect(),
            display: window.getComputedStyle(banner).display,
            height: window.getComputedStyle(banner).height
        } : null,
        logo: logo ? {
            rect: logo.getBoundingClientRect(),
            width: window.getComputedStyle(logo).width,
            height: window.getComputedStyle(logo).height
        } : null,
        textBlock: textBlock ? {
            rect: textBlock.getBoundingClientRect(),
            bg: window.getComputedStyle(textBlock).backgroundColor
        } : null,
        campus: campus ? {
            rect: campus.getBoundingClientRect(),
            display: window.getComputedStyle(campus).display,
            pos: window.getComputedStyle(campus).position
        } : null
    };
""")
print(info)
driver.quit()

