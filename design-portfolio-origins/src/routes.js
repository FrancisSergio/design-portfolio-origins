import Mainframe from './components/Mainframe.vue'
import Vuejs from './components/Vuejs.vue'
import Leinwandgrenzen from './components/Leinwandgrenzen.vue'
import Dystopia from './components/Dystopia.vue'
import Gruencool from './components/Gruencool.vue'

export default [
    { path: '/', component: Mainframe },
    { path: '/Vuejs', component: Vuejs},
    { path: '/Leinwandgrenzen', component: Leinwandgrenzen},
    {path: '/Gruencool', component: Gruencool},
    {path: '/Dystopia', component: Dystopia}
]