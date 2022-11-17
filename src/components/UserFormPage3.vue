<template>
    <div class=" flex flex-col h-screen justify-center items-center space-y-7">
        <label>Your team is:</label>
        <label>{{teamName}}</label>
        <button  class="btn btn-primary">Send Email Confirmation</button>
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
import { onMounted, ref, computed} from 'vue';
const store = useStore();
let teamName = ref("");
const name = computed(() =>  {
        return store.state.user.name;
    })

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
   
    // console.log(teamList);
    
    let rand=Math.floor(Math.random() * teamList.length)

    while(teamList[rand].assignedUser != "")
    {
        rand=Math.floor(Math.random() * teamList.length);
    }
    axios.post('http://localhost:3000/assigned', {"team": teamList[rand].team, "assignedUser": name.value})
    teamName.value =  teamList[rand].team;

}
</script>

<style lang="scss" scoped>

</style>