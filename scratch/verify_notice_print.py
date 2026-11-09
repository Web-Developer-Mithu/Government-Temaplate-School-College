from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import os, time, base64

options = Options()
options.add_argument('--headless=new')
options.add_argument('--window-size=1200,1600')
options.add_argument('--disable-gpu')
driver = webdriver.Chrome(options=options)

try:
    file_path = os.path.abspath('index.html')
    driver.get(f'file:///{file_path}')
    time.sleep(1)

    # Find the notice about "৭ই নভেম্বর জাতীয় বিপ্লব ও সংহতি দিবস"
    items = driver.find_elements(By.CSS_SELECTOR, '.kc-notice-item')
    target_item = None
    for it in items:
        if '৭ই নভেম্বর' in it.get_attribute('textContent'):
            target_item = it
            break

    if target_item is None:
        target_item = items[0]

    driver.execute_script('arguments[0].scrollIntoView({block: "center"});', target_item)
    time.sleep(0.3)
    driver.execute_script('arguments[0].click();', target_item)
    time.sleep(0.5)

    # Trigger print sync function
    driver.execute_script('if (window.printOfficialNotice) { window.printOfficialNotice(); }')
    time.sleep(0.3)

    # Emulate Print Media
    driver.execute_cdp_cmd('Emulation.setEmulatedMedia', {'media': 'print'})
    time.sleep(0.5)

    # Capture print preview screenshot
    print_container = driver.find_element(By.ID, 'kc-notice-print-container')
    screenshot_path = r'C:\Users\Md. Mithu Rahman\.gemini\antigravity\brain\ebae4cb5-30ac-4c67-9ed6-35e444ba3a9f\notice_user_example_print_page.png'
    print_container.screenshot(screenshot_path)
    print('Target notice print screenshot saved:', screenshot_path)

    # Print to PDF using CDP
    pdf_data = driver.execute_cdp_cmd('Page.printToPDF', {
        'paperWidth': 8.27,
        'paperHeight': 11.69,
        'marginTop': 0.39,
        'marginBottom': 0.39,
        'marginLeft': 0.47,
        'marginRight': 0.47,
        'printBackground': True,
        'preferCSSPageSize': True
    })

    pdf_bytes = base64.b64decode(pdf_data['data'])
    pdf_path = r'C:\Users\Md. Mithu Rahman\.gemini\antigravity\brain\ebae4cb5-30ac-4c67-9ed6-35e444ba3a9f\target_notice_single_page.pdf'
    with open(pdf_path, 'wb') as f:
        f.write(pdf_bytes)
    
    page_count = pdf_bytes.count(b'/Type /Page') - pdf_bytes.count(b'/Type /Pages')
    print('Total PDF pages generated for target notice:', page_count)
    assert page_count == 1, f"Expected 1 page but got {page_count} pages!"
    print('SUCCESS: Target notice verified on EXACTLY 1 PAGE!')

finally:
    driver.quit()
