<template>
  <div class="mainApp">
    <div class="navBar">
      {{ pageTitle }}<NavBar />
    </div>
    <router-view class="content"/>
  </div>
</template>
<script setup>
import NavBar from '@/components/NavBar.vue'
const pageTitle="";
</script>


<style>
:root {
  --app-Bg-Color: rgb( 18,49,29 );
  --app-Bg-ColorA: rgba( 18,49,29 );
  --main-Bg-Color: rgb(99, 145, 115);
  --overlay-Text-Hover-Color: rgb( 134,57,57 );
  --text-Color: rgb(245, 241, 241);
  --hover-Color: rgb(173, 96, 51);
  --box-Shadow-Color: rgb( 18,49,29 );
  --box-Shadow-ColorA: rgba( 18,49,29,0.97 );
}
</style>
