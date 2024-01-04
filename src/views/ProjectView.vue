<template>
  <pepsi-card v-if="$route.params.id === 'pepsico'"></pepsi-card>
  <video-card v-else :id="$route.params.id"></video-card>
</template>

<script>
import PepsiCard from '@/components/PepsiCard.vue';
import VideoCard from '@/components/VideoCard.vue';
import { setPageTitle } from '@/utils/helpers';

export default {
  created() {
    setPageTitle(this.$route.params.id);
  },
  components: {
    PepsiCard,
    VideoCard,
  },
};
</script>
