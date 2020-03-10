import Vue from 'vue'
import App from './App'
import router from './router'
import './mock/mock-server'

new Vue({
    el:"#app",
    render:h=>h(App),
    router,
})