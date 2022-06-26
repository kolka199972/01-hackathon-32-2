import './styles.css'
import { ContextMenu } from './menu'
import { ShapeModule } from './modules/shape.module'
import { RandomWords } from './modules/text.module'
import { TimerModule } from './modules/timer.module'
import { TimeModule } from './modules/time.module'
import { SoundModule } from './modules/sound.module'
import { BackgroundModule } from './modules/background.module'
import { GameModule } from './modules/game.module'

const shapeModule = new ShapeModule('shape', 'Создать фигуру')
const randomWords = new RandomWords('random', 'Кастомное сообщение')
const timerModule = new TimerModule('timer', 'Таймер')
const timeModule = new TimeModule('time', 'Время до Нового Года!')
const soundModule = new SoundModule('sound', 'Случайный звук')
const randomColorBg = new BackgroundModule('background', 'Случайный фоновый цвет')
const gameModule = new GameModule('game', 'Игра')


const menu = new ContextMenu('#menu', [
  shapeModule,
  randomWords,
  timerModule,
  timeModule,
  soundModule,
  randomColorBg,
  gameModule
])
menu.render()
