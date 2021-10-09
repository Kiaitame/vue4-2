<template>
  <div class="homeuser">
    <h1>{{ user }}さんようこそ</h1>
    <p>残高：{{ balance }}</p>
    <button class="logout" v-on:click="logout">ログアウト</button>
    <footer>Copyright ©2021 XX Inc All rights reserved.</footer>
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js"></script>
<script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
<script>

  export default {
    name: 'HomeUser',
    data() {
    return {
        
    }
    },
  computed:{
    user:{
        get(){
            return this.$store.getters.username;
        }
    },
    balance:{
        get(){
            return this.$store.getters.balance;
        }
    }
  },
  methods:{
      logout(){
          this.$store.dispatch('logoutUser');
      }
  }
}
</script>
<style scoped>
template {
    margin: 0;
    padding: 0;
}
h1 {
  text-align: left;
}
p {
    text-align: right;
    margin-top: 0;
}
footer {
    text-align: center;
    padding: 20px 0;
    margin: 20px 0;
}
.logout {
    display: block;
    margin: 0 0 0 auto;
}
</style>