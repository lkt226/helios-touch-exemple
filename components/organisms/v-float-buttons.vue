<template>
  <div id="float_buttons">
    <v-dark-mode />
    <v-social-medias />
  </div>
</template>

<style lang="scss">
  #float_buttons {
    @apply fixed top-20px right-5vw z-2
            flex flex-col gap-25px;
  }
</style>