<template>
  <div id="body" class="layouts column ml-gap">
    <slot />
    <v-footer />
  </div>
</template>

<style lang="scss">
  #body {
    @apply bg-$white;
  }
</style>