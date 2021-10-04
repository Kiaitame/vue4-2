import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// const firebaseConfig = {
//   apiKey: "AIzaSyBFoMTkDzoUVjxBIwfPCuJMgEhD9X5LV3c",
//   authDomain: "vue4-c10a3.firebaseapp.com",
//   projectId: "vue4-c10a3",
//   storageBucket: "vue4-c10a3.appspot.com",
//   messagingSenderId: "715978564664",
//   appId: "1:715978564664:web:65e32995b20661d4a2f2cd",
//   measurementId: "G-YSGBCZJTF8"
// };

// import * as firebase from 'firebase/app';
// firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
