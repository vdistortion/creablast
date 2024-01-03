<template>
  <div class="contact">
    <slot></slot> <a class="contact__link" :href="contactTelegram" target="_blank">Contact me</a>
  </div>
</template>

<script setup>
const contactTelegram = import.meta.env.VITE_CONTACT_TELEGRAM;
</script>

<style lang="stylus">
.contact
  font-size 20px
  font-weight 700

  &__link
    font-family $FONT_SECOND
</style>
