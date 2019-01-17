import Vue from "vue"

import Router from "vue-router"

import Login from "../dengluye/login/index"

import Daohangtiao from "../dengluye/login/daohangtiao"


Vue.use(Router)



export default new Router({
  routes: [
    {path: '/', redirect: '/login'},

    {path: '/login' , component:Login},

    {path: '/hove' , component: Daohangtiao}

    
  ]
})
