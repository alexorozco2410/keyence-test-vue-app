<template>
  <div>
    <v-btn 
        color="warning"
        @click="deleteDoc(docID)"
    >
        Eliminar
    </v-btn>
  </div>
</template>

<script>
import useUploadFile from '@/modules/loadFile/composables/useUploadFile'
export default {
    props: {
        docID: String
    },
    setup () {

        const { deleteDocument } = useUploadFile()

        return {
            deleteDoc: (id) => {
                deleteDocument(id)
            }
        }
    }
}
</script>

<style>

</style>