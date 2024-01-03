<template>
  <div v-if="$route.params.id === 'pepsico'">
    <img src="/images/pepsico/1.webp" alt="pepsico" style="float: right;margin-left: 30px">
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
    <p style="text-align: right;">
      <img src="/images/pepsico/2.webp" alt="pepsico">
    </p>
  </div>
  <video-card v-else :id="$route.params.id"></video-card>
</template>

<script>
import VideoCard from '@/components/VideoCard.vue';
import { setPageTitle } from '@/utils/helpers';

export default {
  created() {
    setPageTitle(this.$route.params.id);
  },
  data() {
    return {
      pptx: import.meta.env.VITE_LINK_PPTX,
    };
  },
  components: {
    VideoCard,
  },
};
</script>
