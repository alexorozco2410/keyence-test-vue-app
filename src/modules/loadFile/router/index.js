

export default {

    name: 'archivos',
    component: () => import(/* webpackChunkName: "Archivos Layout" */ '../layout/LoadFileLayout.vue'),
    children: [
        {
            path: '',
            name: 'cargar',
            component: () => import(/* webpackChunkName: "cargar Archivo" */ '@/modules/loadFile/views/UploadFileView.vue'),
        },
        {
            path: '/editar/:id',
            name: 'editar',
            component: () => import(/* webpackChunkName: "editar Informacion" */ '@/modules/loadFile/views/EditInfo.vue'),
        },
    ]

}