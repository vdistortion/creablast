<template>
  <main class="home-page">
    <router-link to="/work/kia" style="float: right;">
      <img src="../assets/images/projects/kia.webp" alt="kia">
    </router-link>
    <p>
      <strong>Creative copywriter </strong>
      <router-link to="/work/wish">
        <img src="../assets/images/projects/wish.gif" alt="wish" style="max-width: 240px;">
      </router-link>
    </p>
    <p>
      I have a <span class="second-font">unique & effective</span> style of work. Extensive
      experience in digital: from <span class="second-font">social media</span> to
      <span class="second-font">special projects</span>
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

document.title = `MAIN — ${import.meta.env.VITE_SITE_NAME}`;
</script>
