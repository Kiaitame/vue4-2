<template>
  <div class="Login">
    <img alt="Vue logo" src="../assets/logo.png">
    <LoginUser msg="Login"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import CreateUser from '@/components/CreateUser.vue'
import LoginUser from '../components/LoginUser.vue'

export default {
  name: 'Login',
  components: {
    LoginUser
  }
}
</script>
