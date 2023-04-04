<template>
  <div class="_video">
    <video :src="src" muted autoplay playsinline loop></video>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    }
  },
})
</script>

<style lang="scss">
  ._video {
    @apply overflow-hidden;
    video {
      @apply w-full h-full object-center object-cover;
    }
  }
</style>