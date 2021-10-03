<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <form>
      <table>
        <thead>
          <th></th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <label>ユーザ名</label>
            <input type="text" v-model="username">
          </tr>
          <tr>
            <label>メールアドレス</label>
            <input type="text" v-model="mailaddress">
          </tr>
          <tr>
            <label>パスワード</label>
            <input type="text" v-model="password">
          </tr>
        </tbody>
      </table>
    </form>
    <router-link to="/Home"><button type="submit" v-on:click="loginUser">ログイン</button></router-link>
    <router-link to="/"><p>新規登録はこちら</p></router-link>
    <footer>Copyright ©2021 XX Inc All rights reserved.</footer>
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js"></script>
<script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
<script>
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
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  const auth = getAuth();
  export default {
  name: 'LoginUser',
  props: {
    msg: String
  },
  data(){
    return{
      username: '',
      mailaddress: '',
      password: ''
    }
  },
  methods:{
    loginUser(){
      signInWithEmailAndPassword(auth,this.mailaddress,this.password)
      .then((userCredential) => {
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
  }
}
</script>
<style scoped>
form table{
  margin: 0 auto;
}
form label{
  float: 10px;
  width: 300px;
}
form input{
  float: right;
}
form th{
  padding: 15px;
}
</style>
