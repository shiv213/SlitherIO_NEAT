import threading
import time
from dataclasses import dataclass
from typing import List

import numpy as np
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


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
    score: int


@dataclass
class EnemySnakeData:
    x: float
    y: float


@dataclass
class FoodData:
    x: float
    y: float
    sz: float


@dataclass
class SnakeEnvData:
    # only foods in view
    foods: List[FoodData]
    opponent_snakes: List[EnemySnakeData]


@dataclass
class GameData:
    snake: SnakeData
    env: SnakeEnvData


MAX_VIEW = 1000  # game coordinate units
# normalization factors
MAX_SCORE = 10000
MAX_X = 45000.
MAX_Y = 45000.
MAX_FOOD_SZ = 30
MAX_SPEED = 14


class Game:
    def __init__(self, headless=True):
        self.__game_data = None
        self.__is_dead = False  # before self.__is_ready, this value is invalid
        self.__is_ready = False
        self.start_time = None
        self.is_stopped = False
        self.browser = None
        self.lock = threading.Lock()
        self.headless = headless

    @staticmethod
    def calc_distance(pos1, pos2):
        # sqrt((x1 - x1)**2 + (y1 - y2)**2))
        return np.sqrt(np.power(pos1[0] - pos2[0], 2) + np.power(pos1[1] - pos2[1], 2))

    def kill_thread(self):
        self.set_stopped(True)

    def in_view(self, pos2, dis=MAX_VIEW):
        snake = self.get_current_data().snake
        return Game.calc_distance((snake.x, snake.y), pos2) < dis

    def get_current_data(self) -> GameData:
        # TODO maybe we need a lock / mutex kinda thing here
        # so that it basically blocks while the selenium thread is writing to this variable
        # and waits until after the write so that it doesn't get stale state
        self.lock.acquire()
        try:
            data = self.__game_data
        finally:
            self.lock.release()
        return data

    def set_current_data(self, new_data):
        self.lock.acquire()
        try:
            self.__game_data = new_data
        finally:
            self.lock.release()

    def set_stopped(self, is_stopped):
        self.lock.acquire()
        try:
            self.is_stopped = is_stopped
        finally:
            self.lock.release()

    def get_stopped(self):
        self.lock.acquire()
        try:
            state = self.is_stopped
        finally:
            self.lock.release()
        return state

    @property
    def is_ready(self):
        return self.__is_ready

    def get_scaled_inputs(self):
        # everything is normalized
        # TODO potentially encode angle as sin/cos pair
        #  as per https://stats.stackexchange.com/questions/218407/encoding-angle-data-for-neural-network

        data = self.get_current_data()
        if data is None:
            return 0

        # print(data)

        inputs = [
            data.snake.x / MAX_X,
            data.snake.y / MAX_Y,
            data.snake.score / MAX_SCORE,
            data.snake.heading / (2 * np.pi),
            data.snake.speed / MAX_SPEED
        ]

        # passing in all foods/enemies seems like a lot of data to throw at it at first
        # maybe we can limit the foods/enemies to be like N nearest foods, where N is 10 instead of 200
        MAX_FOODS = 5
        DATA_PER_FOOD = 3  # x y sz
        MAX_ENEMIES = 3
        DATA_PER_ENEMY = 2  # x y
        snake_pos = (data.snake.x, data.snake.y)

        def dist(f):
            return self.calc_distance(snake_pos, (f.x, f.y))

        closest_foods = sorted(data.env.foods, key=dist, reverse=True)[:MAX_FOODS]
        closest_enemies = sorted(data.env.opponent_snakes, key=dist, reverse=True)[:MAX_ENEMIES]

        # noinspection PyTypeChecker
        for food in closest_foods:
            inputs.append(food.x / MAX_X)
            inputs.append(food.y / MAX_Y)
            inputs.append(food.sz / 30)

        for x in range((MAX_FOODS - len(closest_foods)) * DATA_PER_FOOD):
            inputs.append(0)

        # noinspection PyTypeChecker
        for sn in closest_enemies:
            inputs.append(sn.x / MAX_X)
            inputs.append(sn.y / MAX_Y)

        for x in range((MAX_ENEMIES - len(closest_enemies)) * DATA_PER_ENEMY):
            inputs.append(0)

        # print(len(inputs))
        return inputs

    def submit_action(self, action):
        # the fact that 0, 1, and 2 are acceleration, right, and left respectively are arbitrary
        acc = 1 if action[0] > 0.7 else 0
        right = "true" if action[1] > 0.7 else "false"
        left = "true" if action[2] > 0.7 else "false"
        # print("Actions", acc, right, left)
        self.browser.execute_script("window.setAcceleration(%d);kd_r=%s;kd_l=%s;" % (acc, right, left))

    def run_slither(self):
        chrome_options = Options()
        chrome_options.add_argument('--no-sandbox')
        if self.headless:
            chrome_options.add_argument('--headless')
        self.browser = webdriver.Chrome(options=chrome_options)
        # noinspection HttpUrlsUsage
        self.browser.get("http://slither.io/")
        try:
            nickname = WebDriverWait(self.browser, 10).until(EC.presence_of_element_located((By.ID, "nick")))
            if nickname.is_displayed() and nickname.is_enabled():
                # TODO forceserver("127.0.0.1", "8080") or any other server here
                if self.headless:
                    self.browser.execute_script(
                        "document.querySelector('#nick').value='neat';window.connect();"
                        "window.render_mode=1;window.want_quality=0;window.high_quality=false;"
                        "window.onmousemove=function(){};window.redraw=function(){};window.stop();")
                else:
                    self.browser.execute_script(
                        "document.querySelector('#nick').value='neat';window.connect();"
                        "window.render_mode=1;window.want_quality=0;window.high_quality=false;"
                        "window.onmousemove=function(){};window.stop();")
        finally:
            time.sleep(1)

        self.start_time = time.time()
        print("genome started at", self.start_time)
        self.__is_ready = True
        # DUPLICATED CODE
        # obj = self.browser.execute_script(
        #     """
        #     return {
        #         alive: window.dead_mtm,
        #         foods: window.foods, snake: window.snake, snakes: window.snakes,
        #         fpsls: window.fpsls, fmlts: fmlts
        #     };
        #     """
        # )
        # raw_foods = obj['foods']
        # # raw_snake = obj['snake']
        # raw_snake = None
        # other_snakes = obj['snakes']
        # fpsls = obj['fpsls']
        # fmlts = obj['fmlts']
        # if any(x is None for x in [raw_foods, raw_snake, other_snakes, fpsls, fmlts]):
        #     print(self.start_time, "errored")
        #     self.is_stopped = True
        # DUPLICATED CODE
        while not self.get_stopped():
            obj = self.browser.execute_script(
                """
                return {
                    alive: window.dead_mtm,
                    foods: window.foods, snake: window.snake, snakes: window.snakes, 
                    fpsls: window.fpsls, fmlts: fmlts
                };
                """
            )
            alive = obj['alive']
            self.__is_dead = alive != -1
            if alive == -1:
                raw_foods = obj['foods']
                raw_snake = obj['snake']
                # raw_snake = None
                other_snakes = obj['snakes']
                fpsls = obj['fpsls']
                fmlts = obj['fmlts']
                if any(x is None for x in [raw_foods, raw_snake, other_snakes, fpsls, fmlts]):
                    print(self.start_time, "errored")
                    self.set_stopped(True)
                    break
                # only set is ready true after we get at least one good reading
                # self.__is_ready = True
                # print('ready and got one reading')

                # if not [x for x in (raw_foods, raw_snake, other_snakes, fpsls, fmlts) if x is None]:
                #     break
                snakepos = raw_snake['xx'], raw_snake['yy']
                score = np.floor(15 * (fpsls[raw_snake['sct']] + raw_snake['fam'] / fmlts[raw_snake['sct']] - 1) - 5)
                snake = SnakeData(snakepos[0], snakepos[1], raw_snake['ang'], raw_snake['sp'], score)
                # coordinate origin is top left
                # foods is an ever growing list of all foods
                foods = []
                enemy_snakes = []
                self.set_current_data(GameData(snake, SnakeEnvData(foods, enemy_snakes)))
                for sn in other_snakes:
                    if sn is None:
                        continue
                    if sn['id'] == raw_snake['id']:
                        continue
                    snpos = (sn['xx'], sn['yy'])
                    if self.in_view(snpos):
                        enemy_snakes.append(EnemySnakeData(*snpos))

                    # for pts in sn['pts']:
                    #     ptspos = (pts['xx'], pts['yy'])
                    #     if self.in_view(ptspos):
                    #         enemy_snakes.append(ptspos[0] / MAX_X)
                    #         enemy_snakes.append(ptspos[1] / MAX_Y)

                for food in raw_foods:
                    if food is None:
                        continue
                    foodpos = food['xx'], food['yy']
                    if self.in_view(foodpos):
                        foods.append(FoodData(*foodpos, food['sz']))

                self.set_current_data(GameData(snake, SnakeEnvData(foods, enemy_snakes)))
            # print("Foods Nearby: " + str(len(self.__game_data.env.foods)), snake)
            else:
                print("ya ded and you only got: ", end='')
                print(self.browser.execute_script('return window.lastscore.childNodes[1].innerHTML'))
                self.set_stopped(True)

        self.browser.quit()


if __name__ == '__main__':
    game = Game()
    game.run_slither()
