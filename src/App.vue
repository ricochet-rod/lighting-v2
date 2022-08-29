<template>
  <div class="mainApp">
    <div class="navBar">
      {{ pageTitle }}<NavBar />
      {{ defaultTheme.themeName }}
      
    </div>
    <router-view />
  </div>
</template>
<script setup>
import { computed } from 'vue'
import NavBar from '@/components/NavBar.vue';
import sourceTheme from './Themes.json';
const pageTitle="";

const defaultTheme = computed(()=>{
  return sourceTheme.colorTheme.find(
    colorTheme => colorTheme.default == true
  )
})
console.log(sourceTheme.colorTheme.themeName)
document.documentElement.style.setProperty('--app-Bg-Color', defaultTheme.value.appBgColor);
document.documentElement.style.setProperty('--body-Bg-Color', defaultTheme.value.bodyBgColor);
document.documentElement.style.setProperty('--overlay-Bg-Color', defaultTheme.value.overlayBgColor);
document.documentElement.style.setProperty('--hover-Color', defaultTheme.value.hoverColor);
document.documentElement.style.setProperty('--text-Color', defaultTheme.value.textColor);


//console.log(getDefaultTheme.themeName)
</script>




<style>
:root {
  --app-Bg-Color: Null;
  --body-Bg-Color: Null;
  --overlay-Bg-Color: Null;
  --hover-Color: Null;
  --text-Color: Null;
}
</style>
