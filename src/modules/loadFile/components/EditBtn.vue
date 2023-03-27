<template>
  <div>
    <v-btn 
        color="primary"
        @click="changeView(docID)"
    >
        Editar
    </v-btn>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    props: {
        docID: String
    },
    setup () {

        const router = useRouter()

        return {
            changeView: (id) => {
                router.push({ name: 'editar', params: { id: id } })
            }
        }
    }
}
</script>

<style>

</style>