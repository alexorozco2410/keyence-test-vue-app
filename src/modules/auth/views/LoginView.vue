<template>
  <v-container class="d-flex justify-center align-center">
    <v-card
      class="mx-auto"
      width="400"
    >
      <v-card-title>
        Login
      </v-card-title>

      <v-card-text>
        <form @submit.prevent="submit">
          <v-text-field
            v-model="userForm.email"
            label="Correo"
          ></v-text-field>

          <v-text-field
            v-model="userForm.password"
            label="Contraseña"
            type='password'
          ></v-text-field>

          <v-btn
            class="me-4"
            type="submit"
          >
            submit
          </v-btn>

          <v-btn @click="handleReset">
            clear
          </v-btn>
        </form>
      </v-card-text>
    </v-card>
    <v-btn :to="{ name: 'register'}">Registro</v-btn>
  </v-container>
</template>

<script>
import {ref} from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth' 
import Swal from 'sweetalert2'

export default {
  setup () {

    const router = useRouter()
    const { loginUser } = useAuth()

    const userForm = ref({
      email: '',
      password: ''
    })

    const submit = async() => {
      const res = await loginUser( userForm.value )
      // console.log(res)
      if ( !res.ok ) {
        Swal.fire('Error', res.message, 'error')
      } else {
        router.push({name: 'cargar'})
      }
    }

    const handleReset = () => {
      console.log('reset')
    }

    return {
      userForm,
      submit,
      handleReset
    }
  }
}
</script>

<style>

</style>