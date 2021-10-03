<template>
  <div class="CreateUser">
    <img alt="Vue logo" src="../assets/logo.png">
    <CreateUser msg="新規登録画面"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import CreateUser from '@/components/CreateUser.vue'
import CreateUser from '../components/CreateUser.vue'

export default {
  name: 'Signup',
  components: {
    // CreateUser
    CreateUser
  }
}
</script>
