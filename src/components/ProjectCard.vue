<template>
  <div class="card">
    <router-link :to="`/work/${name}`">
      <img :src="src" :alt="name">
    </router-link>
    <div class="card__description">{{ description }}</div>
    <router-link :to="`/work/${name}`">{{ link }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },

  computed: {
    src() {
      return new URL(`../assets/images/projects/${this.image}`, import.meta.url).href;
    },
  },
};
</script>

<style lang="stylus">
.card
  margin-bottom 30px
  font-size 15px

  &__description
    font-family $FONT_SECOND
    margin 10px 0 5px
</style>
