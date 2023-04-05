<template>
  <section class="_horizontal_scroll layouts flex m-gap">
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
  
      gsap.to(items, {
        xPercent: -100 * (items.length - 2),
        ease: "none",
        scrollTrigger: {
          trigger: "._horizontal_scroll",
          pin: true,
          scrub: 1,
          snap: 1 / (items.length - 1),
          start: 'center center',
          end: () => "+=" + horizontalScroll.offsetWidth
        }
      });
    }
  }
})
</script>

<style lang="scss">
  ._horizontal_scroll {
    @apply h-100vh overflow-hidden
            bg-$secondary flex items-center;

    ._item {
      picture {
        @apply min-w-80vh min-h-80vh flex items-center;
      }

      &._text {
        @apply min-w-400px mr-25px pr-100px;
      }
    }
  }
</style>
