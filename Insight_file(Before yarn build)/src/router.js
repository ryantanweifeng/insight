import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home.vue'; 


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/Register',
        name: 'Register',
        component: () =>
        import('./Register.vue')
      },
      {
        path: '/DashboardPage',
        name: 'DashboardPage',
        component: () =>
        import('./DashboardPage.vue'),
        props: true,
      },
      {
        path: '/Graph',
        name: 'Graph',
        component: () =>
        import('./components/Graphs.vue')
      },
      {
        path: '/InputData',
        name: 'InputData',
        component: () =>
        import('./InputData.vue'),
        props: true
      },
      {
        path: '/WarehouseM',
        name: 'WarehouseM',
        component: () =>
        import('./WarehouseM.vue'),
        props: true
      },
      {
        path: '/HomePage',
        name: 'HomePage',
        component: () =>
        import('./HomePage.vue'),
        props: true
      }
      

      
  ]
})