import {Module} from '../core/module'
import { getRandomColor, random } from '../utils'

export class GameModule extends Module {
  #app
  constructor() {
    super('game', 'Игра!')
    this.#app = document.createElement('div')
    this.#app.className = 'app'
  }

  trigger() {
    this.#app.innerHTML = this.#renderHTMLForApp()
    document.body.style.background = 'turquoise'
    document.body.append(this.#app)

    const startButton = this.#app.querySelector('#start')
    const gameElement = this.#app.querySelector('#game')
    const timeSpan = this.#app.querySelector('#time')
    const timeHeader = this.#app.querySelector('#time-header')
    const resultHeader = this.#app.querySelector('#result-header')
    const resultElement = this.#app.querySelector('#result')
    const gameTime = this.#app.querySelector('#game-time')

    let score = 0
    let isGameStarted = false

    startButton.addEventListener('click', startGame)
    gameElement.addEventListener('click', handlerBoxClick)
    gameTime.addEventListener('input', setGameTime)

    function startGame() {
      score = 0
      setGameTime()
      gameTime.setAttribute('disabled', 'true')
      isGameStarted = true
      gameElement.style.background = '#fff'
      hide(startButton)

      const interval = setInterval(() => {
        const time = parseFloat(timeSpan.textContent)

        if (time <= 0) {
          clearInterval(interval)
          endGame()
        } else {
          timeSpan.textContent = (time - 0.1).toFixed(1)
        }
      }, 100)

      renderBox()
    }

    function endGame() {
      isGameStarted = false
      setGameScore()
      gameTime.removeAttribute('disabled')
      show(startButton)
      gameElement.innerHTML = ''
      gameElement.style.background = '#ccc'
      hide(timeHeader)
      show(resultHeader)
    }

    function handlerBoxClick(event) {
      const {target} = event

      if (!isGameStarted) {
        return 
      }

      if (target.dataset.box) {
        score++
        renderBox()
      }
    }

    function renderBox() {
      gameElement.innerHTML = ''
      const box = document.createElement('div')

      const boxSize = random(30, 70)
      const gameSize = gameElement.getBoundingClientRect()
      const maxTop = gameSize.height - boxSize
      const maxLeft = gameSize.width - boxSize

      box.style.height = box.style.width = boxSize +  'px'
      box.style.position = 'absolute'
      box.style.background = getRandomColor()
      box.style.top = random(0, maxTop) + 'px'
      box.style.left = random(0, maxLeft) + 'px'
      box.style.cursor = 'pointer'
      box.setAttribute('data-box', 'true')

      gameElement.insertAdjacentElement('afterbegin', box)
    }

    function setGameScore() {
      resultElement.textContent = score.toString()
    }

    function setGameTime() {
      const time = +gameTime.value
      timeSpan.textContent = time.toFixed(1)
      show(timeHeader)
      hide(resultHeader)
    }

    function show(el) {
      el.classList.remove('hide')
    }

    function hide(el) {
      el.classList.add('hide')
    }
  }

  #renderHTMLForApp() {
    return `
    <div class="app__header">
      <h1 id="time-header">Время игры: <span id="time">5.0</span></h1>
      <h1 id="result-header" class="hide">Ваш результат: <span id="result"></span></h1>
    </div>
    <div class="app__content">
      <button class="btn" id="start">Начать</button>

      <div class="game" id="game"></div>
    </div>
    <div class="app__footer">
      <div class="input">
        <label for="game-time">Время игры, (сек)</label>
        <input type="number" id="game-time" min="5" step="1" value="5">
      </div>
    </div>
    `
  }
}