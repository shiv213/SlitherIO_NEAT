from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from neat import nn, population
import numpy as np
import os
import time

chrome_options = Options()
chrome_options.add_argument('--no-sandbox')
# chrome_options.add_argument('--headless')
driver = webdriver.Chrome(options=chrome_options)

site = "http://slither.io/"

driver.get(site)

print(driver.title)

try:
    nickname = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "nick")))
    if nickname.is_displayed() and nickname.is_enabled():
        driver.execute_script(
            "document.querySelector('#nick').value = 'c5lither';window.connect("
            ");window.render_mode=1;window.want_quality=0;window.high_quality=false;window.onmousemove=function(){}; "
        )
        # driver.execute_script("window.redraw=function(){}")
        driver.execute_script("window.stop()")
finally:
    time.sleep(1)

foods = driver.execute_script("return window.foods")
thesnake = driver.execute_script("return window.snake")
othersnakes = driver.execute_script("return window.snakes")
print(foods)
print(thesnake)
print(othersnakes)
print()

driver.quit()
