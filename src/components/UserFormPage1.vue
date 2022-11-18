<template>
    <div v-if="available" class=" flex flex-col h-screen justify-center items-center space-y-7">
        <h1 class=" text-4xl text-center">Welcome to the Loop World Cup Sweepstakes</h1>
        <!-- <h1 class=" text-2xl text-center">Current Prize Pool is {{sweepstake}}</h1> -->
        <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input type="text" v-model="userName" placeholder="Your Name Here" class="input input-bordered w-full max-w-xs" />
        </div>
        <div  class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Email Address</span>
            </label>
            <input type="text" v-model="userEmail" placeholder="Your Email Here" class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">I am happy to pay £3 participate in this event</span> 
              <input type="checkbox" v-model="agreed" checked="checked" class="checkbox checkbox-primary" />
            </label>
          </div>
          <div  class="flex row justify-between">
            <button v-if="agreed" @click="formContinue" class="btn btn-primary">Make Your Payment</button>

          </div>
        <ul class="steps  space-x-5">
            <li class="step step-primary">Enter Your Details</li>
            <li class="step">Make Your Payment</li>
            <li class="step ">Get A Random Team</li>
            <li class="step">Receive Confirmation</li>
        </ul>
    </div>
    <div v-if="available==false" class=" flex flex-col h-screen justify-center items-center space-y-7">
      <h1 class=" text-4xl text-center">Welcome to the Loop World Cup Sweepstakes</h1>
      <h1 class=" text-2xl text-center">No more teams available</h1>
    </div>
</template>

<script setup>
    // import { defineEmits } from 'vue';
    import {ref, onMounted} from 'vue';
    import {useStore} from 'vuex';
  import axios from 'axios';

    const store = useStore();

    let userName = ref("");
    let userEmail = ref("");
    let agreed = ref(false);
    let available = ref(true);

    const emits = defineEmits(['nextPage']);

    function formContinue() {
        store.dispatch('updateName', userName);
        store.dispatch('updateEmail', userEmail);

        emits('nextPage');
    }
    onMounted(() => {
        //Gets data from backend and puts it into the store
        axios.get('http://localhost:3000/data') //change to correct_url:3000/data
        .then((response) => {
            console.log(response.data.data); 
            checkTeamsAvailable(response.data.data);
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
    function checkTeamsAvailable(teamData){
      let i = 0;
      for(let x = 0; x<teamData.length; x++)
      {
        if(teamData[x].assignedUser != "")
        {
          i++;
          console.log(i)

          if(i==32)
          {
            available.value = false
            console.log(available)

          }
          else
          {
            available.value = true;
            console.log(available)

          }
        }
      }
     
    }
</script>

<style lang="scss" scoped>

</style>