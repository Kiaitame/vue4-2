<template>
  <div class="Home">
    <h1>{{ msg }}</h1>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
const auth = getAuth();
const user = auth.currentUser;

export default {
  data() {
    return {
      msg: 'Welcome to Home page',
      name: user.email
    }
  }
  // methods:{

  // }
}
</script>

