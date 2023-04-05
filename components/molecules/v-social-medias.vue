<template>
  <div class="_social_medias layouts column">
    <a href="https://www.linkedin.com/in/victorhdsp/" target="_blank" class="_linkedin">
      Linkedin
      <Linkedin />
    </a>
    <a href="https://github.com/lkt226" target="_blank" class="_github">
      Github
      <Github />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Linkedin from '@/assets/svgs/linkedin.svg?component'
import Github from '@/assets/svgs/github.svg?component'

export default defineComponent({
  components: {
    Linkedin,
    Github
  },
})
</script>


<style lang="scss">
  ._social_medias {
    @apply gap-10px;

    a {
      @apply w-50px h-50px bg-$black 
              rounded-full text-0px
              flex justify-center items-center;
    }
  }
</style>