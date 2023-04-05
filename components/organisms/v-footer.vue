<template>
  <footer id="footer">
    <a href="https://www.linkedin.com/in/victorhdsp/" target="_blank" rel="noopener noreferrer">
      victor hugo
    </a>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style lang="scss">
  #footer {
    @apply bg-$black text-$white
            flex justify-center items-center
            p-20px;
  }
</style>