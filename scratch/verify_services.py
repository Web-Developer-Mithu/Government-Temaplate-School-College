from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import os, time

options = Options()
options.add_argument('--headless=new')
options.add_argument('--window-size=1400,1000')
options.add_argument('--disable-gpu')
driver = webdriver.Chrome(options=options)

try:
    file_path = os.path.abspath('index.html')
    driver.get(f'file:///{file_path}')
    time.sleep(1)

    grid = driver.find_element(By.CSS_SELECTOR, '.important-services-grid')
    driver.execute_script('arguments[0].scrollIntoView({block: "center"});', grid)
    time.sleep(0.5)

    block = driver.execute_script('return arguments[0].closest(".column.block");', grid)
    screenshot_path = r'C:\Users\Md. Mithu Rahman\.gemini\antigravity\brain\ebae4cb5-30ac-4c67-9ed6-35e444ba3a9f\important_services_desktop.png'
    block.screenshot(screenshot_path)
    print('Saved important_services_desktop.png')

    # Hover over one link in first box
    link = driver.find_element(By.CSS_SELECTOR, '#box-267 .service-box-links li:first-child a')
    actions = ActionChains(driver)
    actions.move_to_element(link).perform()
    time.sleep(0.3)

    screenshot_hover = r'C:\Users\Md. Mithu Rahman\.gemini\antigravity\brain\ebae4cb5-30ac-4c67-9ed6-35e444ba3a9f\important_services_hover.png'
    block.screenshot(screenshot_hover)
    print('Saved important_services_hover.png')

finally:
    driver.quit()

