<template>
  <div class="Home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HomeUser />
  </div>
</template>

<script>
import HomeUser from '../components/HomeUser.vue'

export default {
  name: 'Home',
  components: {
    HomeUser
  }
}
</script>

