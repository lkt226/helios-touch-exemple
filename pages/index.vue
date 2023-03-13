<template>
  <main id="home" class="layouts column l-gap">
    <v-banner background="src/images/banner.png" :item="lang.banner" />
    <v-work background="src/images/work.png" :item="lang.work" />

    <v-container class="_reading">
      <div class="_text layouts column s-gap">
        <p>{{ lang.reading.title }}</p>
        <h2>{{ lang.reading.description }}</h2>
      </div>
      <v-carousel :settings="{height: 700}">
        <v-img src="src/images/reading/0.png" width="1440px"/>
        <v-img src="src/images/reading/1.png" width="1440px"/>
        <v-img src="src/images/reading/2.png" width="1440px"/>
      </v-carousel>
    </v-container>

    <v-pets background="src/images/pets.png" :item="lang.pets" />

    <v-you :item="lang.you" />

    <v-container class="_montage">
      <div class="_text layouts column s-gap">
        <p>{{ lang.montage.title }}</p>

        <div class="_video">
          <v-video src="src/videos/montage.mp4" :alt="lang.montage.alt" />
          <v-img class="_background" src="src/images/montage.png" width="1440px"/>
        </div>
      </div>
    </v-container>

    <v-container class="_buy">
      <div class="_text layouts column s-gap">
        <p>{{ lang.buy.title }}</p>
        <a :href="lang.buy.url" target="_blank">
          <h2>{{ lang.buy.description }}</h2>
        </a>
      </div>
      <v-img src="src/images/buy.png" width="780px"/>
    </v-container>
  </main>    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import lang from '@/lang/index'

export default defineComponent({
  data () {
    return {
      lang: lang.homePage
    }
  }
})
</script>

<style lang="scss">
  #home {
    ._montage .container {
      @apply text-center content-center py-100px;

      ._text {
        @apply max-w-4/5 mx-auto text-right;
      }
      ._background {
        @apply absolute left-0 top-0 
                w-full h-full -z-1
                object-center object-cover;
      }
    }

    ._buy .container {
      @apply grid;
      grid-template-columns: 1fr 2fr;

      ._text {
        @apply content-center;
      }
    } 
  }

  @media screen and (max-width: 768px) {
    #home {
      ._montage .container {
        @apply py-0px;

        ._text {
          @apply max-w-full text-center;
        }
        ._background {
          @apply hidden;
        }
      }

      ._buy .container {
        @apply grid-cols-1;
      } 
    }
  }
</style>