<template>
    <UserFormPage1 v-if="next==false" @next-page="next = true;" />
    <UserFormPage2 v-if="next==true"/>

</template>

<script setup>
    import { useRouter } from 'vue-router'
    import UserFormPage1 from './UserFormPage1.vue';
    import { ref } from 'vue';
import UserFormPage2 from './UserFormPage2.vue';

    let next = ref(false);


    const router = useRouter()
</script>

<style lang="scss" scoped>

</style>