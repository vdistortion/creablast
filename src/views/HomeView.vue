<template>
  <main class="home-page">
    <router-link to="/work/kia" style="float: right;margin-top: 30px;">
      <img src="/images/projects/kia.webp" alt="kia">
    </router-link>
    <p style="text-align: center;">
      <router-link to="/work/wish">
        <img src="/images/projects/wish.gif" alt="wish" style="max-width: 240px;">
      </router-link>
    </p>
    <p>
      <strong>Creative copywriter </strong>
    </p>
    <p>
      I have a <span class="second-font">unique & effective</span> style of work. Extensive
      experience in digital: from
      <router-link to="/work/jbl" class="second-font">social media</router-link> to
      <router-link to="/work/pepsico" class="second-font">special projects</router-link>
    </p>
    <p>
      <app-contact>
        <strong>Sounds fun?</strong>
      </app-contact>
    </p>
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
