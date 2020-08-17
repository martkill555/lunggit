<template footer="Card Footer"
    footer-tag="footer"
    footer-bg-variant="success"
    footer-border-variant="dark">
  <div class="main" >
     <Nav msg=""/>
     <b-img src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.15752-9/116717806_574364919899460_3650506437999738036_n.png?_nc_cat=110&_nc_sid=b96e70&_nc_eui2=AeHL1HimsU_Ro8RSJI7YW3i96OoxXe379p_o6jFd7fv2ny7hEWIiV9KlCmnSJgI1hX103FV0M4WVwSde58qRE0lA&_nc_ohc=Gor1ieuAgNwAX9BHX_Y&_nc_ht=scontent.fbkk22-3.fna&oh=3e46eac7f9b36b650f47fc3ca4abd15f&oe=5F5DD264" 
      width="1200" 
      height="400"  >
      
</b-img>
      <b-jumbotron>
    <template v-slot:header>Discover Our Application</template>

    <template v-slot:lead>
      “Save life is our goal” 
    </template>

    <hr class="my-4">

    <p>
      In 2019, Tuberculosis remains one of the top 10 causes of death worldwide. Millions of people continue to fall sick from tuberculosis each year(GHO,2018). Furthermore, the number of medical staff is not enough to look after patients thoroughly. So, to decrease the burden of medical staff, the Lung Scan project will be using the abilities of an AI technology based on a website to implement a feature that aims to help medical staff who want to diagnose tuberculosis using x-ray film
    </p>

     <b-col lg="mx-auto"><router-link to="/Screen"> <b-button variant="primary" size="lg"><b-icon icon="tv" aria-hidden="true"></b-icon>Lung Screen </b-button></router-link>       <router-link to="/History"> <b-button variant="success" size="lg" ><b-icon icon="clipboard-data" aria-hidden="true"></b-icon>History </b-button></router-link></b-col>

  
    
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