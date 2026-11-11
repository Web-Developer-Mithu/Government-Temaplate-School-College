from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time

opts = Options()
opts.add_argument('--headless')
opts.add_experimental_option("mobileEmulation", {
    "deviceMetrics": {"width": 375, "height": 812, "pixelRatio": 2.0},
    "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15"
})

driver = webdriver.Chrome(options=opts)
driver.get('file:///c:/Users/Md.%20Mithu%20Rahman/Downloads/kc%20col%20tem/index.html')
time.sleep(1)

# Capture scroll segments
scroll_height = driver.execute_script("return document.body.scrollHeight;")
print("Total scroll height on mobile:", scroll_height)

# Section 1: Top (Header, Banner, Nav, Notice)
driver.execute_script("window.scrollTo(0, 0);")
time.sleep(1)
driver.save_screenshot('mobile_sec1_top.png')

# Section 2: Slider & Principal
driver.execute_script("window.scrollTo(0, 650);")
time.sleep(1)
driver.save_screenshot('mobile_sec2_slider_principal.png')

# Section 3: Quick Menu Icons & Notice Board
driver.execute_script("window.scrollTo(0, 1400);")
time.sleep(1)
driver.save_screenshot('mobile_sec3_quick_notice.png')

# Section 4: VP Message & Services
driver.execute_script("window.scrollTo(0, 2200);")
time.sleep(1)
driver.save_screenshot('mobile_sec4_vp_services.png')

# Section 5: Emergency Hotline & Photo Gallery
driver.execute_script("window.scrollTo(0, 3100);")
time.sleep(1)
driver.save_screenshot('mobile_sec5_hotline_gallery.png')

# Section 6: Map & Footer
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
time.sleep(1)
driver.save_screenshot('mobile_sec6_map_footer.png')

print("All mobile segments captured!")
driver.quit()
