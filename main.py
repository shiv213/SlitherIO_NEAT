from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time 

chrome_options = Options()
chrome_options.add_argument('--no-sandbox')
# chrome_options.add_argument('--headless')
driver = webdriver.Chrome(chrome_options=chrome_options)

site = "http://slither.io/"

driver.get(site)

print(driver.title)
driver.execute_script("window.connect();window.render_mode=1;window.want_quality=0;window.high_quality=false;window.onmousemove=function(){};//window.redraw=function(){}")
time.sleep(3)
print(driver.execute_script("return window.snake"))




