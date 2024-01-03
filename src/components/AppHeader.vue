<template>
  <header class="header">
    <ul class="header__menu">
      <li>
        <span v-if="$route.name === 'home'">{{ pageNameMain }}</span>
        <router-link v-else to="/">{{ pageNameMain }}</router-link>
      </li>
      <li>
        <span v-if="$route.name === 'work'">{{ pageNameWork }}</span>
        <router-link v-else to="/work">{{ pageNameWork }}</router-link>
      </li>
      <li>
        <span v-if="$route.name === 'about'">{{ pageNameAbout }}</span>
        <router-link v-else to="/about">{{ pageNameAbout }}</router-link>
      </li>
    </ul>
    <h1 class="header__name">{{ siteName }}</h1>
  </header>
</template>

<script setup>
const siteName = import.meta.env.VITE_SITE_NAME;
const pageNameMain = import.meta.env.VITE_PAGE_NAME_MAIN;
const pageNameWork = import.meta.env.VITE_PAGE_NAME_WORK;
const pageNameAbout = import.meta.env.VITE_PAGE_NAME_ABOUT;
</script>

<style lang="stylus">
.header
  display flex
  justify-content space-between

  &__menu
    list-style-type none
    padding-left 0
    color $COLOR_RED
    text-transform uppercase
    font-size 30px

    li + li
      margin-top 10px

    a
      text-decoration none

    span
      color #000000

  &__name
    color $COLOR_RED
    font-family $FONT_SECOND
    text-transform uppercase
    font-size 110px
</style>
