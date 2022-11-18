<template>
        <div class="navbar navbar-center bg-primary" >
            <div class="flex-1">
              <a class="btn btn-ghost normal-case text-xl">Loop Sweepstakes</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                  <li @click="router.push('/');"><a>Sign Up</a></li>
                  <li @click="router.push('/Participants');"><a>Participants</a></li>
                </ul>
              </div>
          </div>
    
</template>

<script setup>
   import { useRouter } from 'vue-router'
   const router = useRouter()
</script>

<style lang="scss" scoped>

</style>