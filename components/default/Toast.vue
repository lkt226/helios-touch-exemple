<template>
  <div v-show="message.active" class="_toast" :class="message.type">
    <div class="_icon" />
    <div class="_text">
      <h3>{{ message.text }}</h3>
      <p>{{ typeTranslate }}</p>
    </div>
    <button class="not _close" @click="close">
      X
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useConsoleStore } from "@/store/console"
import lang from '@/lang/index'

export default defineComponent({
  setup () {
    const store = useConsoleStore()

    return {
      message: store.message,
      remove: store.remove
    }
  },

  methods: {
    close () {
      this.remove(this.message?.id)
    }  
  },

  computed: {
    typeTranslate () {
      switch (this.message.type) {
        case 'success': return lang.console.success;
        case 'error': return lang.console.error;
        case 'warning': return lang.console.warning;
      
        default: return '';
      }
    }
  },
  
  mounted () {
    const store = useConsoleStore()
    setTimeout(() => {
      console.log(store.getMessage)
    }, 5000)
  },
})
</script>

<style lang="scss">
  ._toast {
    @apply fixed top-10px left-[calc(50%-20vw)]
            w-40vw h-120px p-20px pr-10px
            border rounded-lg overflow-hidden
            grid z-9999
            shadow bg-$text-light text-$text-dark;
    grid-template-columns: max-content 1fr max-content;

    ._icon {
      &::after {
        content: '';
        @apply absolute left-0 top-0 
                h-full w-10px bg-$type-color;
      }
    }

    ._text {
      @apply text-18px text-center 
              flex flex-col gap-10px justify-center;

      h3 {
        @apply text-24px font-bold;
      }
    }

    ._close {
      @apply h-max p-10px pt-0 font-bold;
    }


    //TYPE-COLOR's
    &.success { --type-color: #43D569; }
    &.error { --type-color: #CB282B; }
    &.warning { --type-color: #FFCC00; }
  }

  @media screen and (max-width: 768px) {
    ._toast {
      @apply w-90vw left-[calc(50%-45vw)];
    }
  }
</style>