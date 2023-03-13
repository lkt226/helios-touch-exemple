<template>
  <section
    ref="splide"
    class="splide v-carousel"
  >
    <div class="splide__slider">
      <div class="splide__track">
        <ul class="splide__list">
          <!-- <li class="splide__slide">Slide 01</li> -->
          <slot />
        </ul>
      </div>
    </div>
    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev not">
        Voltar
        <v-img src="src/svgs/prev.svg" width="15px" />
        <!-- <v-image src="icons/prev_arrow.svg" width="34px" /> -->
      </button>
      <button class="splide__arrow splide__arrow--next not">
        Proximo
        <v-img src="src/svgs/next.svg" width="15px" />
        <!-- <v-image src="icons/next_arrow.svg" width="34px" /> -->
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Splide from '@splidejs/splide'
import '@splidejs/splide/dist/css/splide-core.min.css'

export default defineComponent({
  props: {
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  mounted() {
    const settings = {
      type: 'loop',
      drag: true,
      focus: 'center',
      pauseOnHover: true,
      perPage: 1,
      perMove: 1,
      autoplay: true,
      gap: 20,
      ...this.settings,
      breakpoints: {
        768: {
          height: 0,
        },
      }
    } as any

    setTimeout(() => {
      const splides = document.querySelectorAll('.splide')

      for (let i = 0; i < splides.length; i++) {
        const splide = splides[i] as HTMLElement;

        if (!splide.classList.contains('is-initialized')) {

          splide.querySelectorAll('.splide__list >*').forEach((item) => {
            if (!item.classList.contains('splide__slide')) {
              item.classList.add('splide__slide')
            }
          });

          const splidejs = this.$refs.splide as HTMLElement;
          new Splide(splidejs, settings).mount()
        }
      }
    }, 300)
  },
})
</script>

<style lang="scss">
  .splide {
    @apply visible mb-50px;

    .splide__slide {
      @apply w-full;
    }

    .splide__arrows  {
     @apply hidden;
    }

    .splide__pagination {
      @apply gap-10px;
      display: flex !important;

      .splide__pagination__page  {
        @apply bg-$white w-15vw h-5px rounded-2px;
        box-shadow: inset 0px 0px 0px 1px var(--black);
        transition: all 0.2s ease-in-out;

        &.is-active {
          @apply bg-$black w-25vw;
        }
      }
    }
  }
</style>
