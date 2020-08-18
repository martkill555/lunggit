<template>
  <div >
     <Nav class="mt-0" msg=""/>
    
    
     <b-carousel
      id="carousel-1"
     
      :interval="4000"
     
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        height="200"
        img-src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/117382269_296939308241771_3685652132270833304_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_eui2=AeHk38_wOludLT1ns2bjeM6orUuby0MV8DOtS5vLQxXwM0wIJ_QMmR-WLCJn1SKIgY15W3HPVH4KPv_iiCLcXgBj&_nc_ohc=WvjVV23inm0AX9kisNe&_nc_ht=scontent.fbkk10-1.fna&oh=0fc082a881a9f0505313d3a46eac3ca9&oe=5F610F74"
      ></b-carousel-slide>

    </b-carousel>

      <b-jumbotron  id="Main" bg-variant="white" text-variant="dark">
    <template v-slot:header><h2>Over<b-badge variant="danger">view</b-badge></h2></template>

    <template v-slot:lead>
     <b> Lung Scan project will be using the abilities of an AI technology based on a website to implement a feature that aims to help medical staff who want to diagnose tuberculosis using x-ray film</b>
    </template>

    <hr class="my-4">

<b-img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/116080892_689019555014265_2885304354529837000_n.png?_nc_cat=110&_nc_sid=b96e70&_nc_eui2=AeFdTofX5j84Vd2jykt902M28IWWzNBD-7XwhZbM0EP7tUoHqi9cRg-m2n-cS_VSNzkS7d5ljYKVvlHa12uivsvA&_nc_ohc=BNqpgn81lzwAX99wc-z&_nc_ht=scontent.fbkk10-1.fna&oh=bfcd4fb6de2f2cd3f703a9d410de0fdb&oe=5F60F282" 
    width ="800"></b-img>
   
    <b-container class="my-4">
     <b-col lg="mx-auto"><router-link to="/Screen"> <b-button variant="outline-primary" size="lg"><b-icon icon="tv" aria-hidden="true"></b-icon>Lung Screen </b-button></router-link>       <router-link to="/History"> <b-button variant="outline-success" size="lg" ><b-icon icon="clipboard-data" aria-hidden="true"></b-icon>History </b-button></router-link></b-col>
 </b-container>
  
    
  </b-jumbotron>



     <Footer msg=""/>
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Footer
  }
}
</script>

<style lang="scss">
#Main {
  font-family: maven pro;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:auto;
  
}
// #app {
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// }

#navbar {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
