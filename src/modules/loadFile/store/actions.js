import crudApi from '@/api/crudApi'

export const saveInfo = async( {commit}, info ) => {

    try {

        const { data } = await crudApi.post('/document', info, {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        })
        // console.log(data.document)

        commit('addNewDocument', data.document)

        return { ok: true, msg: data.msg }

    } catch (error) {
        console.log('error', error)
        return {ok: false, message: 'No se pudo guardar la información' }
    }

}

export const getAllDocuments = async( {commit} ) => {


    try {

        const { data } = await crudApi.get('/document', {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        })
        // console.log(data)

        commit('saveAllDocuments', data.documents)

        return { ok: true, msg: data.msg }

    } catch (error) {
        console.log('error', error)
        return {ok: false, message: 'No se puede obtener la información' }
    }

}

export const deleteDocument = async( {commit}, id ) => {

    try {

        const { data } = await crudApi.delete(`/document/${id}`, {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        })
        // console.log('delete', data)

        commit('deleteDocument', data.document._id)

        return { ok: true, msg: data.msg }

    } catch (error) {
        console.log('error', error)
        return {ok: false, message: 'No se puede obtener la información' }
    }

}

export const getOneDocument = async( {commit}, id ) => {


    try {

        const { data } = await crudApi.get(`/document/${id}`, {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        })
        // console.log(data)

        commit('getOneDocument', data.document)

        return { ok: true, msg: data.msg }

    } catch (error) {
        console.log('error', error)
        return {ok: false, message: 'No se puede obtener la información' }
    }

}

export const updateData = async( {commit}, {id, info} ) => {

    // console.log('informacion a guardar', info)

    try {

        const { data } = await crudApi.put(`/document/update-oneData/${id}`, info, {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        })
        // console.log(data)

        commit('updateEditData', data.data)

        return { ok: true, msg: data.msg }

    } catch (error) {
        console.log('error', error)
        return {ok: false, message: 'No se puede obtener la información' }
    }

}

export const updateNewData = async( {commit}, {id, info} ) => {

    try {
        delete info._id
        // console.log('info action', info)
        const { data } = await crudApi.put(`/document/add-data/${id}`, info, {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        })
        // console.log(data)
        commit('updateEditData', data.document)

        return { ok: true, msg: data.msg }

    } catch (error) {
        console.log('error', error)
        return {ok: false, message: 'No se puede obtener la información' }
    }
}


export const deleteOneData = async( {commit}, {idDoc, idData} ) => {

    try {

        const { data } = await crudApi.put(`/document/del-data/${idDoc}`, {idData}, {
            headers: {
                'x-token': localStorage.getItem('token')
            }
        })
        //console.log(data)
        commit('updateEditData', data.data)

        return { ok: true, msg: data.msg }

    } catch (error) {
        console.log('error', error)
        return {ok: false, message: 'No se puede obtener la información' }
    }

}