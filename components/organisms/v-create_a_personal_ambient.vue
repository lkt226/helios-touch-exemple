<template>
  <section id="create_a_personal_ambient" class="container sm-gap">
    <v-img width="593px" height="400px" alt="Ambiente de uma quarto moderno e bonito, usando o produto como luz de cabeceira." />
    <v-img width="593px" height="400px" alt="Produto sendo usado no fundo pra chamar atenção para uma planta." />
    <div class="_text layouts column s-gap">
      <h2 class="small">{{ lang.title }}</h2>
      <p>{{ lang.description }}</p>
    </div>
    <v-img width="593px" height="400px" alt="Produto sendo usado como luz de cabeceira no formato de um coração." />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    lang: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss">
  #create_a_personal_ambient {
    @apply grid grid-cols-2;

    ._text {
      @apply max-w-430px ml-30px;
    }
  }
</style>