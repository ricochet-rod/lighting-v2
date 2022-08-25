<template>
    <span>Set your color themes</span>
    <ul>
        <li  class="themeList" v-for="{themeName, appBgColor, textColor} in rawThemeSettings" :key="themeName" @click="myTheme_set()" v-bind:style="{ 'background-color':appBgColor, 'color':textColor }">{{themeName}}</li>
    </ul>
    
</template>
<script setup>
import { ref } from 'vue'
const rawThemeSettings = ref([
  { themeName: 'Hufflepuff', appBgColor: 'rgb(0, 0, 0)', mainBgColor: 'rgb(0, 0, 0)', mainBgColorA: 'rgb(116,0,1,0.97)', overlayTextHoverColor: 'rgb(134,57,57)', textColor: 'rgb(255, 216, 0)', boxShadowColor: 'rgb(18,49,29)', defaultTheme: false },
  { themeName: 'Gryffindor', appBgColor: 'rgb(116, 0, 1)', mainBgColor: 'rgb(92, 0, 1)', mainBgColorA: '#d3a625', overlayTextHoverColor: '#d3a625', textColor: 'rgb(211, 166, 37)', boxShadowColor: 'rgb(92, 0, 1)', defaultTheme: false },
  { themeName: 'Ravenclaw', appBgColor: 'rgb(14, 26, 64)', mainBgColor: 'rgb(14, 26, 64)', mainBgColorA: 'rgb(116,0,1,0.97)', overlayTextHoverColor: 'rgb(134,57,57)', textColor: 'rgb(148, 107, 45)', boxShadowColor: 'rgb(18,49,29)', defaultTheme: false },
  { themeName: 'Slytherin', appBgColor: 'rgb(26, 71, 42)', mainBgColor: 'rgb(18, 49, 29', mainBgColorA: 'rgb(116,0,1,0.97)', overlayTextHoverColor: 'rgb(134,57,57)', textColor: 'rgb(93, 93, 93)', boxShadowColor: 'rgb(18,49,29)', defaultTheme: false },
  { themeName: 'App Default', appBgColor: 'rgb(26, 71, 42)', mainBgColor: '#1A472A', mainBgColorA: 'rgb(116,0,1,0.97)', overlayTextHoverColor: 'rgb(134,57,57)', textColor: 'rgb(255, 255, 255)', boxShadowColor: 'rgb(18,49,29)', defaultTheme: true }
])
const myTheme = document.querySelector(':root');
function myTheme_set(){
    myTheme.style.setProperty('--app-Bg-Color', 'appBgColor');
    myTheme.style.setProperty('--app-Bg-ColorA', 'appBgColorA');
    myTheme.style.setProperty('--main-Bg-Color', 'mainBgColor');
    myTheme.style.setProperty('--main-Bg-ColorA', 'mainBgColor');
    myTheme.style.setProperty('--overlay-Text-Hover-Color', 'overlayTextHoverColor');
    myTheme.style.setProperty('--text-Color', 'textColor');
    myTheme.style.setProperty('--box-Shadow-Color', 'boxShadowColor');
    myTheme.style.setProperty('--box-Shadow-ColorA', 'boxShadowColorA');
}
</script>
