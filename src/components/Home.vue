<template>

        <Navbar />
        <UserForm />
        <Footer />
</template>

<script setup>
    import {computed} from 'vue';
    import {useStore} from 'vuex';
import Footer from './Footer.vue';
    import Navbar from './Navbar.vue';
    import UserForm from './UserForm.vue';

    const store = useStore();

    const name = computed(() =>  {
        return store.state.user.name;
    })
</script>