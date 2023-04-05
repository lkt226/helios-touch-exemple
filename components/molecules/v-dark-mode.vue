<template>
  <div class="_dark_mode_button" @click="changeTheme">
    <button class="_moon" v-if="darkmode==='light'">
      DARK MODE
      <Moon />
    </button>
    <button v-else>
      LIGHT MODE
      <Sum />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sum from '@/assets/svgs/sun.svg?component'
import Moon from '@/assets/svgs/moon.svg?component'

export default defineComponent({
  components: {
    Sum,
    Moon
  },
  data() {
    const colorMode = useColorMode()
    colorMode.preference

    return {
      darkmode: colorMode.preference || 'light'
    }
  },
  methods: {
    changeTheme () {
      this.darkmode = this.darkmode === 'light' ? 'dark' : 'light'
    },
    changeColorMode () {
      const colorMode = useColorMode()
      colorMode.preference = this.darkmode
    }
  },
  watch: {
    darkmode () {
      this.changeColorMode()
    }
  },
  mounted() {
    this.changeColorMode()
  },
})
</script>

<style lang="scss">
  ._dark_mode_button {
    @apply w-50px h-50px;

    button {
      @apply bg-$secondary rounded-full w-full h-full text-0px
            flex justify-center items-center;

      &._moon {
        @apply bg-$black;
      }
    }
  }
</style>