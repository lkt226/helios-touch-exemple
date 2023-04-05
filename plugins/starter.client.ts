import { createApp } from 'vue';
import App from '@/app.vue';

import { useToast, useModal } from 'tailvue'

import Lenis from '@studio-freight/lenis'

const app = createApp(App);


export default defineNuxtPlugin((app) => {
  // SMOOTH SCROLL
  const lenis = new Lenis()
  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return {
    provide: {
      toast: useToast(),
      modal: useModal()
    }
  }
})