<template>
  <main id="thanks">
    <v-container class="_banner" background="/src/images/background_thanks.png">
      <nuxt-link to="/">
        <v-img src="src/svgs/logo_shiva_white.svg" width="170px" />
      </nuxt-link>
      <div class="_text">
        <h1>{{ lang.banner.title }}</h1>
        <p>{{ lang.banner.description }}</p>
      </div>
    </v-container>
  </main>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    const lang = this.$lang
    
    return {
      lang: lang.thanks
    }
  }
})
</script>

<style lang="scss">
  #thanks {
    ._banner {
      @apply pt-90px;

      ._text {
        @apply py-220px max-w-770px mx-auto
                flex flex-col gap-30px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    #thanks {
      ._banner {
        @apply pt-50px;

        ._text {
          @apply py-90px max-w-none;
        }
      }
    }
  }
</style>