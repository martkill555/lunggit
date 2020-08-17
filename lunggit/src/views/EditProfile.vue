<template>
  <div class="main">
     <Nav msg=""/>
    
<div>
  <b-card title="" body-class="text-center " header-tag="nav" >
    <template v-slot:header >
      <b-nav card-header tabs>
        <b-nav-item active><b-icon icon="pencil" aria-hidden="true"></b-icon>Edit Profile</b-nav-item>
       
      </b-nav>
    </template>
    

    <b-row class="p-4 ">
      <b-col  >
         
    
    <picture-input 
      ref="pictureInput" 
      @change="onChange" 
      
      width="500" 
      height="500" 
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      buttonClass="btn"
      :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Upload Image '
      }">
    </picture-input>
    
      </b-col>
      
      <b-col   >
          
        <b-card-body title="" >
            <h2>Edit Your <b-badge variant="info">Profile</b-badge></h2> 
        <b-card >
           <b-container fluid >
  <b-row >
  
    <b-col sm="12" >
       
    
 <b-row class="my-4">
    <b-col sm="3">
      <label for="input-none">Name:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input
      id="input-live"
      v-model="name"
      :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your name"
      trim
    ></b-form-input>

  
    </b-col>
  </b-row>
   <b-row class="my-4">
    <b-col sm="3">
      <label for="input-none2">Tel:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input
      id="input-live"
      v-model="tel"
      :state="telState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your phone number"
      trim
    ></b-form-input>

   
    </b-col>
  </b-row>
   <b-row class="my-4">
    <b-col sm="3">
      <label for="input-none3">Hospital:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input
      id="input-live"
      v-model="hospital"
      :state="hospitalState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your hospital"
      trim
    ></b-form-input>

    
    </b-col>
  </b-row>
   <b-row class="my-4">
    <b-col sm="3">
      <label for="input-none4">Position:</label>
    </b-col>
    <b-col sm="9">
        <b-form-select v-model="selected" :options="options"></b-form-select>

    
    </b-col>
  </b-row>
    

    </b-col>
    
  </b-row>
  
 

  
</b-container>

      
      
      
    
        
      
  

 
  </b-card>

        </b-card-body>
          <b-container>
   <router-link to="/ViewProfile"> <b-button variant="danger" size="lg"><b-icon icon="check" aria-hidden="true"></b-icon>Save </b-button></router-link>
</b-container>
      </b-col>
      
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
          selected: null,
        options: [
          { value: null, text: 'Please choose your position' },
          { value: 'a', text: 'Staff' },
          { value: 'b', text: 'Specialist' },
         
          //{ value: 'd', text: 'This one is disabled', disabled: true }
        ],
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
