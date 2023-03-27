<template>
  <v-container v-if="currentEditDoc.data">
    <v-row class="d-flex justify-center align-center">
        <h2>EDITAR INFORMACIÓN</h2> 
    </v-row>
    <v-row class="d-flex justify-center align-center">
        <h3>{{`Total: ${currentEditDoc.data.length}`}}</h3>
    </v-row>
    <v-row class="d-flex justify-center align-center">
        <v-container>
            <v-table
                fixed-header
                height="500px"
            >
                <thead>
                    <tr>
                        <th class="text-center">userID</th>
                        <th class="text-center">userName</th>
                        <th class="text-center">date</th>
                        <th class="text-center">punchIn</th>
                        <th class="text-center">punchOut</th>
                        <th class="text-center">acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="element in currentEditDoc.data"
                        :key="element.userID"
                    >
                        <td>{{ element.userID }}</td>
                        <td>{{ element.userName }}</td>
                        <td>{{ element.date }}</td>
                        <td>{{ element.punchIn }}</td>
                        <td>{{ element.punchOut }}</td>
                        <td>
                            <v-row class="d-flex justify-center">
                                <EditModal :action="1" :docID="route.params.id" :data="element" />
                                <DeleteModal :docID="route.params.id" :dataID="element._id" />
                            </v-row>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-container>
    </v-row>
    <v-row class="d-flex justify-center">
        <v-col class="mt-2">
            <v-btn color="warning" @click="changeView">
                regresar
            </v-btn>
        </v-col>
        <v-col class="mt-2">
            <EditModal :action="2" :docID="route.params.id"/>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import useUploadFile from '@/modules/loadFile/composables/useUploadFile'
import { useRoute, useRouter } from 'vue-router'
import EditModal from '../components/EditInfoModal.vue'
import DeleteModal from '../components/DeleteInfoBtn.vue'

export default {
    name: 'EditInfoView', 
    components: {
        EditModal,
        DeleteModal
    },

    setup () {
        const route = useRoute()
        const router = useRouter()

        const { currentEditDoc, getOneDocInfo } = useUploadFile()
        getOneDocInfo( route.params.id )
        
        return {
            currentEditDoc,
            route,
            changeView: () => {
                router.push({ name: 'cargar'})
            }
        }
    }

}
</script>

<style>

</style>