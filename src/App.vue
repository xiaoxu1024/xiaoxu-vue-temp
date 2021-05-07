<template>
  <div id="app">
    <HelloWorld msg="Vue template"/>
    <img alt="Vue logo" src="./assets/img/logo.png">
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created: function() {
  }
}
</script>

<style>
  #app{
    text-align: center;
  }
</style>
