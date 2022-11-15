<template>
    <div class=" flex flex-col h-screen justify-center items-center space-y-7">
        <label>Your team is:</label>
        <label>{{teamName}}</label>
        <button @click="formBack" class="btn btn-primary">Back</button>
        <button  class="btn btn-primary">Payment Screen</button>
        <ul class="steps  space-x-5">
            <li class="step step-primary">Enter Your Details</li>
            <li class="step step-primary">Make Your Payment</li>
            <li class="step step-primary">Get A Random Team</li>
            <li class="step">Receive Confirmation</li>
        </ul>
    </div>
</template>

<script setup>
import axios from 'axios';
import {useStore} from 'vuex';

const store = useStore();
onMounted(() => {
        //Gets data from backend and puts it into the store
        axios.get('http://localhost:3000/teamdata') //change to correct_url:3000/data
        .then((response) => {
            console.log(response); 
            //store.dispatch('updateTeams', response.data); //calls setter in store and passes data through
            axios.post('http://localhost:3000/teamdata', response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    });
</script>

<style lang="scss" scoped>

</style>