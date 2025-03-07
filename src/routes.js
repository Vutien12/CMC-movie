import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import Action from "./components/Action.vue";
import Performer from "./components/Performer.vue";
import Series from "./components/Series.vue";
import Cartoon from "./components/Cartoon.vue";
import Vip from "./components/Vip.vue";
import Detailmovie from "./components/Detailmovie.vue";
import Hot from "./components/Hot.vue";
import PageNew from "./components/PageNew.vue";
const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
    },
    {
        name: 'Login',
        component: Login,
        path: '/login',
    },
    {
        name: 'Action',
        component: Action,
        path: '/phim-hanh-dong',
    },
    {
        name: 'Performer',
        component: Performer,
        path: '/dien-vien',
    },
    {
        name: 'Series',
        component: Series,
        path: '/phim-bo',
    },
    {
        name: 'Cartoon',
        component: Cartoon,
        path: '/phim-hoat-hinh',
    },
    {
        name: 'Vip',
        component: Vip,
        path: '/mua-goi',
    },
    {
        name: 'Detailmovie',
        component: Detailmovie,
        path: '/xem-phim',
    },
    {
        name: 'PageNew',
        component: PageNew,
        path: '/moi-ra-mat',
    },
    {
        name: 'Hot',
        component: Hot,
        path: '/phim-hot',
    },

];

const router = createRouter ({
    history:createWebHistory(),
    routes
});

export default router;

