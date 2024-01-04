<template>
  <nav class="navigation">
    <ul
      class="navigation__menu"
      :class="{
        'open-mobile-menu': mobileMenu
      }"
    >
      <li>
        <span v-if="$route.name === 'home'">{{ pageNameMain }}</span>
        <router-link v-else to="/" @click="closeMenu">{{ pageNameMain }}</router-link>
      </li>
      <li>
        <span v-if="$route.name === 'work'">{{ pageNameWork }}</span>
        <router-link v-else to="/work" @click="closeMenu">{{ pageNameWork }}</router-link>
      </li>
      <li>
        <span v-if="$route.name === 'about'">{{ pageNameAbout }}</span>
        <router-link v-else to="/about" @click="closeMenu">{{ pageNameAbout }}</router-link>
      </li>
    </ul>
    <svg-nav-btn class="navigation__button" @click="mobileMenu = !mobileMenu"></svg-nav-btn>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import SvgNavBtn from '@/components/SvgNavBtn.vue';

const pageNameMain = import.meta.env.VITE_PAGE_NAME_MAIN;
const pageNameWork = import.meta.env.VITE_PAGE_NAME_WORK;
const pageNameAbout = import.meta.env.VITE_PAGE_NAME_ABOUT;
const mobileMenu = ref(false);

function closeMenu() {
  const svganimation = document.getElementById('reverse');

  if (svganimation) {
    svganimation.beginElement();
    mobileMenu.value = false;
  }
}
</script>

<style lang="stylus">
.navigation
  &__button
    display none
    cursor pointer

    @media (max-width 800px)
      display block
      position relative
      z-index 2
      width 40px
      height 40px

  &__menu
    list-style-type none
    padding-left 0
    color $COLOR_RED
    text-transform uppercase
    font-size 30px

    @media (max-width 800px)
      display none
      position fixed
      top 0
      left 0
      right 0
      bottom 0
      z-index 2
      background-color $COLOR_BG
      margin 0
      padding-top 60px
      text-align center

      &.open-mobile-menu
        display initial

    li + li
      margin-top 10px

    a
      text-decoration none

    span
      color initial
</style>
