<template>
  <div id="app">
    
    <NavBar msg="Welcome to Your Vue.js App"/>
    <b-carousel
    height="480"
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
  
    
  >
    <b-carousel-slide
     
      img-src="https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.15752-9/s2048x2048/116155080_296439891457897_1691392196203392050_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_eui2=AeG7xisKlr15KFeP43WImX2TlQhsj8xqxfWVCGyPzGrF9Q_LWW5s_eFWNB04BxETI8pu5WATJ0jIDZPiqB673JPn&_nc_ohc=W6uYixZQwxMAX-LIGX6&_nc_ht=scontent.fbkk2-8.fna&_nc_tp=7&oh=28cee62d948413c57f694076a8b6377e&oe=5F4BBB66"
    ></b-carousel-slide>
    <b-carousel-slide
      
      img-src="https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.15752-9/s2048x2048/116058418_632745694315024_1285163407543643633_n.jpg?_nc_cat=103&_nc_sid=b96e70&_nc_eui2=AeGeaB9Ksi-YYlboGExzIf-6j7mCn6Qma_iPuYKfpCZr-NfJ2125nqUedvKiYJ4yMwFBgMArf1NYDzb61f1-zryR&_nc_ohc=cr-_BPeLz10AX9y9hZ5&_nc_ht=scontent.fbkk2-8.fna&_nc_tp=7&oh=9a92501b7a1f15cd5aa97658651ccfdd&oe=5F4A8D0F"
    ></b-carousel-slide>
   
  </b-carousel>
 
    
      <b-jumbotron>
    <template v-slot:header>Discover Our Application</template>

    <template v-slot:lead>
      “Save life is our goal” 
    </template>

    <hr class="my-1">

    <p>
    In 2019, Tuberculosis remains one of the top 10 causes of death worldwide. Millions of people continue to fall sick from tuberculosis each year(GHO,2018). Furthermore, the number of medical staff is not enough to look after patients thoroughly. So, to decrease the burden of medical staff, the Lung Scan project will be using the abilities of an AI technology based on a website to implement a feature that aims to help medical staff who want to diagnose tuberculosis using x-ray film. 
    </p>

    <b-button variant="primary" href="#">Lungscan</b-button>
    <b-button variant="success" href="#">Tuberculosis screener</b-button>
    
  </b-jumbotron>
    
      
    
   
    <Footer msg="Welcome to Your Vue.js App"/>
  </div>
  
</template>

<script>
import  NavBar from './components/NavBar.vue'
import  Footer from './components/Footer.vue'

export default {
  name: 'App',
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
