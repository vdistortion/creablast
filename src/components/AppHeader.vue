<template>
  <header class="header">
    <app-navigation></app-navigation>
    <h1 class="header__name">{{ siteName }}</h1>
  </header>
</template>

<script setup>
import AppNavigation from '@/components/AppNavigation.vue';

const siteName = import.meta.env.VITE_SITE_NAME;
</script>

<style lang="stylus">
.header
  display flex
  justify-content space-between
  align-items center
  margin-bottom 20px

  @media (max-width 800px)
    flex-direction row-reverse

  &__name
    margin 0
    color $COLOR_RED
    font-family $FONT_SECOND
    text-transform uppercase
    font-size 110px

    @media (max-width 800px)
      margin-top 10px
      font-size 50px
</style>
