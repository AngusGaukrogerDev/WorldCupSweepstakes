<template>

        <Navbar />
        <UserForm />
        <Footer />
        <!-- UNCOMMENT BELOW TO TEST FUNCTIONALITY OF FE - BE COMMS -->
        <!-- <UserFormPage3 />  -->
</template>

<script setup>
    import {computed} from 'vue';
    import {useStore} from 'vuex';
    import Footer from './Footer.vue';
    import Navbar from './Navbar.vue';
    import UserForm from './UserForm.vue';
import UserFormPage3 from './UserFormPage3.vue';

    // const store = useStore();

    // const name = computed(() =>  {
    //     return store.state.user.name;
    // })
</script>