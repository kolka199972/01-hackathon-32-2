import './styles.css'
import { ContextMenu } from './menu'
import { ShapeModule } from './modules/shape.module'
import { RandomWords } from './modules/text.module'
import { SoundModule } from './modules/sound.module'
import { GameModule } from './modules/game.module'

const shapeModule = new ShapeModule('shape', 'Создать фигуру')
const randomWords = new RandomWords('random', 'Кастомное сообщение')
const soundModule = new SoundModule('sound', 'Случайный звук')
const gameModule = new GameModule('game', 'Игра')

const menu = new ContextMenu('#menu', [
  shapeModule,
  randomWords,
  soundModule,
  gameModule
])
menu.render()
