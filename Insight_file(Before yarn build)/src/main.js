import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import "./assets/scss/material-dashboard.scss";
import router from './router' 
import HighchartsVue from 'highcharts-vue'


 

require("dotenv").config();
Vue.config.productionTip = false
Vue.use(HighchartsVue)

new Vue({
  
  vuetify,
  router, // Router added to the Vue instance
  render: h => h(App)
}).$mount('#app')
