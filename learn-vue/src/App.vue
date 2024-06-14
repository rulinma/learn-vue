<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="You are welcome to VUE" />
    <!-- <Counter counter=1> </Counter> -->
    <Counter> </Counter>
    <!-- <Counter> </Counter> -->
    <BlogCom></BlogCom>
    <AlertBox>
      <p>ssss</p>
      Something bad happened.
    </AlertBox>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import BlogCom from './components/BlogCom.vue'
import AlertBox from './components/AlertBox.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter,
    BlogCom,
    AlertBox
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
