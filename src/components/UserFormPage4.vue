<template>
    <div>
        <label>Thanks {{userName}}! A confirmation email has been sent to: {{userEmail}}</label>
        <label>To see who else has entered the sweepstakes, please click below.</label>
        <button class="btn btn-primary" @click="router.push('/Participants');">See Participants!</button>

        <ul class="steps  space-x-5">
            <li class="step step-primary">Enter Your Details</li>
            <li class="step step-primary">Make Your Payment</li>
            <li class="step step-primary">Get A Random Team</li>
            <li class="step step-primary">Receive Confirmation</li>
        </ul>
    </div>
</template>

<script setup>
   import { useRouter } from 'vue-router'
   const router = useRouter()
</script>

<style lang="scss" scoped>

</style>