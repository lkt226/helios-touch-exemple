<template>
  <div
    ref="splide"
    class="splide _v_carousel"
  >
    <div class="splide__slider">
      <div class="splide__track">
        <ul class="splide__list">
          <slot />
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Splide, Options } from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide-core.min.css'

export default defineComponent({
  props: {
    externSettings: {
      type: Object as () => Options,
      default: () => ({})
    },
    onlyInMobile: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // Configurações internas do Carrossel
    let internSettings = {
      type: 'loop',
      focus: 'center',
      autoWidth: true,
      gap: 30,
      autoScroll: {
        speed: 0.5,
      },
      breakpoints: {
        768: {
          perPage: 1,
          autoplay: true,
          interval: 4000,
          arrows: true,
          autoScroll: false
        },
      },
      ...this.externSettings
    } as Options

    if (this.onlyInMobile) {
      // Caso o carrossel seja somente no mobile, então é usado esse Objeto para as configurações.
      internSettings = {
        destroy: true,
        arrows: false,
        pagination: false,
        breakpoints: {
          768: {
            destroy: false,
            type: 'loop',
            arrows: true,
            autoplay: true,
            interval: 5000,
            autoScroll: false,
            ...this.externSettings
          }
        }
      }
    }

    // Define a variável Splide e define ela como HTMLElement
    const splideElement = this.$refs.splide as HTMLElement | null; 

    if (splideElement) {
      // Verifica se o splide já foi iniciado
      if (!splideElement.classList.contains('is-initialized')) {
        // Caso não tenha sido iniciado ainda, ele pega todos os filhos de "splide_list"
        splideElement.querySelectorAll('.splide__list >*').forEach((carouselItem) => {
          // Verifica se os filhos de "splide__list" tem a classe "splide__slide" que é essencial pro funcionamento do plugin
          if (!carouselItem.classList.contains('splide__slide')) {
            // Caso não, ele adiciona. (esse código foi feito pra não precisar colocar o "splide_slide" no item toda vez)
            carouselItem.classList.add('splide__slide')
          }
        });
  
        new Splide(splideElement, internSettings).mount({AutoScroll})
      }
    }
  }
})
</script>

<style lang="scss">
  ._v_carousel {
    @apply  w-full max-w-98.5vw;

    .splide__slider {
      @apply flex flex-col-reverse;

      .splide__arrows  {
        @apply flex justify-center gap-30px pt-35px
                pointer-events-none;
  
        .splide__arrow  {
          @apply text-0px relative w-30px h-30px
                  flex items-center justify-center
                  pointer-events-auto cursor-pointer;

          &.splide__arrow--prev {
            @apply transform rotate-y-180;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .splide .splide__arrows {
      @apply pt-15px;
    }
  }
</style>
