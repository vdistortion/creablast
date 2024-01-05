<template>
  <main class="home-page">
    <div class="home-page__item">
      <router-link to="/work/wish">
        <img class="home-page__img top" src="/images/projects/wish.gif" alt="wish">
      </router-link>
      <p>
        <strong>Creative copywriter </strong>
      </p>
      <p>
        I have a <span class="second-font">unique & effective</span> style of work. Extensive
        experience in digital: from
        <router-link to="/work/jbl" class="second-font">social media</router-link> to
        <router-link to="/work/pepsico" class="second-font">special projects</router-link>
      </p>
      <app-contact>
        <strong>Sounds fun?</strong>
      </app-contact>
    </div>
    <div class="home-page__item">
      <router-link to="/work/kia">
        <img class="home-page__img right" src="/images/projects/kia.webp" alt="kia">
      </router-link>
    </div>
  </main>
  <footer>
    <app-brands></app-brands>
  </footer>
</template>

<script setup>
import AppBrands from '@/components/AppBrands.vue';
import AppContact from '@/components/AppContact.vue';
import { setPageTitle } from '@/utils/helpers';

setPageTitle(import.meta.env.VITE_PAGE_NAME_MAIN);
</script>

<style lang="stylus">
.home-page
  display flex
  column-gap 20px
  background-image url('/images/bg/12.webp'), url('/images/bg/3.webp')
  background-repeat no-repeat
  background-position top right 70px, top 50px left 5%
  background-size 400px, 50px

  @media (max-width 800px)
    background-position top right 70px, bottom 100px left 5%
    flex-direction column
    row-gap 20px

  @media (max-width 500px)
    background-position bottom -30px left 5%, top 10% right

  &__img.top
    display block
    margin 0 auto
    max-width 240px

  &__img.right
    min-width 346px

    @media (max-width 800px)
      display block
      margin 0 auto

    @media (max-width 500px)
      margin-right 0
      min-width initial
</style>
