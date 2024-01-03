<template>
  <header class="header">
    <ul class="header__menu">
      <li>
        <span v-if="$route.name === 'home'">Main</span>
        <router-link v-else to="/">Main</router-link>
      </li>
      <li>
        <span v-if="$route.name === 'work'">Work</span>
        <router-link v-else to="/work">Work</router-link>
      </li>
      <li>
        <span v-if="$route.name === 'about'">About us</span>
        <router-link v-else to="/about">About us</router-link>
      </li>
    </ul>
    <h1 class="header__name">Enesha</h1>
  </header>
</template>

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
