<template>
  <div class="video-project">
    <div class="video-project__item">
      <youtube-video :id="videos[id]" :name="id"></youtube-video>
    </div>
    <div class="video-project__item">
      <template v-if="id === 'wish'">
        <p>
          The first round task of Young Glory was dedicated to COVID restrictions and Christmas.
        </p>
        <p>
          The theme was <span class="second-font">great</span>, so my partner and I submitted
          several works.
        </p>
        <p>
          The only hitch was that we were two creators with no special knowledge in graphic design
          and video editing, who decided to put together a
          <span class="second-font">video case</span>.
        </p>
        <p>
          But now I <span class="second-font">can assemble</span> them easily.
        </p>
        <p>And, btw, we won bronze in this round.</p>
        <div class="gift">Young Glory 1st round BRONZE</div>
      </template>
      <template v-if="id === 'jbl'">
        <p>
          I love this project wholeheartedly, partly because I worked on it
          <span class="second-font">alone</span> from the creative team.
        </p>
        <p>
          The goal was <span class="second-font">ambitious</span>! to make the birthday a reason for
          information events for the <span class="second-font">whole year</span>.
        </p>
        <p>
          It was possible to cover both the brand's history and typical newsmakers like Halloween.
        </p>
      </template>
      <template v-if="id === 'kia'">
        <p>
          Working with <span class="second-font">bloggers and celebrities</span> is always a
          <span class="second-font">challenge</span>.
        </p>
        <p>
          It is necessary to find a format that will be beneficial for the brand and authentic to
          the celebrity.
        </p>
        <p>
          The project was developed in several stages. Initially, various celebrities that aligned
          with the <span class="second-font">brand's philosophy</span> were proposed, and then we
          worked on the specific combination of the car and the star.
        </p>
        <p>The project won numerous Russian awards and the love of the audience.</p>
        <div class="gift">Tagline, Silver Mercury, AKMR</div>
      </template>
      <template v-if="id === 'afcon'">
        <p>
          I don't like football, and I knew almost nothing about the African league, so when I saw
          this task, I <span class="second-font">panicked</span> a little.
        </p>
        <p>But that's what makes it more interesting.</p>
        <p>Moreover, the project is partly social and touches on an important topic of equality.</p>
        <p>
          The solution at that time was on the
          <span class="second-font">cutting edge of trends</span>, I think that's why it won an
          award. Now, of course, NFT is no longer relevant.
        </p>
        <div class="gift">Young Glory 7th round BRONZE</div>
      </template>
      <template v-if="id === 'meller'">
        <p>
          Meller commercials are always like a short <span class="second-font">movie</span>.
        </p>
        <p>
          The task of the script was to maintain the style, but at the same time
          <span class="second-font">convey the main idea</span> that while you chew, there is time
          to relax and think.
        </p>
        <p>The commercial turned out to have a second of tension, just like in real cinema.</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      videos: {
        wish: 'ucEP9Of57Xg',
        jbl: 'Yo-fkk8n_YA',
        kia: 'Crwv5BxKISA',
        afcon: 'Ml-ywUosb2w',
        meller: '9ruI23-4Q_k',
      },
    };
  },
};
</script>

<style lang="stylus">
.video-project
  row-flex()

  &__item
    col()
    col-size(12)

  p:first-child
    margin-top 0

  .gift
    padding-left 30px
    height 27px
    line-height 30px
    background-image url('../assets/images/gift.svg')
    background-repeat no-repeat
    background-size 25px 27px
    font-size 15px
    font-family $FONT_SECOND
    color $COLOR_RED
</style>
