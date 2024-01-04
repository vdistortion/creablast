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

  @media (max-width 800px)
    flex-direction column
    row-gap 20px

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
