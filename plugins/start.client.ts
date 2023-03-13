// START - Import Stores
import { useLogStore } from '@/store/logs'

// START - Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// START - import Pinia
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/app.vue'

const initPinia = () => {
  const pinia = createPinia()
  const app = createApp(App)
  app.use(pinia)
  app.mount('#app')
}

export default defineNuxtPlugin(({ }) => {
  // GENERATE GAT ID
  const gatID = useCookie('gatID')
  if (!gatID.value) {
    gatID.value = "id-" + Math.random().toString(16).slice(2)
  }

  // use LogStore
  const store = useLogStore()
  const { id, logs, sitemap } = store
  const config = useRuntimeConfig().public
  store.addSiteMap()

  const start = () => {
    setTimeout(() => {
      initPinia()
      gsap.registerPlugin(ScrollTrigger);
    }, 10)
  }

  start()
  return {
    provide: {
    }
  }
})