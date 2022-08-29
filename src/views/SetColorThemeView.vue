<template>
    <div class="content">
    <span>Set your color themes</span>
    <ul>
        <li  id="themeList"
        v-for="customTheme in customThemes"
        :key="customTheme.themeName"
        @click="myTheme_set(customTheme)"
        :style="{ 'background-color':customTheme.appBgColor, 'color':customTheme.textColor }"
        :appBgColor="customTheme.appBgColor"
        >
            {{customTheme.themeName}}
        </li>
        <li id="themeList"
        v-for="savedTheme in themeArray"
        :key="savedTheme.id"
        @click="myTheme_set(savedTheme)"
        :style="{ 'background-color':savedTheme.appBgColor, 'color':savedTheme.textColor }"
        >
            {{savedTheme.themeName}}
        </li>
    </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import sourceThemes from '@/Themes.json'
const themeArray = ref(sourceThemes.colorTheme)
const customThemes = ref([
  { themeName: 'Hufflepuff', appBgColor: 'blue', mainBgColor: 'rgb(0, 0, 0)', appBgOverlay: 'rgb(116,0,1,0.97)', hoverColor: 'rgb(134,57,57)', textColor: 'rgb(255, 216, 0)', defaultTheme: false },
  { themeName: 'Gryffindor', appBgColor: 'rgb(116, 0, 1)', mainBgColor: 'rgb(92, 0, 1)', appBgOverlay: '#d3a625', hoverColor: '#d3a625', textColor: 'rgb(211, 166, 37)', defaultTheme: false },
  { themeName: 'Ravenclaw', appBgColor: 'rgb(14, 26, 64)', mainBgColor: 'rgb(14, 26, 64)', appBgOverlay: 'rgb(116,0,1,0.97)', hoverColor: 'rgb(134,57,57)', textColor: 'rgb(148, 107, 45)', defaultTheme: false },
  { themeName: 'Slytherin', appBgColor: 'rgb(26, 71, 42)', mainBgColor: 'rgb(18, 49, 29', appBgOverlay: 'rgb(116,0,1,0.97)', hoverColor: 'rgb(134,57,57)', textColor: 'rgb(93, 93, 93)', defaultTheme: false }
 
])

const myTheme_set = (customTheme) =>{
    document.documentElement.style.setProperty('--app-Bg-Color', customTheme.appBgColor);
    document.documentElement.style.setProperty('--app-Bg-Overlay', customTheme.appBgColor);
    document.documentElement.style.setProperty('--main-Bg-Color', customTheme.appBgColor);
    document.documentElement.style.setProperty('--hover-Color', customTheme.hoverColor);
    document.documentElement.style.setProperty('--text-Color', customTheme.textColor);
    document.documentElement.style.setProperty('--box-Shadow-Color', customTheme.appBgColor);
}
</script>

