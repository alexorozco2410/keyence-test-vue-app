<template>
  <nav class="navbar">
    <v-row class="d-flex align-start">
      <v-col class="d-flex justify-start align-center">
        <h2> Hecho por Alexis Orozco</h2>
      </v-col>
      <v-col class="d-flex justify-end align-center">
        <v-btn v-if="authStatus == 'authenticated'" color="warning" @click="onLogOut">Salir</v-btn>
      </v-col>
    </v-row>
  </nav>
  
  <router-view  />
</template>

<script>
import { useRouter } from 'vue-router';
import useAuth from "./modules/auth/composables/useAuth";

export default {

  setup () {

    const router = useRouter()
    const { authStatus, checkAuthStatus, logOut } = useAuth()
    checkAuthStatus()

    return {
      authStatus,
      onLogOut: () => {
        router.push({ name: 'login' })
        logOut()
      }
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #62798f;
}

nav {
  padding: 20px;
  background-color: rgb(22, 13, 105) !important;
}

nav a {
  font-weight: bold;
  color: #4f6780;
}

nav a.router-link-exact-active {
  color: #ffffff;
}

</style>
