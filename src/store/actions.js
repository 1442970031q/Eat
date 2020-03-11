import {getHomeDataAjax}from './../api'

export default{
    getHomeData({commit}){
        getHomeDataAjax().then((success)=>{
            commit( 'getHomeData',success)
        })
    }
}