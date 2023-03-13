<template>
  <footer id="footer">
    <a href="https://www.linkedin.com/in/victorhdsp/" target="_blank" rel="noopener noreferrer">
      por Victor Hugo de S. Pereira
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
    @apply text-center py-25px 
            bg-$primary text-$white;
  }

  @media screen and (max-width: 768px) {
    #footer {
      @apply py-15px;
    }
  }
</style>