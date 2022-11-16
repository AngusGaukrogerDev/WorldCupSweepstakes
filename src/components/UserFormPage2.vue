<template>
    <div class=" flex flex-col h-screen justify-center items-center space-y-7">
        <!-- <label>Stripe Payment In Progress</label> -->
        <button @click="redirect" class="btn btn-primary">Make Payment with Stripe</button>
        <button @click="formBack" class="btn btn-primary">Cancel</button>
        <ul class="steps  space-x-5">
            <li class="step step-primary">Enter Your Details</li>
            <li class="step step-primary">Make Your Payment</li>
            <li class="step ">Get A Random Team</li>
            <li class="step">Receive Confirmation</li>
        </ul>
    </div>
</template>

<script setup>
// import { onMounted } from 'vue';
// import {loadStripe} from 'Stripe';
// let stripe = null;
// onMounted(async() => {
//     stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY)
// });

// function redirect() {
//     stripe.redirectToCheckout({
//         successUrl: "https://localhost:4000/Success",
//         cancelUrl: "https://localhost:4000",
//         lineItems: [
//             {
//                 price: "price_1M4VuZFWSXMa4XY2Y1ZpOj4l",
//                 quantity: 1
//             }
//         ],
//         mode: "payment"
//     })
// }
const emits = defineEmits(['prevPage']);

function formContinue() {

emits('nextPage');
}
function formBack() {

    emits('prevPage');

}
</script>

<style lang="scss" scoped>

</style>