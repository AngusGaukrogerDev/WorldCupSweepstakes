import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/components/Home.vue';
import Participants from '/src/components/Participants.vue';
import UserFormPage2 from '/src/components/UserFormPage2.vue';
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
        path: '/Page2',
        name: 'Page2',
        component: UserFormPage2,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;