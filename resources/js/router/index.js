import {createRouter, createWebHistory} from "vue-router";

import Products from "../pages/Products.vue";
import Home from "../pages/Home.vue";
import PageComponent from "../components/PageComponent.vue";

const routes=[
    {
      name:'Home',
      component:Home,
      path:'/',
    },
    {
        name: 'Products',
        path: '/products',
        component: Products,
    },
    {
        name:'Category',
        path:'/products/category',
        props:true,
        component:PageComponent,
        children:[
            {

                path:':slug',
                component:PageComponent,
                props:true
            }
        ]
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes:routes,
})
export default router;
