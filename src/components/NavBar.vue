<template>
    <div id="nav">
      <label class="LeftTitle">{{pageTitle}}</label>
      <label v-if="!menuState" class="icon" @click="openNav()"><i class="fa fa-bars"></i></label>
      <label v-else class="icon" @click="closeNav()"><i class="fa fa-bars"></i></label>

      <div id= "navBar" class= "overlay" >
        <div class= "overlay-content" >
            <ul>
              <li><router-link to="/" @click="closeNav()">Home</router-link></li>
              <li><router-link to="/EditUsbBanks" @click="closeNav()">Set USB Port Names</router-link></li>
              <li><router-link to="/SetColourTheme" @click="closeNav()">Set Colour Themes</router-link></li>
              <li><router-link to="/about" @click="closeNav()">About</router-link></li>
            </ul>
        </div>
      </div>

    </div>
</template>
<script setup>
  import { defineProps, computed, ref } from 'vue';
  import { useRoute } from 'vue-router';

  function openNav () {
    var element = document.getElementById('navBar')
    element.style.height = '50%'
    element.style.width = '60%'
    menuState.value = !menuState.value
  }
  function closeNav () {
    var element = document.getElementById('navBar')
    element.style.height = '0%'
    element.style.width = '0%'
    menuState.value = !menuState.value
  }

  const menuState = ref(false)
  const pageTitle = computed(() => {
    return useRoute().meta.title
  });
  defineProps({
    pageTitle: String,
  });
  
</script>