import Vue from 'vue'
import router from 'vue-router'
import home from './../pages/home/home'
import center from './../pages/center/center'
import search from './../pages/search/search'


Vue.use(router)

export default new router({
    routes: [{
        path:'/home',
        component:home
    },
    {
        path:'/center',
        component:center
    },
    {
        path:'/search',
        component:search
    },
    {
        path:'/',
        component:home
    }]
})
