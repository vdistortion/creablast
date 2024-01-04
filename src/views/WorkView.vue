<template>
  <main class="projects">
    <div class="projects__title">
      Selection of <span class="second-font">exciting</span> projects.
    </div>
    <div class="projects__container">
      <project-card
        class="projects__item"
        name="wish"
        image="wish.gif"
        link="Wish x Young Glory entrance"
        description="Christmas COVID special"
      ></project-card>
      <project-card
        class="projects__item"
        name="jbl"
        image="jbl.webp"
        link="JBL 75 years"
        description="Digital special"
      ></project-card>
      <project-card
        class="projects__item"
        name="kia"
        image="kia.webp"
        link="KIa MOHAVE"
        description="Celebrity endorsement"
      ></project-card>
      <project-card
        class="projects__item"
        name="afcon"
        image="afcon.webp"
        link="AFCON"
        description="Social impact"
      ></project-card>
      <project-card
        class="projects__item"
        name="pepsico"
        image="pepsico.webp"
        link="Domik v derevne (Pepsico)"
        description="Packaging activation"
      ></project-card>
      <project-card
        class="projects__item"
        name="meller"
        image="meller.gif"
        link="Meller film"
        description="OLV"
      ></project-card>
    </div>
  </main>
</template>

<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import { setPageTitle } from '@/utils/helpers';

setPageTitle(import.meta.env.VITE_PAGE_NAME_WORK);
</script>

<style lang="stylus">
.projects
  &__title
    text-align right
    margin-bottom 20px

  &__container
    row-flex()

  &__item
    col()
    col-size(8)

    @media (max-width 800px)
      col-size(12)

    @media (max-width 500px)
      col-size(24)

      &:nth-child(even)
        text-align right

    &.double-col
      col-size(16)
</style>
