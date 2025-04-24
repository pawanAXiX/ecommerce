import './bootstrap';
import {createApp} from "vue";
import Home from "./pages/Home.vue";
import router from "./router/index.js";
import MainLayout from "./layout/MainLayout.vue";
import Main from "./pages/Main.vue";
import {createPinia} from "pinia";

const pinia=createPinia();

const app=createApp(Main);
app.use(pinia);
app.use(router)
app.mount('#app')
