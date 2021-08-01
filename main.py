import threading
import time
from typing import List
import numpy as np
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from dataclasses import dataclass


# All dataclasses should contain normalized data unless otherwise noted
@dataclass
class SnakeData:
    """
    # ~~an instance of `run_slither` thread / function will update this with latest state~~
    # ~~an instance of~~
    """
    x: float
    y: float
    heading: float
    speed: float


@dataclass
class FoodData:
    x: float
    y: float
    sz: float


@dataclass
class SnakeEnvData:
    # only foods in view
    foods: List[FoodData]
    # NOT YET opponent_snakes: List[SnakeData]


@dataclass
class GameData:
    snake: SnakeData
    env: SnakeEnvData


MAX_VIEW = 1000  # TODO what units


def in_view(snakepos, pos2, dis=MAX_VIEW):
    return calc_distance(snakepos, pos2) < dis


def calc_distance(pos1, pos2):
    # sqrt((x1 - x1)**2 + (y1 - y2)**2))
    return np.sqrt(np.power(pos1[0] - pos2[0], 2) + np.power(pos1[1] - pos2[1], 2))


def run_slither():
    chrome_options = Options()
    chrome_options.add_argument('--no-sandbox')
    # chrome_options.add_argument('--headless')
    # TODO switch to PhantomJS when we are fully headless
    # driver = webdriver.PhantomJS()
    browser = webdriver.Chrome(options=chrome_options)
    print("slither io running")
    browser.get("http://slither.io/")
    try:
        nickname = WebDriverWait(browser, 10).until(EC.presence_of_element_located((By.ID, "nick")))
        if nickname.is_displayed() and nickname.is_enabled():
            browser.execute_script(
                "document.querySelector('#nick').value = 'c5lither';window.connect("
                ");window.render_mode=1;window.want_quality=0;window.high_quality=false;window.onmousemove=function("
                "){}; "
            )
            # driver.execute_script("window.redraw=function(){}")
            browser.execute_script("window.stop()")
    finally:
        time.sleep(1)

    while True:
        alive = browser.execute_script("return window.dead_mtm")
        if alive == -1:
            raw_foods = browser.execute_script("return window.foods")
            raw_snake = browser.execute_script("return window.snake")
            othersnakes = browser.execute_script("return window.snakes")
            # if raw_foods is None or raw_snake is None or othersnakes is None:
            #     time.sleep(1)
            #     print("game not ready?")
            # TODO extract out constants
            snakepos = raw_snake['xx'], raw_snake['yy']
            snake = SnakeData(snakepos[0] / 45000, snakepos[1] / 45000, (raw_snake['ang']) / (2 * np.pi),
                              raw_snake['sp'] / 14)
            # Total score: Math.floor(15 * (fpsls[snake.sct] + snake.fam / fmlts[snake.sct] - 1) - 5) / 1
            # origin is top left
            # foods is an ever growing list of all foods
            foods = []
            for food in raw_foods:
                if food is None:
                    continue
                foodpos = food['xx'], food['yy']
                if in_view(snakepos, foodpos):
                    foods.append(FoodData(foodpos[0], foodpos[1], food['sz'] / 30))

            environment = SnakeEnvData(foods)
            data = GameData(snake, environment)
            print(snake)
            print(environment.foods[0:4])
        else:
            print("ya ded")
            browser.quit()
        time.sleep(0.5)

    # browser.quit()


# TODO we'll need to do multithread for running multiple agents at the same time


if __name__ == '__main__':
    t = threading.Thread(target=run_slither)
    t.start()
