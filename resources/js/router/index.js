import {createRouter, createWebHistory} from "vue-router";

import Products from "../pages/Products.vue";
import Home from "../pages/Home.vue";
import PageComponent from "../components/PageComponent.vue";
import Category from "../pages/Category.vue";
import Login from "../pages/Login.vue";

const routes=[
    {
      name:'Home',
      component:Home,
      path:'/',
    },
    {
        name:'Login',
        component: Login,
        path:'/login'
    },
    {
        name: 'Products',
        path: '/products',
        component: Products,
    },
    {
        name:'Category',
        path:'/products/category/:slug',
        component:Category,
        props:true,
        // children:[
        //     {
        //         name:'Subpages',
        //         path:':slug',
        //         component:Category,
        //         props:true
        //     }
        // ]
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes:routes,
})
export default router;
