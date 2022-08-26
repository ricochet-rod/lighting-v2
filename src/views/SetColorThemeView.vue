<template>
    <span>Set your color themes</span>
    <ul>
        <li  class="themeList"
        v-for="customTheme in customThemes"
        :key="customTheme.themeName"
        @click="myTheme_set(customTheme)"
        :style="{ 'background-color':customTheme.appBgColor, 'color':customTheme.textColor }"
        :appBgColor="customTheme.appBgColor"
        >
            {{customTheme.themeName}}
        </li>
    </ul>
    
</template>
<script setup>
import { ref } from 'vue'


const customThemes = ref([
  { themeName: 'Hufflepuff', appBgColor: 'blue', mainBgColor: 'rgb(0, 0, 0)', mainBgColorA: 'rgb(116,0,1,0.97)', overlayTextHoverColor: 'rgb(134,57,57)', textColor: 'rgb(255, 216, 0)', boxShadowColor: 'rgb(18,49,29)', defaultTheme: false },
  { themeName: 'Gryffindor', appBgColor: 'rgb(116, 0, 1)', mainBgColor: 'rgb(92, 0, 1)', mainBgColorA: '#d3a625', overlayTextHoverColor: '#d3a625', textColor: 'rgb(211, 166, 37)', boxShadowColor: 'rgb(92, 0, 1)', defaultTheme: false },
  { themeName: 'Ravenclaw', appBgColor: 'rgb(14, 26, 64)', mainBgColor: 'rgb(14, 26, 64)', mainBgColorA: 'rgb(116,0,1,0.97)', overlayTextHoverColor: 'rgb(134,57,57)', textColor: 'rgb(148, 107, 45)', boxShadowColor: 'rgb(18,49,29)', defaultTheme: false },
  { themeName: 'Slytherin', appBgColor: 'rgb(26, 71, 42)', mainBgColor: 'rgb(18, 49, 29', mainBgColorA: 'rgb(116,0,1,0.97)', overlayTextHoverColor: 'rgb(134,57,57)', textColor: 'rgb(93, 93, 93)', boxShadowColor: 'rgb(18,49,29)', defaultTheme: false },
  { themeName: 'App Default', appBgColor: 'rgb(26, 71, 42)', mainBgColor: '#1A472A', mainBgColorA: 'rgb(116,0,1,0.97)', overlayTextHoverColor: 'rgb(134,57,57)', textColor: 'yellow', boxShadowColor: 'rgb(18,49,29)', defaultTheme: true }
])

const myTheme_set = (customTheme) =>{
    document.documentElement.style.setProperty('--app-Bg-Color', customTheme.appBgColor);
    document.documentElement.style.setProperty('--app-Bg-ColorA', customTheme.appBgColorA);
    document.documentElement.style.setProperty('--main-Bg-Color', customTheme.mainBgColor);
    document.documentElement.style.setProperty('--main-Bg-ColorA', customTheme.mainBgColorA);
    document.documentElement.style.setProperty('--overlay-Text-Hover-Color', customTheme.overlayTextHoverColor);
    document.documentElement.style.setProperty('--text-Color', customTheme.textColor);
    document.documentElement.style.setProperty('--box-Shadow-Color', customTheme.boxShadowColor);
}
</script>
