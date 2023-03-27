<template>
  <v-container>
    <v-row class="d-flex justify-center align-center">
        <v-btn 
            color="indigo"
            size="large"
            variant="flat"
            rounded
            @click="$refs.fileInput.click()"
        >
            Buscar
        </v-btn>

        <v-file-input 
            class="input-file" 
            label="Seleccionar archivo" 
            accept=".xlsx"
            ref="fileInput"
            id="inputFile"
            @change="LoadFile"
        ></v-file-input>
    </v-row>
    <v-row v-if="file.length != 0">
        <v-container class="mb-3">
            <v-table
                fixed-header
                height="300px"
            >
                <thead>
                <tr>
                    <th class="text-center">userID</th>
                    <th class="text-center">userName</th>
                    <th class="text-center">date</th>
                    <th class="text-center">punchIn</th>
                    <th class="text-center">punchOut</th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="element in file"
                    :key="element.userID"
                >
                    <td>{{ element.userID }}</td>
                    <td>{{ element.userName }}</td>
                    <td>{{ element.date }}</td>
                    <td>{{ element.punchIn }}</td>
                    <td>{{ element.punchOut }}</td>
                </tr>
                </tbody>
            </v-table>
        </v-container>
    </v-row>
    <v-row class="d-flex justify-center">
        <v-btn
            :disabled="file.length == 0"
            color="warning"
            size="large"
            rounded
            @click="saveNewDoc"
        >
        Guardar Documento
        </v-btn>
    </v-row>
    <documents-table />
  </v-container>
</template>


<script>
import useUploadFile from '@/modules/loadFile/composables/useUploadFile'
import {computed} from 'vue'
import {useStore} from 'vuex'
import DocumentsTable from '../components/DocumentsTable.vue'

export default {
    components: {
        DocumentsTable
    },
    name: 'UploadFileView', 

    setup () {
        const store = useStore()
        const {file, LoadFile, saveNewDoc, getDocuments, currentDocuments} = useUploadFile()

        getDocuments();

        return {
            file,
            LoadFile,
            saveNewDoc,

            getInfoDocument: computed(() => store.getters['getDocumentData']),
            currentDocuments
        }
        
    }

}
</script>

<style>
.input-file {
    min-width: 200px !important;
}
</style>