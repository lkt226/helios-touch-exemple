<template>
  <div class="_form">
    <form :id="id" @submit="submit" class="layouts column s-gap">
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
      window.open('https://www.linkedin.com/in/victorhdsp/')
    }
  },
})
</script>

<style lang="scss">
  ._form {
    @apply relative bg-$secondary text-$black px-35px py-30px rounded-26px;
  }
</style>
