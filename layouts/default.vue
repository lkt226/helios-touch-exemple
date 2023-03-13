<template>
  <div id="body">
    <NuxtPage />
    <v-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  
})
</script>

<style lang="scss">
  #body {
    @apply grid gap-90px
            min-h-100vh;
    grid-template-rows: 1fr max-content;
  }
</style>