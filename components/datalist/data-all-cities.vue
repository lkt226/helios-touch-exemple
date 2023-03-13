<template>
  <datalist id="data-all-cities">
    <option v-for="city in cities" :key="city" :value="city" />
  </datalist>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      cities: [] as string[]
    }
  },
  created() {
    (async () => {
      const cities = await this.$loc.allCities()

      setTimeout(() => {
        this.cities = cities
      }, 3000)
    })()
  }
})
</script>
