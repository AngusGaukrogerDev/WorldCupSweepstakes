<template>
    <div class=" flex flex-col h-screen justify-center items-center space-y-7">
        <h1 class=" text-4xl text-center">Welcome to the Loop World Cup Sweepstakes</h1>
        <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input type="text" placeholder="Your Name Here" class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Email Address</span>
            </label>
            <input type="text" placeholder="Your Email Here" class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">I am happy to participate in this event</span> 
              <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
            </label>
          </div>
          <button @click="formContinue" class="btn btn-primary">Get Your Team!</button>
        <ul class="steps  space-x-5">
            <li class="step step-primary">Enter Your Details</li>
            <li class="step ">Get A Random Team</li>
            <li class="step">Make Your Payment</li>
            <li class="step">Receive Confirmation</li>
        </ul>
    </div>
</template>

<script setup>
    // import { defineEmits } from 'vue';

    const emits = defineEmits(['nextPage']);

    function formContinue() {

        emits('nextPage');
    }
</script>

<style lang="scss" scoped>

</style>