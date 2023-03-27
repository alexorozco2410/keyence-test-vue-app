<template>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
            class="ml-2"
          color="red"
          v-bind="props"
        >
          Eliminar
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
            <h2>Esta acción no se puede revertir</h2>
        </v-card-text>
        <v-card-actions class="d-flexm justify-center">
            <v-btn color="warning" @click="deleteData">
                Aceptar
            </v-btn>

            <v-btn color="primary" @click="dialog = false">
                Cancelar
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import { ref } from 'vue'
import useUploadFile from '@/modules/loadFile/composables/useUploadFile'
export default {
    props: {
        docID: String,
        dataID: String
    },

    setup (props) {

        const dialog = ref(false)
        const { deleteOneData } = useUploadFile()

        const deleteData = async() => {
            await deleteOneData( props.docID, props.dataID )
            dialog.value = false
            // console.log(dataForm.value)
        }

        return {
            dialog,
            deleteData
            
        }
    }

}
</script>

<style>

</style>