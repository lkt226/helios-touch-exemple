<template>
  <v-container ref="pets" class="_pets" :background="background">
    <div class="_text layouts column s-gap">
      <p>{{ item.title }}</p>
      <h2>{{ item.description }}</h2>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
    const pets = (this.$refs.pets as any).$el || this.$refs.pets
    pets.querySelector('._background').style.width = `50%`
    pets.querySelector('._text').style.transform = `translateY(0%)`
    
    setTimeout(() => {
      const pets = (this.$refs.pets as any).$el || this.$refs.pets

      const texts = pets.querySelectorAll('._text >*')

      ScrollTrigger.create({
        trigger: pets,
        start: "top bottom",
        end: "center center",
        onUpdate: self => {
          const progress = 100 * self.progress
          const translateY = (progress - 100)
          
          pets.querySelector('._background').style.width = `${(progress / 2) + 50}%`

          if (this.$device.isDesktop) {
            pets.querySelector('._text').style.transform = `translateY(${translateY}%)`

            if (progress > 90) {
              texts.forEach((item: HTMLElement) => {
                item.classList.add('bright')
              });
            } else {
              texts.forEach((item: HTMLElement) => {
                item.classList.remove('bright')
              });
            }
          } else {
            pets.querySelector('._text').style.transform = `translateY(${translateY * -1}%)`
          }
        }
      });
    }, 3000)
  },
}) 
</script>


<style lang="scss">
  ._pets {
    .container {
      @apply h-100vh py-150px flex items-end;

      ._text {
        @apply max-w-605px;
      }
    }

    ._background {
      @apply right-0 left-auto;
    }
  }

  @media screen and (max-width: 768px) {
    ._pets {
      .container {
        @apply p-0 h-max;
      }

      ._background {
        @apply relative;
      }
    }
  }
</style>