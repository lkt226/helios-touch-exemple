<template>
  <img v-if="img.svg" ref="image" class="_svg" :src="img.src" :alt="img.alt" />

  <picture v-else>
    <source v-if="img.mobile.webp" :srcset="img.mobile.webp" media="(max-width: 768px)">
    <source v-if="img.mobile.src" :srcset="img.mobile.src" media="(max-width: 768px)">
    <source v-if="img.webp" :srcset="img.webp" type="image/webp">
    
    <img ref="image" v-if="img.lazy" class="lazy" :data-src="img.src" :alt="img.alt" />
    <img ref="image" v-else :src="img.src" :alt="img.alt" />
  </picture>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    },
    width: {
      type: String,
      default: '0'
    },
    height: {
      type: String,
      default: '0'
    },
    lazy: {
      type: Boolean,
      default: false
    },
  },
  data () {
    const config = useRuntimeConfig().public

    return {
      prefix: config.baseURL,
      img: {
        src: config.baseURL + this.src, 
        alt: this.alt || '',
        width: this.width,
        height: this.height,
        lazy: this.lazy || false,
        svg: false,
        mobile: {
          src: '',
          webp: ''
        },
        webp: ''
      }
    }
  },
  methods: {
    verifySVG () {
      const img = new Image()
      const url = this.prefix + this.src
      img.src = url

      img.onload = () => {
        this.img.src = url
        this.img.svg = true
      }
    },
    verify (src: string, callback: any) {
      const img = new Image()
      img.src = src

      img.onload = () => {
        callback(src)
      }

      img.onerror = () => {
      }
    }
  },
  created () {
    if (this.src.includes('.svg')) {
      this.verifySVG()

    } else {
      const img = {
        src: this.prefix + this.src,
        mobile: this.prefix + this.src.replace('images', 'images/mobile')
      }
      if (this.$device.isMobile) {
        this.verify(img.mobile, (src: string) => { this.img.mobile.src = src })
        this.verify(img.mobile.replace('.png', '.webp'), (src: string) => { this.img.mobile.webp = src })
      }
      this.verify(img.src.replace('.png', '.webp'), (src: string) => { this.img.webp = src })
    }
  },
  mounted () {
    setTimeout(() => {
      const image = this.$refs?.image as HTMLImageElement

      if (this.width !== '0') { 
        image.setAttribute('width', this.width) 
      } else {
        image.setAttribute('width', `${image.naturalWidth}px`) 
      }

      if (this.height !== '0') { 
        image.setAttribute('height', this.height) 
      } else {
        image.setAttribute('height', `${image.naturalHeight}px`) 
      }
    }, 100)
  }
})
</script>
