import './styles.css'
import { ContextMenu } from './menu'
import { ShapeModule } from './modules/shape.module'
import { RandomWords } from './modules/text.module'
import { TimerModule } from './modules/timer.module'
import { TimeModule } from './modules/time.module'
import { SoundModule } from './modules/sound.module'
import { BackgroundModule } from './modules/background.module'
import { GameModule } from './modules/game.module'
import { ClicksModule } from './modules/clicks.module'

const shapeModule = new ShapeModule()
const randomWords = new RandomWords()
const timerModule = new TimerModule()
const timeModule = new TimeModule()
const soundModule = new SoundModule()
const randomColorBg = new BackgroundModule()
const gameModule = new GameModule()
const clicksModule = new ClicksModule()

const menu = new ContextMenu('#menu', [
  shapeModule,
  randomWords,
  timerModule,
  timeModule,
  soundModule,
  randomColorBg,
  gameModule,
  clicksModule
])
menu.render()
