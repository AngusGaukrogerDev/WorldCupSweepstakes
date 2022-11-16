<template>
    <UserFormPage1 v-if="next==0" @next-page="next++;" />
    <UserFormPage2 v-if="next==1" @prev-page="next--" @next-page="next++;"/>
</template>

<script setup>
    import { useRouter } from 'vue-router'
    import { ref } from 'vue';

    import UserFormPage1 from './UserFormPage1.vue';
    import UserFormPage2 from './UserFormPage2.vue';

    let next = ref(0);


    const router = useRouter()
</script>

<style lang="scss" scoped>

</style>