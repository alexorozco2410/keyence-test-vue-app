import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'
import { createRouter, createWebHashHistory } from 'vue-router'

// import UploadFileView from '../views/UploadFileView.vue'

import authRouter from '../modules/auth/router'
import archivosPath from '../modules/loadFile/router'

const routes = [
  /*{
    path: '/archivos',
    name: 'archivos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UploadFileView
  },*/
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/archivos',
    beforeEnter: [isAuthenticatedGuard],
    ...archivosPath
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
