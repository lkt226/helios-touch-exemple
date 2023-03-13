<template>
  <div class="_form">
    <form :id="idForm" @submit="submit">
      <h2 v-if="form.title[name] && !noTitle">{{ form.title[name] }}</h2>
      <slot />
      <button v-if="form.ctas[name]" type="submit">{{ form.ctas[name] }}</button>
    </form>

    <v-img v-if="background" class="_background" :src="background" alt="background image" width="1440px"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    idForm: {
      type: String,
      required: true
    },
    noTitle: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    background: {
      type: String,
      default: ''
    }
  },
  data () {
    const lang = this.$lang
    return {
      form: lang.global?.form
    }
  },
  methods: {
    submit (e: Event) {
      e.preventDefault()
      const form = e.target as any

      const data = {
        conversion_identifier: 'shiva-campanha-representantes',
        email: form.email.value,
        name: form.name.value,
        mobile_phone: form.telphone.value,
        city: form.city.value.split('-')[0],
        state: form.city.value.split('-')[1]
      }

      this.$email.send(data).then((res) => {
        if (res.ok) {
          setTimeout(() => {
            this.$router.push('obrigado')
          }, 10)
        }
      })
    }
  },
})
</script>

<style lang="scss">
  ._form {
    @apply relative;

    form {
      @apply relative flex flex-col gap-15px z-1;
    }

    ._background {
      @apply absolute top-0 left-0
              w-full h-full z-0;
      img {
        @apply w-full h-full 
                object-center object-cover;
      }
    }
  }
</style>
