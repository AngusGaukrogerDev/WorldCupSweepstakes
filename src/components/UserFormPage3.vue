<template>
    <div class=" flex flex-col h-screen justify-center items-center space-y-7">
        <label>Your team is:</label>
        <label>{{teamName}}</label>
        <button @click="sendEmail()" class="btn btn-primary">Send Email Confirmation</button>
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
import { useRouter } from 'vue-router'
import { onMounted, ref, computed} from 'vue';
const store = useStore();
const router = useRouter();
let teamName = ref("");
const name = computed(() =>  {
        return store.state.user.name;
    })

// let teamList = ref("");
onMounted(() => {
        //Gets data from backend and puts it into the store
        axios.get('http://localhost:3000:3000/data') //change to correct_url:3000/data
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

    let x = 0;

    while(teamList[rand].assignedUser != "")
    {
        if(x==32)
        {
            break;
        }
        rand=Math.floor(Math.random() * teamList.length);
        x++;
        

    }
    if(x<32)
    {
        axios.post('http://localhost:3000:3000/assigned', {"team": teamList[rand].team, "assignedUser": name.value})
        teamName.value =  teamList[rand].team;
    }
    else
    {
        teamName.value =  "No more teams left!";
    }

}
function sendEmail() {
        let formData = {
            name: store.state.user.name,
            email: store.state.user.email,
            team: teamName.value    
        }
        axios.post('http://localhost:3000:3000/sendemail', {"name": formData.name, "email": formData.email, "team": formData.team });
        router.push('/Participants');
    }
</script>

<style lang="scss" scoped>

</style>