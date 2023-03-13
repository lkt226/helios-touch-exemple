<template>
  <v-container ref="you" class="_you">
    <div class="_text layouts column s-gap">
      <p>{{ item.title }}</p>
      <h2>{{ item.description }}</h2>
    </div>

    <v-video src="src/videos/unboxing.mp4" :alt="item.alt" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mounted () {
    const you = (this.$refs.you as any).$el || this.$refs.you
    you.querySelector('video').style.transform = `scale(0)`
    you.querySelector('._text').style.transform = `translateX(-100%)`
    
    setTimeout(() => {
      const you = (this.$refs.you as any).$el || this.$refs.you

      ScrollTrigger.create({
        trigger: you,
        start: "top bottom",
        end: "center center",
        onUpdate: self => {
          const progress = self.progress
          const translateX = ((progress * 100) - 100)

          you.querySelector('._text').style.transform = `translateX(${translateX}%)`
          you.querySelector('video').style.transform = `scale(${progress})`
        }
      });
    }, 3000)
  },
}) 
</script>

<style lang="scss">
  ._you .container {
    @apply grid grid-cols-2;

    video {
      @apply h-700px mx-auto;
    }

    ._text {
      @apply content-center text-center;
    }
  }

  @media screen and (max-width: 768px) {
    ._you .container {
      @apply grid-cols-1;

      video {
        @apply h-max;
      }
    }
  }
</style>