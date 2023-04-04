<template>
  <div class="_form">
    <form :id="id" @submit="submit">
      <slot />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    submit (e: Event) {
      alert('Esse site é falso, logo o formulário não funciona 😁, vamos fingir que funcionou e vou te redirecionar pro meu linkedin 💖')
      window.location.href = 'https://www.linkedin.com/in/victorhdsp/'
    }
  },
})
</script>

<style lang="scss">
  ._form {
    @apply relative;
  }
</style>
