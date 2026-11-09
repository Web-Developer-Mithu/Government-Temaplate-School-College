from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import os, time

options = Options()
options.add_argument('--headless=new')
options.add_argument('--window-size=1400,1000')
options.add_argument('--disable-gpu')
driver = webdriver.Chrome(options=options)

try:
    url = 'https://bccl-clup.vercel.app/'
    driver.get(url)
    time.sleep(3)

    tabs = ['Members', 'Accommodation', 'Dining and Bar', 'Facility Manager & Tasks']
    for t in tabs:
        try:
            btn = driver.find_element(By.XPATH, f"//button[contains(., '{t}')]")
            btn.click()
            time.sleep(1)
            text_snippet = driver.find_element(By.TAG_NAME, 'main').text[:300] if driver.find_elements(By.TAG_NAME, 'main') else driver.find_element(By.TAG_NAME, 'body').text[:300]
            print(f"=== TAB: {t} ===")
            print(text_snippet.replace('\n', ' | '))
        except Exception as e:
            print(f"Error on {t}:", e)

finally:
    driver.quit()

