<template>
  <div class="youtube-video" :class="{ 'youtube-video--enabled': type === 'js' }">
    <i ref="iframe" class="youtube-video__media" :hidden="type !== 'api'"></i>
    <a
      v-if="type === 'nojs'"
      class="youtube-video__link"
      :href="`https://youtu.be/${id}`"
      target="_blank"
      :aria-label="name"
    >
      <youtube-picture :id="id" :name="name"></youtube-picture>
    </a>
    <div v-if="type === 'js'" class="youtube-video__link" @click="setPlayer">
      <youtube-picture :id="id" :name="name"></youtube-picture>
      <button class="youtube-video__button" type="button" aria-label="Запустить видео">
        <youtube-svg></youtube-svg>
      </button>
    </div>
  </div>
</template>

<script>
import YoutubePicture from './YoutubePicture.vue';
import YoutubeSvg from './YoutubeSvg.vue';

export default {
  methods: {
    setPlayer() {
      this.type = 'api';
      this.instance = new window.YT.Player(this.$refs.iframe, {
        videoId: this.id,
        playerVars: {
          autoplay: 1,
          showinfo: 0,
          rel: 0,
        },
        events: {
          onReady: this.onReady,
          onStateChange: this.onStateChange,
        },
      });
    },
    onReady(event) {
      const { title } = event.target.getVideoData();
      this.$emit('onReady', title);
      this.$youtube.list.push({
        el: this.$refs.iframe,
        instance: event.target,
      });
    },
    onStateChange(event) {
      this.$emit('onStateChange', event.data);
      if (event.data !== window.YT.PlayerState.PLAYING) return;
      this.$youtube.list
        .filter((video) => video.instance !== event.target)
        .forEach((video) => {
          video.instance.stopVideo();
        });
    },
  },
  mounted() {
    this.$youtube.init().then(() => {
      this.type = 'js';
    });
  },
  beforeUnmount() {
    const index = this.$youtube.list.findIndex((video) => video.el === this.$refs.iframe);
    if (index > -1) this.$youtube.list.splice(index, 1);
  },
  data() {
    return {
      type: 'nojs', // [nojs, js, api]
      instance: null,
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
  emits: ['onReady', 'onStateChange'],
  inject: ['$youtube'],
  components: {
    YoutubePicture,
    YoutubeSvg,
  },
  name: 'youtube-video',
};
</script>

<style lang="stylus">
.youtube-video
  position relative
  width 100%
  height 0
  padding-bottom 56.25%
  background-color #000000
  overflow hidden
  &:hover &__button-shape
  &__button:focus &__button-shape
    fill #ff0000
    fill-opacity 1
    transition fill .1s cubic-bezier(0.0,0.0,0.2,1), fill-opacity .1s cubic-bezier(0.0,0.0,0.2,1)
  &--enabled
    cursor pointer
  &__link
    position absolute
    top 0
    left 0
    width 100%
    height 100%
  &__media
    position absolute
    top 50%
    left 0
    transform translateY(-50%)
    width 100%
    min-height 100%
    border none
  &__button
    position absolute
    top 50%
    left 50%
    z-index 1
    padding 0
    width 68px
    height 48px
    border none
    background-color transparent
    transform translate(-50%, -50%)
    cursor pointer
    &:focus
      outline none
</style>
