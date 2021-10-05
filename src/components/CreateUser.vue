<template>
  <div class="create">
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
            <input type="text" v-model="userInfo.username">
          </tr>
          <tr>
            <label>メールアドレス</label>
            <input type="text" v-model="userInfo.mailaddress">
          </tr>
          <tr>
            <label>パスワード</label>
            <input type="text" v-model="userInfo.password">
          </tr>
        </tbody>
      </table>
    </form>
    <button type="submit" v-on:click="signUp">新規登録</button>
    <router-link to="/Login"><p>ログインはこちらから</p></router-link>
    <footer>Copyright ©2021 XX Inc All rights reserved.</footer>
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js"></script>
<script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
<script>

  export default {
  name: 'CreateUser',
  props: {
    msg: String
  },
  data(){
    return{
      userInfo: {
        username: '',
        mailaddress: '',
        password: ''
      }
    }
  },
  methods: {
    signUp(){
      this.$store.dispatch('registerUser',this.userInfo);
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