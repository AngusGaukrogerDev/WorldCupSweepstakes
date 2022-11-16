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
import { onMounted, ref } from 'vue';
const store = useStore();
// let teamList = ref("");
onMounted(() => {
        //Gets data from backend and puts it into the store
        axios.get('http://localhost:3000/data') //change to correct_url:3000/data
        .then((response) => {
            console.log(response.data.data); 
            assignTeam(response.data.data);
            //store.dispatch('updateTeams', response.data); //calls setter in store and passes data through
            
            // console.log("Sent");
            // .then((response) => {
            // console.log(response);
            // }, (error) => {
            // console.log(error);
            // });

        })
        .catch((error) => {
            console.log(error);
        })
    });

function assignTeam(teamList){

    const rand=Math.floor(Math.random() * teamList.length)
    // let teamFound = teamList.find()
    // let {ID, team, assignedUser} = teamList;
    // teamList.forEach(ID => {
    //     if(ID == rand)
    // });
    axios.post('http://localhost:3000/assigned', {"team": teamList[rand].team, "assignedUser": "Random!"})
}
</script>

<style lang="scss" scoped>

</style>