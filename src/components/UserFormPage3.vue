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

</script>

<style lang="scss" scoped>

</style>