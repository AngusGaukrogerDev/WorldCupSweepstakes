<template>
    <div>
        <Navbar />
        <div class=" my-5 ">
            <div class="overflow-x-auto">
                <table class="table w-full  px-5 bg-primary">
                    <!-- head -->
                    <thead >
                    <tr>
                        <th></th>
                        <th>Country</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- populate table -->
                    <tr v-for="item in assignedList" class="no__bullets">
                        <th></th>
                        <th>{{item.team}}</th>
                        <th>{{item.assignedUser}}</th>
                        <th> </th>
                        <!-- <OrderItem @price="basketPrice(item)" @cumDir="direction = $event;" :ItemName="item.name" :ItemPrice="item.price" :ItemStock="item.stock" />     -->
                    </tr>
                    </tbody>
                    
                </table>
            </div>
            <!-- <h2 class="text-white">read from backend {{Item.stock}} </h2> -->
        </div>
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';

let assignedList = ref("");
onMounted(() => {
        //Gets data from backend and puts it into the store
        axios.get('https://localhost:3000/data') //change to correct_url:3000/data
        .then((response) => {
            console.log(response.data.data);
            assignedList.value = response.data.data;
            //store.dispatch('updateTeams', response.data); //calls setter in store and passes data throug

        })
        .catch((error) => {
            console.log(error);
        })
    });
</script>

<style lang="scss" scoped>
    .no__bullets{
    list-style-type: none;
    }

</style>