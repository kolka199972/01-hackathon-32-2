import {Module} from '../core/module'

const INIT_COUNTER = 0

export class ClicksModule extends Module {
    #counterClick
    #counterDoubleClick
    #body
    #divResult
    #duration
    #mainTimer

    constructor(){
        super('Click analizer', `Считать клики (за 5 сек)`)
        this.#counterClick = INIT_COUNTER
        this.#counterDoubleClick = INIT_COUNTER
        this.#duration = 5000
        this.#body = document.querySelector('body')
        this.#mainTimer = 0
    }

    trigger = () => {
        this.#createResultBlock()

        clearTimeout(this.#mainTimer)
        this.setInitValue()

        let preventHelper = false
        let timerDiffClicks = 0
        
        const onClick = () => {
            timerDiffClicks = setTimeout(() => {
                if (!preventHelper) {
                    console.log(this.#counterClick)
                    console.log(this.#counterDoubleClick)
                    this.incrementCounter()
                }
                preventHelper = false
            }, 300)
        }

        const onDoubleClick = () => {
            clearTimeout(timerDiffClicks)
            preventHelper = true
            this.incrementDoubleCounter()
        }

        const removeModule = (event) => {
            event.preventDefault()
            this.#divResult.remove()
            this.#body.style.backgroundColor = '#FFFF'

        }

        this.#body.style.userSelect = 'none' //Убрать выделение текста при dblclick

        this.#body.addEventListener('click', onClick)
        this.#body.addEventListener('dblclick', onDoubleClick)
        this.#body.addEventListener('contextmenu', removeModule, { once:true })

        this.#mainTimer = setTimeout(() => {
            this.#body.removeEventListener('click', onClick)
            this.#body.removeEventListener('dblclick', onDoubleClick)
            this.#body.style.userSelect = 'auto'
            this.renderResult()
        }, this.#duration)
    }

    incrementCounter = () => {
        this.#counterClick += 1
    }

    incrementDoubleCounter = () => {
        this.#counterDoubleClick += 1
    }
   
    get countOfOneClick () {
        return this.#counterClick
    }

    get countOfDoubleClick () {
        return this.#counterDoubleClick
    }

    setInitValue = () => {
        this.#counterClick = INIT_COUNTER - 1
        this.#counterDoubleClick = INIT_COUNTER

        if (this.#divResult) {
            this.#divResult.innerHTML = 'Нажмите на экран'
        }
    }

    #createResultBlock = () => {
        this.#divResult = document.createElement('div')
        this.#body.append(this.#divResult)
        this.#body.style.backgroundColor = '#FFE4E1'
        this.#divResult.style.display = 'grid'
        this.#divResult.style.justifyContent = 'center'
    }

    renderResult = () => {
        this.#divResult.innerHTML = `Количество кликов: ${this.#counterClick}, количество двойных кликов: ${this.#counterDoubleClick}`
    }
}