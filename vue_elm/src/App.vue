<template>
  <div id="app">
    <router-view/>
    <MyHeader></MyHeader>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
export default {
  name: 'App',
  components: {MyHeader, Home}
}
</script>

<style>

</style>
