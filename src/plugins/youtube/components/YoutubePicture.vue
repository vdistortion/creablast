<template>
  <picture>
    <source
      v-for="version in versions"
      :key="version"
      :srcset="`${host}/vi_webp/${id}/${version}.webp`"
      type="image/webp"
    >
    <source
      v-for="version in versions"
      :key="version"
      :srcset="`${host}/vi/${id}/${version}.jpg`"
      type="image/jpeg"
    >
    <img
      class="youtube__media"
      :src="`${host}/vi/${id}/${defaultVersion}.jpg`"
      :alt="name"
    >
  </picture>
</template>

<script>
export default {
  data() {
    return {
      host: 'https://i.ytimg.com',
      defaultVersion: 'maxresdefault',
      versions: [
        'maxresdefault',
        'sddefault',
        'hqdefault', 0,
        'mqdefault',
        'default', 1, 2, 3,
      ],
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  name: 'youtube-picture',
};
</script>
