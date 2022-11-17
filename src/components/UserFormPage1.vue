<template>
    <div class=" flex flex-col h-screen justify-center items-center space-y-7">
        <h1 class=" text-4xl text-center">Welcome to the Loop World Cup Sweepstakes</h1>
        <h1 class=" text-2xl text-center">Current Prize Pool is {{sweepstake}}</h1>
        <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input type="text" v-model="userName" placeholder="Your Name Here" class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="form-control w-full max-w-xs">
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
</template>

<script setup>
    // import { defineEmits } from 'vue';
    import {ref} from 'vue';
    import {useStore} from 'vuex';

    const store = useStore();

    let userName = ref("");
    let userEmail = ref("");
    let agreed = ref(false);

    const emits = defineEmits(['nextPage']);

    function formContinue() {
        store.dispatch('SET_USER', userName);
        store.dispatch('SET_EMAIL', userEmail);

        emits('nextPage');
    }
    
</script>

<style lang="scss" scoped>

</style>