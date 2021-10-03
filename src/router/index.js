import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/Signup.vue'
// import { onAuthStateChanged } from "firebase/auth";
// import * as firebase from 'firebase/app';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// const auth = getAuth();



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/SignupDone',
    name: 'SignupDone',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupDone.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: { requiresAuth: true }  
  }


]

const router = new VueRouter({
  routes
})

import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     // const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//     // next({
//     //   path: '/Login',
//     //   query: { redirect: to.fullPath }
//     // })

//   }
// });
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    // このルートはログインされているかどうか認証が必要です。
    // もしされていないならば、ログインページにリダイレクトします。
    onAuthStateChanged(auth, (user) => {
      if (user) {
        next()
      } else {
        next({
          path: '/Login',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next() // next() を常に呼び出すようにしてください!
  }
})
export default router
