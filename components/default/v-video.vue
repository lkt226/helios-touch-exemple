<template>
  <video 
    :src="prefix + src" 
    :alt="alt" 
    controls
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    }
  },
  data () {
    const config = useRuntimeConfig().public

    return {
      prefix: config.baseURL
    }
  }
})
</script>

<style lang="scss">
  video {
    @apply rounded-7px;
  }
</style>