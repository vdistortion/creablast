<template>
  <main class="pepsico">
    <div class="pepsico__item">
      <p>Not all projects that seem cool always reach the audience.</p>
      <p>
        The brand asked to create a project where the <span class="second-font">packaging</span> of
        the product would become the point of communication.
      </p>
      <p>
        There were several options in the work. One of them was a hotline where a cow would debunk
        myths about milk. You can see the project's logic and details
        <a :href="pptx" target="_blank">here</a>.
      </p>
      <img class="pepsico__img bottom" src="/images/pepsico/2.webp" alt="pepsico">
    </div>
    <div class="pepsico__item">
      <img class="pepsico__img right" src="/images/pepsico/1.webp" alt="pepsico">
    </div>
  </main>
</template>

<script setup>
const pptx = import.meta.env.VITE_LINK_PPTX;
</script>

<style lang="stylus">
.pepsico
  display flex
  column-gap 20px
  background-image url('/images/bg/12.webp')
  background-repeat no-repeat
  background-position left bottom

  @media (max-width 800px)
    background-position left bottom 10%
    flex-direction column
    row-gap 20px

  @media (max-width 400px)
    background-size 320px

  &__img.bottom
    display block
    margin 0 auto

  &__img.right
    min-width 273px

    @media (max-width 800px)
      display block
      margin: 0 auto
</style>
