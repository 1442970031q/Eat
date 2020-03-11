import Vue from 'vue'
import App from './App'
import router from './router'
import './mock/mock-server'
import store from './store'
import {Swipe,SwipeItem  } from "vant"
 
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

new Vue({
    el:"#app",
    render:h=>h(App),
    router,
    store
})