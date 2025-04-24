import {createRouter, createWebHistory} from "vue-router";

import Products from "../pages/Products.vue";
import Home from "../pages/Home.vue";
import Category from "../pages/Category.vue";
import Login from "../pages/Login.vue";
import {authStore} from "../store/authStore.js";

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },

    {
        name: 'Products',
        path: '/products',
        component: Products,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'Category',
        path: '/products/category/:slug',
        component: Category,
        props: true,
        meta: {
            requiresAuth: true
        }
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

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!authStore.isAuthenticated) {
            console.log(authStore.isAuthenticated)
            return next({path: '/login'});
        }
        return next();
    }
    return next();
});


export default router;
