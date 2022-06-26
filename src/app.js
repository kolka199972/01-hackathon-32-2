import './styles.css'

import './modules/clicks.module'

const clicksModule = new ClicksModule(5000)
clicksModule.trigger()
