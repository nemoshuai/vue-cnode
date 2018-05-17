import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import UserInfo from '@/components/UserInfo'
import Article from '@/components/Article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        main: Home
      }
    },
    {
      path: '/userInfo/:name',
      name: 'userInfo',
      components: {
        main: UserInfo
      }
    },
    {
      path: '/article/:topic_id',
      name: 'article',
      component: Article
    }
  ]
})
