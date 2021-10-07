import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index';
import firebase from 'firebase/app';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    mailaddress: '',
    password: '',
    balance: 0
  },
  getters:{
    username: state => state.username,
    mailaddress: state => state.mailaddress,
    password: state => state.password,
    balance: state => state.balance
  },
  mutations: {
    // signUp(context){
    //   context.commit('registerUser')
    // },
    // login(context){
    //   context.commit('loginUser')
    // },
    setUser(state, username){
      state.username = username;
    },
    setMailaddress(state, mailaddress){
      state.mailaddress = mailaddress;
    },
    setPassword(state, password){
      state.password = password;
    },
    setBalance(state,balance){
      state.balance = balance;
    }
  },
  actions: {
    registerUser({ commit }, userInfo) {
      firebase.auth().createUserWithEmailAndPassword(userInfo.mailaddress, userInfo.password)
      .then((response) => {
        console.log(response);
        commit('setUser',userInfo.username)
        commit('setMailaddress',userInfo.mailaddress)
        commit('setPassword',userInfo.password)
        alert(`Success`);
        router.push('/SignupDone');
        },
      error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode} \n ${errorMessage}`);
        router.push('/');
        }
      )
    },
    loginUser({ commit }, userInfo) {
      firebase.auth().signInWithEmailAndPassword(userInfo.mailaddress,userInfo.password)
      .then((response) => {
        console.log(response);
        commit('setUser',userInfo.username)
        commit('setMailaddress',userInfo.mailaddress)
        commit('setPassword',userInfo.password)
        alert(`Success`);
        router.push('/Home');
        alert(`Success! Hello ${userInfo.username}`);
        }
      )
      .catch((error) => {
        router.push('/Login');
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`errorcode:${errorCode} \n errormessage:${errorMessage}`);
      })
    },
    logoutUser(){
      firebase.auth().signOut();
    }
  },
  modules: {
  }
})
