<template>
  <section class="_horizontal_scroll layouts flex">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP Register
gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  mounted () {
    const horizontalScroll = document.querySelector("._horizontal_scroll") as HTMLElement

    if (horizontalScroll) {
      for (let i = 0; i < horizontalScroll.children.length; i++) {
        const item = horizontalScroll.children.item(i);
        item?.classList.add('_item')
      }

      let items = gsap.utils.toArray("._horizontal_scroll ._item");

      // CALCULO DA TELA
      let allWidths = 0
      items.forEach((item, index) => {
        allWidths += item.offsetWidth || 0
        allWidths += 50
      })
      allWidths -= (window.innerWidth * 0.95)

      gsap.to(items, {
        // xPercent: -100 * (items.length - 1),
        x: allWidths * -1,
        ease: "none",
        scrollTrigger: {
          trigger: "._horizontal_scroll",
          pin: true,
          scrub: 1,
          // snap: 1 / (items.length - 1),
          end: () => "+=" + horizontalScroll.offsetWidth
        }
      });
    }
  }
})
</script>

<style lang="scss">
  ._horizontal_scroll {
    @apply h-100vh overflow-hidden gap-50px
            bg-$secondary text-$black flex items-center;

    ._item {
      picture {
        @apply min-w-80vh min-h-80vh flex items-center;
      }

      &._text {
        @apply mr-25px pr-100px;
      }
    }
  }
  
  @media screen and (max-width: 768px) {
    ._horizontal_scroll ._item {
      picture {
        @apply min-w-90vw;
      }

      &._text {
        @apply min-w-80vw mr-5vw pr-10vw;
      }
    }
  }
</style>
