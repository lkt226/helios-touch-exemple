<template>
  <section id="create_a_personal_ambient" class="container sm-gap showing">
    <v-img src="src/images/create_a_personal_ambient_1.png" style="--multiply: 1;" width="593px" height="400px" alt="Ambiente de uma quarto moderno e bonito, usando o produto como luz de cabeceira." />
    <v-img src="src/images/create_a_personal_ambient_2.png" style="--multiply: 2;" width="593px" height="400px" alt="Produto sendo usado no fundo pra chamar atenção para uma planta." />
    <div class="_text layouts column s-gap">
      <h2 class="small">{{ lang.title }}</h2>
      <p>{{ lang.description }}</p>
    </div>
    <v-img src="src/images/create_a_personal_ambient_3.png" style="--multiply: 3;" width="593px" height="400px" alt="Produto sendo usado como luz de cabeceira no formato de um coração." />
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
  #create_a_personal_ambient {
    @apply grid grid-cols-2;

    ._text {
      @apply max-w-430px ml-30px;
    }

    &.showing {
      picture {
        @apply opacity-0;
        transition: opacity calc(var(--multiply) * 0.75s) ease-in-out;
      }

      &[data-viewed="true"] picture {
        @apply opacity-60;

        &.hovered, &:hover {
          transition: opacity 0.35s ease-in-out;
        }
        
        &:hover {
          @apply opacity-100 cursor-pointer;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    #create_a_personal_ambient {
      @apply hidden;
    }
  }
</style>