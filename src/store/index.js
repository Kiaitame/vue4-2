import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index';

const firebaseConfig = {
  apiKey: "AIzaSyBFoMTkDzoUVjxBIwfPCuJMgEhD9X5LV3c",
  authDomain: "vue4-c10a3.firebaseapp.com",
  projectId: "vue4-c10a3",
  storageBucket: "vue4-c10a3.appspot.com",
  messagingSenderId: "715978564664",
  appId: "1:715978564664:web:65e32995b20661d4a2f2cd",
  measurementId: "G-YSGBCZJTF8"
};

firebase.initializeApp(firebaseConfig);
import * as firebase from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    mailaddress: '',
    password: ''
  },
  getters:{
    username: state => state.username,
    mailaddress: state => state.mailaddress,
    password: state => state.password
  },
  mutations: {
    signUp(context){
      context.commit('signUpDo')
    },
    logindo(context){
      context.commit('loginUser')
    },
    setUser(state, username){
      state.username = username;
    },
    setMailaddress(state, mailaddress){
      state.mailaddress = mailaddress;
    },
    setPassword(state, password){
      state.password = password;
    }
  },
  actions: {
    signUpdo({ commit }, userInfo) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, userInfo.mailaddress, userInfo.password)
      .then((response) => {
          console.log(response);
          commit('setUser',userInfo.username)
          commit('setMailaddress',userInfo.mailaddress)
          commit('setPassword',userInfo.password)
          alert(`Success`);
          router.push({path: '/SignupDone'});
        },
        error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`${errorCode} \n ${errorMessage}`);
          router.push('/');
        }
      )
    },
    loginUser({ commit }, userInfo){
      const auth = getAuth();
      signInWithEmailAndPassword(auth,userInfo.mailaddress,userInfo.password)
      .then((userCredential) => {
        commit('setUser',userInfo.username)
        commit('setMailaddress',userInfo.mailaddress)
        commit('setPassword',userInfo.password)
        alert(`Success`);
        this.$router.push('/Home');
        const user = userCredential.user;
        alert(`Success! Hello ${user.name}`);
        }
      )
      .catch((error) => {
        this.$router.push('/Login');
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`errorcode:${errorCode} \n errormessage:${errorMessage}`);
      })
    }
  },
  modules: {
  }
})
