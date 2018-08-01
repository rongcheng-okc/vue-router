<template>
  <div id="app">
    <img src="./assets/logo.png">
    <section>
      <router-link class="link" to="/">/</router-link>
      <router-link class="link" to="/page1">/page1</router-link>
      <router-link class="link" to="/page2">/page2</router-link>
      <router-link class="link" to="/page2/comp1">/page2/comp1</router-link>
      <router-link class="link" to="/page2/comp2">/page2/comp2</router-link>
    </section>
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link {
  margin-right: 20px;
  font-size: 18px;
}
</style>
