<template>
  <div id="app">
    
    <NavBar msg="Welcome to Your Vue.js Main"/>
    
    
      
    
   
    <Footer msg="Welcome to Your Vue.js Main"/>
  </div>
  
</template>

<script>
import  NavBar from './components/NavBar.vue'
import  Footer from './components/Footer.vue'

export default {
  name: 'Main',
  components: {
    NavBar,
    Footer
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
