import Vue from 'vue'
import App from './App.vue'

import Firebase from 'firebase'
import { firestorePlugin } from 'vuefire'

Vue.use(Firebase)
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
