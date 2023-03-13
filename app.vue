<template>
  <div id="app">
    <Toast />
    <NuxtLayout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  watch: {
    $route (newVal, oldVal) {
      this.$update()
    }
  },
  mounted() {
    this.$observer()
    this.$update()
  }
})
</script>
