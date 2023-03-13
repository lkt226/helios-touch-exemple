<template>
  <component :is="is" class="container_outer layouts column m-gap">
    <div class="container layouts column m-gap">
      <slot />
    </div>
    
    <slot name="background" />
    <v-img v-if="background" class="_background" :src="background" alt="background image" width="1440px"/>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    is: {
      type: String,
      default: 'section'
    },
    background: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss">
  .container_outer {
    @apply relative;

    .container {
      @apply relative z-1;
    }

    ._background {
      @apply absolute top-0 left-0
              w-full h-full z-0;
      img {
        @apply w-full h-full 
                object-center object-cover;
      }
    }
  }
</style>