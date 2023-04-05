<template>
  <section id="banner">
    <div class="_text container layouts column s-gap">
      <p class="roboto left-showing">{{ lang.title }}</p>
      <h1 class="down-showing">{{ lang.description }}</h1>
    </div>
    <v-video class="_background" src="/src/videos/banner.mp4" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    lang: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss">
  #banner {
    @apply max-w-95vw w-full h-75vh mx-auto relative
            text-$white z-0
            flex items-end p-50px;

    ._text {
      >* {
        @apply text-shadow-lg;
      }

      h1 {
        @apply max-w-520px;
      }
    }

    ._background {
      @apply rounded-b-40px;
    }
  }
</style>