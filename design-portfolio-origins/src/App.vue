<template lang="pug">
  div.main-container
    router-view
</template>

<script>
import Mainframe from './components/Mainframe.vue'

export default {
  name: 'app',
  components: {
    Mainframe
  }
}
</script>

<style lang="scss">
@import './assets/main.scss';
</style>
