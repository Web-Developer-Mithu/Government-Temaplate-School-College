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
    time.sleep(4)

    print('Page title:', driver.title)
    print('Current URL:', driver.current_url)

    # Take screenshot
    screenshot_path = r'C:\Users\Md. Mithu Rahman\.gemini\antigravity\brain\ebae4cb5-30ac-4c67-9ed6-35e444ba3a9f\bccl_club_preview.png'
    driver.save_screenshot(screenshot_path)
    print('Screenshot saved to:', screenshot_path)

    # Extract all visible text
    body_text = driver.find_element(By.TAG_NAME, 'body').text
    print('--- BODY TEXT START ---')
    print(body_text[:2000])
    print('--- BODY TEXT END ---')

    # Extract buttons, links, inputs
    buttons = [b.text for b in driver.find_elements(By.TAG_NAME, 'button') if b.text]
    print('Buttons:', buttons[:20])

    links = [a.get_attribute('href') for a in driver.find_elements(By.TAG_NAME, 'a') if a.get_attribute('href')]
    print('Links:', links[:20])

finally:
    driver.quit()

