<template>
  <div>
    <v-row>
        <v-container v-if="currentDocuments.length == 0">
            <h3>No hay informacion cargada</h3>
        </v-container>
        <v-container v-else>
            <v-table
                fixed-header
                height="500px"
            >
                <thead>
                <tr>
                    <th class="text-center">Documento</th>
                    <th class="text-center">acciones</th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="(element, index) in currentDocuments"
                    :key="element._id"
                >
                    <td>{{ `Documento #${index + 1}` }}</td>
                    <td>
                        <v-row class="d-flex justify-center">
                            <editBTN class="mr-2" :docID="element._id" />
                            <deleteDocBTN class="ml-2" :docID="element._id" />
                        </v-row>
                    </td>
                </tr>
                </tbody>
            </v-table>
        </v-container>
    </v-row>
  </div>
</template>

<script>
import useUploadFile from '@/modules/loadFile/composables/useUploadFile'
import editBTN from './EditBtn.vue'
import deleteDocBTN from './DeleteAllDocBtn.vue'
export default {
    components: {
        editBTN,
        deleteDocBTN
    },
    setup () {

        const { currentDocuments } = useUploadFile()

        return {
            currentDocuments
        }
    }
}
</script>

<style>

</style>