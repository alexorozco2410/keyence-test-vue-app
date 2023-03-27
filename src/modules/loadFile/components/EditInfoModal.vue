<template>
    <v-dialog
      v-model="dialog"
      persistent
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
        class="mr-2"
          color="primary"
          v-bind="props"
        >
          {{action == 1 ? 'Editar' : 'Agregar'}}
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
            <form @submit.prevent="updateInfo(docID)">
                <v-text-field
                    v-model="dataForm.userID"
                    label="userID"
                ></v-text-field>

                <v-text-field
                    v-model="dataForm.userName"
                    label="userName"
                ></v-text-field>

                <v-text-field
                    v-model="dataForm.date"
                    label="date"
                ></v-text-field>

                <v-text-field
                    v-model="dataForm.punchIn"
                    label="punchIn"
                ></v-text-field>

                <v-text-field
                    v-model="dataForm.punchOut"
                    label="punchOut"
                ></v-text-field>

                <v-btn
                    class="me-4"
                    type="submit"
                >
                    Aceptar
                </v-btn>

                <v-btn @click="reset">
                    Cerrar
                </v-btn>
            </form>
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
import { ref } from 'vue'
import useUploadFile from '@/modules/loadFile/composables/useUploadFile'
export default {
    props: {
        docID: String,
        data: Object,
        action: Number,
    },

    setup (props) {

        const dialog = ref(false)
        const { updateDocInfo, addNewData } = useUploadFile()

        const dataForm = ref({
            userID: '',
            userName: '',
            date: '',
            punchIn: '',
            punchOut: '',
            _id: ''
        })

        const initForm = () => {
            
            dataForm.value = {...props.data}
            // console.log(dataForm.value)
        }

        const reset = () => {
            dialog.value = false,
            initForm()
        }

        const updateInfo = async( id ) => {
            if (props.action == 1) {
                await updateDocInfo(id, dataForm.value)
                reset()
            } else {
                await addNewData(id, dataForm.value)
                reset()
            }
        }

        initForm()

        return {
            dialog,
            dataForm,
            reset,
            updateInfo,
            
        }
    }

}
</script>

<style>

</style>