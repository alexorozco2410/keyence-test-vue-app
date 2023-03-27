import crudApi from '@/api/crudApi'

export const createUser = async( {commit}, user ) => {
    
    const { name, email, password } = user
    // console.log('usuario', user)

    try {

        const { data } = await crudApi.post('/users', { name, email, password })
        // console.log(data)
        // const { token } = data

        commit('loginUser', data)

        return { ok: true }

    } catch (error) {
        console.log('error', error.response.data.errors[0].msg)
        return {ok: false, message: error.response.data.errors[0].msg }
    }

}

export const loginUser = async( {commit}, user ) => {
    
    const { email, password } = user
    // console.log('usuario', user)

    try {

        const { data } = await crudApi.post('/auth/login', { email, password })

        commit('loginUser', data)

        return { ok: true }

    } catch (error) {
        console.log('error', error.response.data.msg)
        return {ok: false, message: error.response.data.msg }
    }

}

export const checkAuthentication = async ({ commit }) => {
    const token = localStorage.getItem('token')
    if( !token ) {
        commit('logOut')
        return { ok: false, msg:'No hay token'}
    }

    try {
        
        const { data } = await crudApi.get('/auth/', {
            headers: {
                'x-token': token
            }
        })
        // console.log('resultado peticion', data)

        commit('loginUser', data)

        return { ok: true, }


    } catch (error) {
        commit('logOut')
        return { ok: false, msg:error.response.data.msg}
    }
}