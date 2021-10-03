import Vue from 'vue'
import Vuex from 'vuex'
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
const auth = getAuth();



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    signUp() {
      createUserWithEmailAndPassword(auth, this.mailaddress, this.password)
      .then(
        () => {
          alert('Success')
        },
        error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`${errorCode} \n ${errorMessage}`);
        }
      )
    },
    loginUser(){
      signInWithEmailAndPassword(auth,this.mailaddress,this.password)
      .then(() => {
          this.$router.push('/Home');
          // const user = userCredential.user;
          // alert(`Success! Hello ${user.name}`);
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
  actions: {
    signUpdo(context){
    context.commit('signUp')},
    logindo(context){
      context.commit('loginUser')},
  },
  modules: {
  }
})
