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
                        <th>Name</th>
                        <th>Country</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <!-- populate table -->
                    <!-- <tr v-for="item in store.state.stock.stock.data" class="no__bullets"> -->
                        <!-- <OrderItem @price="basketPrice(item)" @cumDir="direction = $event;" :ItemName="item.name" :ItemPrice="item.price" :ItemStock="item.stock" />     -->
                    <!-- </tr> -->
                    </tbody>
                    
                </table>
            </div>
            <!-- <h2 class="text-white">read from backend {{Item.stock}} </h2> -->
        </div>
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue';


</script>

<style lang="scss" scoped>
    .no__bullets{
    list-style-type: none;
    }

</style>