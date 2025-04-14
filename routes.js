import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import SignUp from "./views/SignUp.vue";
import Login from "./views/Login.vue";
import PageAction from "./views/PageAction.vue";
import PageSeries from "./views/PageSeries.vue";
import Cartoon from "./components/Cartoon.vue";
import Vip from "./components/Vip.vue";
import Detailmovie from "./views/Detailmovie.vue";
import MovieSeries from "./views/MovieSeries.vue";
import PageHot from "./views/PageHot.vue";
import PageNew from "./views/PageNew.vue";
import PageHorror from "./views/PageHorror.vue";
import TermsConditions from "./components/TermsConditions.vue";
import Test from "./components/Test.vue";
import Test2 from "./components/Test2.vue";
import Payment from "./components/Payment.vue";
import Introduce from "./components/Introduce.vue";
import Contact from "./components/Contact.vue";
import Support from "./components/Support.vue";
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
        name: 'PageAction',
        component: PageAction,
        path: '/phim-hanh-dong',
    },
    {
        name: 'PageHorror',
        component: PageHorror,
        path: '/phim-kinh-di',
    },
    {
        name: 'PageSeries',
        component: PageSeries,
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
        path: '/xem-phim/:id',
    },
    {
        name: 'MovieSeries',
        component: MovieSeries,
        path: '/xem-phim-bo/:id', 
    },
    {
        name: 'PageNew',
        component: PageNew,
        path: '/moi-ra-mat',
    },
    {
        name: 'PageHot',
        component: PageHot,
        path: '/phim-hot',
    },
    {
        name: 'TermsConditions',
        component: TermsConditions,
        path: '/dieu-kien',
    },
    {
        name: 'Test',
        component: Test,
        path: '/test',
    },
    {
        name: 'Test2',
        component: Test2,
        path: '/test2',
    },
    {
        name: 'Payment',
        component: Payment,
        path: '/Payment/:packageName/:price',
    },
    {
        name: 'Introduce',
        component: Introduce,
        path: '/gioi-thieu',
    },
    {
        name: 'Contact',
        component: Contact,
        path: '/lien-he',
    },
    {
        name: 'Support',
        component: Support,
        path: '/ho-tro',
    },
];

const router = createRouter ({
    history:createWebHistory(),
    routes
});

export default router;

