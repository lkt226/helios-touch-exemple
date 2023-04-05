<template>
  <section id="create_a_personal_ambient_mobile" class="container sm-gap showing">
    <div class="_text layouts column s-gap">
      <h2 class="small">{{ lang.title }}</h2>
      <p>{{ lang.description }}</p>
    </div>
    <v-carousel mobile>
      <v-img src="src/images/create_a_personal_ambient_1.png" style="--multiply: 1;" width="593px" height="400px" alt="Ambiente de uma quarto moderno e bonito, usando o produto como luz de cabeceira." />
      <v-img src="src/images/create_a_personal_ambient_2.png" style="--multiply: 2;" width="593px" height="400px" alt="Produto sendo usado no fundo pra chamar atenção para uma planta." />
      <v-img src="src/images/create_a_personal_ambient_3.png" style="--multiply: 3;" width="593px" height="400px" alt="Produto sendo usado como luz de cabeceira no formato de um coração." />
    </v-carousel>
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
  },
  mounted() {
    const addHoveredClassinPictures = () => {
      const pictures = document.querySelectorAll('#create_a_personal_ambient picture')
      pictures.forEach((picture) => {
        picture.addEventListener('mouseenter', () => {
          picture.classList.add('hovered')
        })
      })
    }

    // START
    addHoveredClassinPictures()
  },
})
</script>

<style lang="scss">
  @media screen and (min-width: 769px) {
    #create_a_personal_ambient_mobile {
      @apply hidden;
    }
  }
  @media screen and (max-width: 768px) {
    #create_a_personal_ambient_mobile {
      @apply text-center;
    }
  }
</style>