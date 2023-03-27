

export const addNewDocument = ( state, document ) => {
    // console.log('informacion en mutation')
    state.documents.push(document)
}

export const saveAllDocuments = ( state, documents ) => {
    state.documents = documents
}

export const deleteDocument = ( state, id ) => {
    const index = state.documents.findIndex( doc => doc._id == id)

    if (index != -1) {
        state.documents.splice(index, 1)
    }
}

export const getOneDocument = ( state, document ) => {
    state.editDocInfo = document
}

export const updateEditData = ( state, document ) => {
    state.editDocInfo = document
}

