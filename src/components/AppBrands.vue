<template>
  <div class="brands">
    <div
      v-for="brand in brands"
      :key="brand"
      class="brands__item"
      :class="{
        desktop: desktopOnly.includes(brand),
      }"
    >
      <img :src="`/images/brands/${brand}.webp`" :alt="brand">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        'jbl', 'google', 'haval', 'kia', 'ozon', 'luntik',
        'perfetti', 'abbott', 'squishmallows', 'pepsico',
      ],
      desktopOnly: ['luntik'],
    };
  },
};
</script>

<style lang="stylus">
.brands
  row-flex()
  margin-top 90px
  margin-bottom 20px
  filter grayscale(100%)

  &__item
    col()
    col-size(4.8)
    text-align center
    margin-bottom 10px

    @media (max-width 800px)
      col-size(6)

    @media (max-width 500px)
      col-size(8)

      &.desktop
        display none
</style>
