<template>
  <v-container ref="banner" class="_banner" :background="background">
    <div class="_text layouts column s-gap">
      <h1 class="bright">{{ item.title }}</h1>
      <p class="bright">{{ item.description }}</p>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
    const banner = (this.$refs.banner as any).$el || this.$refs.banner

    setTimeout(() => {
      banner.classList.add('active')
    }, 2000)
  }
})
</script>


<style lang="scss">
  ._banner {
    @apply bg-$primary 
            fixed w-100vw h-100vh 
            left-0 top-0 z-999;
    
    &, * {
      transition: height 0.4s ease-in-out,
                opacity 0.2s ease-in;
    }

    .container {
      @apply h-100vh flex flex-col 
              items-center justify-center text-center;

      h1,p {
        @apply opacity-0 transform translate-y-full;
        transition: transform 0.2s ease-out,
                opacity 0.3s ease-in-out;
      }

      p {
        font-family: 'Roboto';
        @apply font-normal;
        font-size: 32px;
        line-height: 38px;
      }
    }
    
    &.active {
      @apply relative w-full h-full;
      .container {
        @apply h-80vh;

        h1,p {
          @apply opacity-100 translate-y-0;
        }
      }
      ._background {
        @apply opacity-20;
      }
    }
  }

  @media screen and (max-width: 768px) {
    ._banner {
      .container p {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
</style>