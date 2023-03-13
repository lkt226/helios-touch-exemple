<template>
  <v-container ref="work" class="_work" :background="background">
    <div class="_text layouts column s-gap">
      <p>{{ item.title }}</p>
      <h2>{{ item.description }}</h2>
    </div>
  </v-container>
</template>

<script lang="ts">
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    },
    background: {
      type: String,
      required: true
    }
  },
  mounted () {
    const work = (this.$refs.work as any).$el
    work.querySelector('._text').style.transform = `translateX(100%) translateY(100%)`
    work.querySelector('._background').style.maxWidth = `0%`
    
    setTimeout(() => {
      const work = (this.$refs.work as any).$el
      
      ScrollTrigger.create({
        trigger: work,
        start: "top bottom",
        end: "center 60%",
        onUpdate: self => {
          const progress = (100 * self.progress)
          const translateX = (progress - 100) * -1
          const translateY = (progress - 100) * -1
          
          work.querySelector('._background').style.maxWidth = `${(progress)}%`

          if (progress > 50) {
            work.querySelector('._text').style.transform = `translateX(${translateX}%) translateY(0%)`
          } else {
            work.querySelector('._text').style.transform = `translateX(${translateX}%) translateY(${translateY / 2}%)`
          }
        }
      });
    }, 3000)
  },
})
</script>


<style lang="scss">
  ._work {
    @apply -mt-150px;

    .container {
      @apply h-100vh py-150px flex justify-end;

      ._text {
        @apply max-w-605px;
      }
    }

    
  }

  @media screen and (max-width: 768px) {
    ._work {
      @apply mt-0;

      .container {
        @apply p-0 h-max;
      }

      ._background {
        @apply relative;
      }
    }
  }
</style>