import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/components/Home.vue';
import Participants from '/src/components/Participants.vue';
import PostCheckout from '/src/components/PostCheckout.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Participants',
        name: 'Participants',
        component: Participants,
    },
    {
        path: '/Success',
        name: 'Success',
        component: PostCheckout,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;