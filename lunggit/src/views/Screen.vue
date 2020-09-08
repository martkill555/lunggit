<template>
  <div class="Screen">
     <Nav msg=""/>
    
<div>
 
  <b-card title="" body-class="text-center " header-tag="nav" class="mx-auto">
    <template v-slot:header >
      <b-nav card-header tabs>
        <b-nav-item active><b-icon icon="archive-fill" aria-hidden="true"></b-icon>Screen</b-nav-item>
      
    <b-nav-item disabled>Result</b-nav-item>


      </b-nav>
      
    </template>  

   <b-row class="p-4 ">
      <b-col  >
         
      <b-col   >
          
        <b-card-body >
        <h2>Predict</h2>  
        <b-card width="50" >
           <b-container fluid >
             <picture-input 
      ref="pictureInput" 
      @change="onChange" 
      
      width="250" 
      height="250" 
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      buttonClass="btn"
      :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Upload Image '
      }">
    </picture-input>  
  <b-row >
  
    <b-col sm="12" >
       
    
 <b-row class="my-4">
    <b-col sm="3">
      <label for="input-none">Name:</label>
    </b-col>
    <b-col sm="3">
      <b-form-input
      id="input-live1"
      v-model="name"
      :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your name"
      trim
    ></b-form-input>
    

  
  
    </b-col>
    <label for="input-none">Last Name: </label>  <b-col sm="3">
      <b-form-input
      id="input-live2"
      
      placeholder="Enter your last name"
      trim
    ></b-form-input>
    

  
  
    </b-col>
  </b-row>
   
    

    </b-col>
     <b-col sm="12" >
       
    
 <b-row class="my-4">
    <b-col sm="3">
        
      <label for="input-none">Note:</label>
    </b-col>
    <b-col sm="7">
      <b-form-textarea
    id="textarea-no-resize"
    placeholder=""
    rows="3"
    no-resize
  ></b-form-textarea>

  
    </b-col>
  </b-row>
   
    

    </b-col>
    
  </b-row>
  
 

  
</b-container>


  </b-card>

        </b-card-body>
          <b-container>
   <router-link to="/Result"> <b-button variant="primary" size="lg"><b-icon icon="cloud-arrow-up-fill" aria-hidden="true"></b-icon>Submit </b-button></router-link>
</b-container>
      </b-col></b-col>
      
    </b-row>
  </b-card>
 
</div>

     <Footer msg=""/>
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import PictureInput from 'vue-picture-input'

export default {
    computed: {
      nameState() {
        return this.name.length > 2 ? true : false
      }
    },
    data() {
      return {
        name: '',
        tel: '',
        hospital: ''
      }
    },
  name: 'Home',
  components: {
    Nav,
    Footer,
    PictureInput
  },
  methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}
</script>

<style lang="scss">
#Home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
