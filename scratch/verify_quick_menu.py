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

    qm = driver.find_element(By.CSS_SELECTOR, '.quick-menu-grid')
    driver.execute_script('arguments[0].scrollIntoView({block: "center"});', qm)
    time.sleep(0.5)

    # Hover over the first item
    first_item = driver.find_element(By.CSS_SELECTOR, '.quick-menu-item.qm-theme-admission')
    actions = ActionChains(driver)
    actions.move_to_element(first_item).perform()
    time.sleep(0.5)

    block = driver.execute_script('return arguments[0].closest(".column.block");', qm)
    screenshot_path = r'C:\Users\Md. Mithu Rahman\.gemini\antigravity\brain\ebae4cb5-30ac-4c67-9ed6-35e444ba3a9f\quick_menu_desktop_hover.png'
    block.screenshot(screenshot_path)
    print('Screenshot with hover saved successfully:', screenshot_path)

    # Also capture regular desktop with fixed header
    actions.move_by_offset(200, 200).perform()
    time.sleep(0.3)
    screenshot_path_reg = r'C:\Users\Md. Mithu Rahman\.gemini\antigravity\brain\ebae4cb5-30ac-4c67-9ed6-35e444ba3a9f\quick_menu_desktop_verified.png'
    block.screenshot(screenshot_path_reg)
    print('Updated regular desktop screenshot saved.')
finally:
    driver.quit()
