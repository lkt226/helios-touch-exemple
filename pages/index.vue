<template>
  <main id="home" class="layouts column l-gap">
    <v-banner :lang="lang.banner" />

    <section class="container layouts grid-2 ml-gap _transform_your_house">
      <v-img src="src/images/transform_your_house.png" width="730px" height="450px" alt="Ambiente de uma sala aconchegante com o produto no fundo." />
      <div class="_text layouts column s-gap">
        <h2>{{ lang.transform_your_house.title }}</h2>
        <p>{{ lang.transform_your_house.description }}</p>
      </div>
    </section>

    <v-create_a_personal_ambient :lang="lang.create_a_personal_ambient" class="no-animation" />

    <v-horizontal-scroll class="_exemples">
      <div class="l-container _text"><h2>{{ lang.exemples.title }}</h2></div>
      <div><v-img src="src/images/exemples_1.png" width="600px" height="600px" alt="Ambiente de uma sala aconchegante com o produto no fundo." /></div>
      <div><v-img src="src/images/exemples_2.png" width="600px" height="600px" alt="Ambiente de uma sala aconchegante com o produto no fundo." /></div>
      <div><v-img src="src/images/exemples_3.png" width="600px" height="600px" alt="Ambiente de uma sala aconchegante com o produto no fundo." /></div>
      <div><v-img src="src/images/exemples_4.png" width="600px" height="600px" alt="Ambiente de uma sala aconchegante com o produto no fundo." /></div>
    </v-horizontal-scroll>

    <section class="container layouts grid-2 ml-gap _stand_out_with_yours_iluminations">
      <v-img src="src/images/stand_out_with_yours_iluminations.png" width="730px" height="450px" alt="Ambiente de uma sala aconchegante com o produto no fundo." />
      <div class="_text layouts column s-gap">
        <h2>{{ lang.stand_out_with_yours_iluminations.title }}</h2>
        <p>{{ lang.stand_out_with_yours_iluminations.description }}</p>
      </div>
    </section>

    <section class="_depositions layouts column s-gap">
      <h2>{{ lang.depositions.title }}</h2>
      <v-carousel :externSettings="{ autoWidth: true, arrows: false }">
        <div class="_item layouts column s-gap" v-for="deposition in depositions" :key="deposition.title">
          <h3>{{ deposition.title }}</h3>
          <div class="_scroll">
            <p v-html="deposition.description" />
          </div>
        </div>
      </v-carousel>
    </section>

    <section class="_helios_form layouts column s-gap">
      <h2 class="left-showing">{{ lang.form.title }}</h2>
      <v-form id="helios_touch-lp-final_page" class="down-showing">
        <v-input name="name" :placeholder="inputs.name.placeholder" :title="inputs.name.title"/>
        <v-input name="email" type="email" :placeholder="inputs.email.placeholder" :title="inputs.email.title"/>
        <button class="default_button" type="submit">{{ lang.form.cta }}</button>
      </v-form>
    </section>

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
      inputs: lang.inputs,
      depositions: lang.depositions
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

    ._depositions {
      h2 {
        @apply max-w-440px mx-auto text-center;
      }

      ._item {
        @apply w-500px
                bg-$secondary p-35px pr-15px rounded-26px;

        ._scroll {
          @apply h-406px pr-20px;
        }
      }
    }

    ._helios_form {
      @apply max-w-700px w-full mx-auto text-center;
      
      h2 {
        @apply max-w-630px mx-auto;
      }
    }
  }
</style>