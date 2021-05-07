import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装VueRouter
Vue.use(VueRouter)

const routes=[]

const router=new VueRouter({
  routes,
  mode:'history'
})

export default router