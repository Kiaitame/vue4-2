<template>
  <div class="Home">
    <h1>{{ msg }}</h1>
    <h1>{{ user }}</h1>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: 'Welcome to Home page',
    }
  },
  computed:{
    user:{
    get(){
      return this.$store.getters.username;
    }
    }
  }
}
</script>

