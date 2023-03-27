import { computed, ref } from "vue"
import { useStore } from "vuex"


import readXlsxFile from 'read-excel-file'


const useUploadFile = () => {

    const store = useStore()

    const file = ref([])
    const isValidDoc = ref(false)

    const calculateTime = ( time ) => {
        return new Date(time).toISOString().slice(11, 19).substring(0, 5)
    }

    const formatDate = ( date ) => {
        let infoDate = null
        infoDate = new Date(date.toString())
        infoDate.setMinutes(infoDate.getMinutes() + infoDate.getTimezoneOffset())
        return `${infoDate.getMonth() + 1}-${infoDate.getDate()}-${infoDate.getFullYear()}`
    }

    const LoadFile = async() => {

        const input = document.getElementById('inputFile');
        if (input.files.length == 0) return
        // console.log(input.files[0])
        const rows = await readXlsxFile( input.files[0])
        
        for( let i = 1; i < rows.length; i++ ) {
            file.value.push({
                userID: rows[i][0],
                userName: rows[i][1],
                date: formatDate(rows[i][2]),
                punchIn: calculateTime(rows[i][3]),
                punchOut: calculateTime(rows[i][4]),
            })
        }
    }

    const saveNewDoc = async() => {
        const resp = await store.dispatch('file/saveInfo', file.value)
        file.value = []
        return resp
    }

    const getDocuments = async() => {
        await store.dispatch('file/getAllDocuments')
        // return resp
    }

    const deleteDocument = async( id ) => {
        const resp = await store.dispatch('file/deleteDocument', id)
        return resp
    }

    const getOneDocInfo = async( id ) => {
        await store.dispatch('file/getOneDocument', id)
    }

    const updateDocInfo = async( id, info ) => {
        await store.dispatch('file/updateData', {id, info})
    }

    const addNewData = async( id, info ) => {
        await store.dispatch('file/updateNewData', {id, info})
    }

    const deleteOneData = async( idDoc, idData ) => {
        // console.log(idDoc, idData)
        await store.dispatch('file/deleteOneData', {idDoc, idData})
    }

    return {
        file,
        isValidDoc,
        
        LoadFile,
        saveNewDoc,
        getDocuments,
        deleteDocument,
        getOneDocInfo,
        updateDocInfo,
        deleteOneData,
        addNewData,

        currentDocuments: computed(() => store.getters['file/getAllDocuments']),
        currentEditDoc: computed(() => store.getters['file/getEditDoc'])
    }

}

export default useUploadFile