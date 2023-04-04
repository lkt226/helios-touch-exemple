<template>
  <main id="home" class="layouts column l-gap">
    <v-banner :lang="lang.banner" />

    <section class="container layouts grid-2 ml-gap _transform_your_house">
      <v-img width="730px" height="450px" alt="Ambiente de uma sala aconchegante com o produto no fundo." />
      <div class="_text layouts column s-gap">
        <h2>{{ lang.transform_your_house.title }}</h2>
        <p>{{ lang.transform_your_house.description }}</p>
      </div>
    </section>

    <v-create_a_personal_ambient :lang="lang.create_a_personal_ambient" />

    <section class="container layouts grid-2 ml-gap _stand_out_with_yours_iluminations">
      <v-img width="730px" height="450px" alt="Ambiente de uma sala aconchegante com o produto no fundo." />
      <div class="_text layouts column s-gap">
        <h2>{{ lang.stand_out_with_yours_iluminations.title }}</h2>
        <p>{{ lang.stand_out_with_yours_iluminations.description }}</p>
      </div>
    </section>

    <v-form id="helios_touch-lp-final_page">
      <h2>{{ lang.form.title }}</h2>
      <v-input name="name" :placeholder="inputs.name.placeholder" :title="inputs.name.title"/>
      <v-input name="email" type="email" :placeholder="inputs.email.placeholder" :title="inputs.email.title"/>
      <button type="submit">{{ lang.form.cta }}</button>
    </v-form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import lang from '@/lang/ptbr'

const meta = {
  title: '',
  description: ''
}

export default defineComponent({
  setup(props) {
    useHead({
      title: meta.title,
      meta: [
        { name: 'title', content: meta.title },
        { name: 'description', content: meta.description },
        // Google
        { property: 'og:title', content: meta.title },
        { property: 'og:description', content: meta.description }
      ]
    })

    return {
      lang: lang.homePage,
      inputs: lang.inputs
    }
  },

  mounted () {
  },
})
</script>


<style lang="scss">
  #home {
    ._transform_your_house ._text,
    ._stand_out_with_yours_iluminations ._text {
      @apply max-w-415px;
    }
  }
</style>