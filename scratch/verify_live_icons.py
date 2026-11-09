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
    file_path = os.path.abspath('index.html')
    driver.get(f'file:///{file_path}')
    time.sleep(1)

    qm = driver.find_element(By.CSS_SELECTOR, '.quick-menu-grid')
    driver.execute_script('arguments[0].scrollIntoView({block: "center"});', qm)
    time.sleep(0.5)

    # Check that each icon has animation applied
    items = [
        ('.qm-theme-notice .qm-icon-wrap svg', 'qmBellRing'),
        ('.qm-theme-admission .qm-icon-wrap svg', 'qmCapFloat'),
        ('.qm-theme-payment .qm-icon-wrap svg', 'qmCardSwipe'),
        ('.qm-theme-cert .qm-icon-wrap svg', 'qmCertSway'),
        ('.qm-theme-students .qm-icon-wrap svg', 'qmStudentsBob'),
        ('.qm-theme-results .qm-icon-wrap svg', 'qmTrophyLift'),
        ('.qm-theme-class-routine .qm-icon-wrap svg', 'qmClockTick'),
        ('.qm-theme-exam-routine .qm-icon-wrap svg', 'qmExamCheck')
    ]

    for sel, anim_name in items:
        el = driver.find_element(By.CSS_SELECTOR, sel)
        applied_anim = driver.execute_script('return window.getComputedStyle(arguments[0]).animationName;', el)
        print(f'{sel} -> Animation: {applied_anim}')
        assert anim_name in applied_anim, f"Expected {anim_name} in {applied_anim}!"

    # Capture a snapshot while live animations are active
    block = driver.execute_script('return arguments[0].closest(".column.block");', qm)
    screenshot_path = r'C:\Users\Md. Mithu Rahman\.gemini\antigravity\brain\ebae4cb5-30ac-4c67-9ed6-35e444ba3a9f\quick_menu_live_animated.png'
    block.screenshot(screenshot_path)
    print('Live animated screenshot saved to:', screenshot_path)

    # Hover over notice to verify accelerated ringing
    notice_item = driver.find_element(By.CSS_SELECTOR, '.quick-menu-item.qm-theme-notice')
    from selenium.webdriver.common.action_chains import ActionChains
    actions = ActionChains(driver)
    actions.move_to_element(notice_item).perform()
    time.sleep(0.3)

    bell_svg = driver.find_element(By.CSS_SELECTOR, '.qm-theme-notice .qm-icon-wrap svg')
    hover_duration = driver.execute_script('return window.getComputedStyle(arguments[0]).animationDuration;', bell_svg)
    print('Notice Bell hover animation duration:', hover_duration)
    assert '0.85s' in hover_duration, f"Expected 0.85s on hover but got {hover_duration}!"

    screenshot_hover = r'C:\Users\Md. Mithu Rahman\.gemini\antigravity\brain\ebae4cb5-30ac-4c67-9ed6-35e444ba3a9f\quick_menu_live_bell_ringing.png'
    block.screenshot(screenshot_hover)
    print('Notice Bell ringing screenshot saved to:', screenshot_hover)

    print('ALL 8 ICONS LIVE ANIMATIONS FULLY VERIFIED!')

finally:
    driver.quit()

