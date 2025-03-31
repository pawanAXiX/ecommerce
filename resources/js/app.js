import './bootstrap';
import {createApp} from "vue";
import Home from "./pages/Home.vue";
import router from "./router/index.js";
import MainLayout from "./layout/MainLayout.vue";
import Main from "./pages/Main.vue";



const app=createApp(Main);
app.use(router)
app.mount('#app')
