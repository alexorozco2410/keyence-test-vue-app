import { createStore } from 'vuex'

import auth from '../modules/auth/store'
import file from '../modules/loadFile/store'

export default createStore({
  state: {
    form: [
      /*{userID: '0001', userName: 'AAA', date: '01/01/1997', punchIn: '9:00', punchOut: '6:00'},
      {userID: '0002', userName: 'BBB', date: '01/01/1997', punchIn: '9:00', punchOut: '6:00'},
      {userID: '0003', userName: 'CCC', date: '01/01/1997', punchIn: '9:00', punchOut: '6:00'},
      {userID: '0004', userName: 'DDD', date: '01/01/1997', punchIn: '9:00', punchOut: '6:00'},
      {userID: '0005', userName: 'EEE', date: '01/01/1997', punchIn: '9:00', punchOut: '6:00'},
      {userID: '0006', userName: 'FFF', date: '01/01/1997', punchIn: '9:00', punchOut: '6:00'}*/
    ]
  },
  getters: {
    getDocumentData( state, getters ) {
      console.log(getters)
      return state.form
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    file
  }
})
