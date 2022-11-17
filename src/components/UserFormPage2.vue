<template>
    <div class=" flex flex-col h-screen justify-center items-center space-y-7">
        <label>Once you have made your payment in the Starling pop-up window, please click below to get your team!</label>
        <button @click="formContinue" class="btn btn-primary">Get your team!</button>
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
import { onMounted } from 'vue';
// import {loadStripe} from 'Stripe';
// let stripe = null;
// onMounted(async() => {
//     stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY)
// });
onMounted(() => {
    redirect();
})
function redirect() {
    window.open("https://settleup.starlingbank.com/angusgaukroger?amount=3&message=Loop%20World%20Cup%20Sweepstakes%20", "Payment Link", 'height=1080,width=720');
}
const emits = defineEmits(['prevPage', 'nextPage']);

function formContinue() {

emits('nextPage');
}
function formBack() {

    emits('prevPage');

}
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
</script>

<style lang="scss" scoped>

</style>