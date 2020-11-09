import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueFirestore from 'vue-firestore'
import fb from './firebase'

Vue.config.productionTip = false
Vue.use(VueFirestore)

let app = ''

fb.auth().onAuthStateChanged(() => {
  if(!app){
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})


