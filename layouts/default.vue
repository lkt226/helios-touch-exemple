<template>
  <div id="body" class="layouts column ml-gap">
    <v-float-buttons />
    <slot />
    <v-footer />
  </div>
</template>

<style lang="scss">
  #body {
    @apply bg-$white;
  }
</style>