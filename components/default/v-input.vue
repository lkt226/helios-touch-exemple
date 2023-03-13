<template>
  <div class="_input_outer" :class="`_input_${name}`">
    <input 
      :type="type" 
      :placeholder="placeholder" 
      :required="required" 
      :list="list" 
      :maxlength="options?.mask.length || options?.max"
      :name="name"
      :value="value"

      @input="handleInput"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, InputHTMLAttributes } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: true
    },
    list: {
      type: String,
      required: false
    },
    options: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      input: {
        value: '',
        masked: ''
      }
    }
  },
  methods: {
    handleInput (e: Event) {
      const input = (e.target as InputHTMLAttributes).value
      this.input.value = input
    }
  },
  computed: {
    value () {
      const input = this.input.value

      if (this.options?.mask && input.length>0) {
        let mask:string = this.options.mask
        let masked = mask

        input.split('').forEach((letter, index) => {
          if (letter !== masked[index]) {
            masked = masked.replace('#', letter)
          }
        })

        return masked.split('#')[0]
      }

      return input
    }
  }
})
</script>

<style lang="scss">
  ._input_outer {
    @apply px-25px bg-$text-light rounded-29px;

    input {
      @apply w-full;

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
          transition: background-color 5000s ease-in-out 0s;
      }
    }
  }
</style>