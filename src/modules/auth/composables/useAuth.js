import { computed } from "vue"
import { useStore } from "vuex"

const useAuth = () => {

    const store = useStore()

    const createUser = async( user ) => {
        
        const resp = await store.dispatch('auth/createUser', user)
        return resp
        //todo dispatch actions
    }

    const loginUser = async( user ) => {
        const resp = await store.dispatch('auth/loginUser', user)
        return resp
    }

    const checkAuthStatus = async() => {
        const res = await store.dispatch('auth/checkAuthentication')
        return res
    }

    const logOut = () => {
        store.commit('auth/logOut')
    }
    
    return {
        createUser,
        loginUser,
        checkAuthStatus,
        logOut,

        authStatus: computed(() => store.getters['auth/currentState'])

    }
}

export default useAuth