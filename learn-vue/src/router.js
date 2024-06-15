import VueRouter from "vue-router";
import HomeView from "@/components/HomeView.vue";
import AboutView from "@/components/AboutView.vue";

const routes = [
    {
        path: '/',
        redirect: HomeView
    },
    {
        path: '/home',
        component: HomeView
    },
    {
        path: '/about',
        component: AboutView
    },
];

const router = new VueRouter({
    routes
})

export default router
