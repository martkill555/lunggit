<template>
  <div class="Screen">
     <Nav msg=""/>
    
<div>
 
  <b-card title="" body-class="text-center " header-tag="nav" class="mx-auto">
    <template v-slot:header >
     
      <b-nav card-header tabs>
        <b-nav-item active ><b-icon icon="archive-fill" aria-hidden="true"></b-icon>Screen</b-nav-item>
      
    <b-nav-item disabled>Result</b-nav-item>


      </b-nav>
      
    </template>  

   <b-row class="p-4 ">
     
      <b-col  >
          <h1>Predict</h1>
      <b-col   >
          
        <b-card-body >
     
         
    
        <b-card width="50" >
         
      <b-container fluid >
 
  
    <b-row class="p-4 ">
      <b-col  >
         
    
    <picture-input 
      ref="pictureInput" 
      @change="onChange" 
      
      width="400" 
      height="400" 
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
            <h4>Case ID: <b-badge variant="info">1045</b-badge></h4> 
        <b-card >
           <b-container fluid >
      <b-row class="my-4">
    <b-col sm="3">
         <label for="textarea-small">First name:</label>
    </b-col>
    <b-col sm="9">
      <b-list-group>
  <b-list-group-item>Sarawut</b-list-group-item>
 
</b-list-group>

  
    </b-col>
  </b-row>

   <b-row class="my-4">
    <b-col sm="3">
         <label for="textarea-small">Last name:</label>
    </b-col>
    <b-col sm="9">
      <b-list-group>
  <b-list-group-item>Rattanawichein</b-list-group-item>
 
</b-list-group>

  
    </b-col>
  </b-row>
  
     <b-row class="my-4">
    <b-col sm="3">
         <label for="textarea-small">Date of birth:</label>
    </b-col>
    <b-col sm="9">
      <b-list-group>
  <b-list-group-item>06/07/2542</b-list-group-item>
 
</b-list-group>

  
    </b-col>
  </b-row>
  <b-row >
  
    <b-col sm="12" >
       
    
 <b-row class="my-4">
    <b-col sm="3">
      <label for="input-none">Description:</label>
    </b-col>
    <b-col sm="9">
     <b-form-textarea
    id="textarea-no-resize"
    placeholder="Enter description"
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
       
      </b-col>
      
    </b-row>

  
</b-container>


  </b-card>

        </b-card-body>
          <b-container>
   <router-link to="/Result"> <b-button variant="danger" size="lg">Start </b-button></router-link>


   
   
   
</b-container>
      </b-col></b-col>
      
    </b-row>
     
     
     <b-modal id="modal-center1" centered title="BootstrapVue">
    <template v-slot:modal-header="{ }">
      <!-- Emulate built in modal header close button action -->
      
      <h4>Register</h4>
    </template>

    <template v-slot:default="{  }">
     <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="First name"
          label-for="name-input"
          invalid-feedback="First name is required"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
       <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          
          label="Last name"
          label-for="lastname-input"
         
        >
          <b-form-input
            id="lastname-input"
            v-model="lastname"
           
            
          ></b-form-input>
        </b-form-group>
      </form>
       <label for="datepicker-full-width">Date of birth</label>
    <b-form-datepicker
      id="datepicker-full-width"
      v-model="value"
      menu-class="w-100"
      calendar-width="100%"
      class="mb-2"
    ></b-form-datepicker>
   
      
    </template>

    <template v-slot:modal-footer="{  cancel,Submit  }">
     
      
      <!-- Button with custom close trigger value -->
      
       <b-button size="md"  variant="outline-dark" @click="cancel()">
        Cancel
      </b-button>
      <b-button size="md" variant="info" v-b-modal.modal-center2   href="/Screen"  @click="Submit()">
        Confirm
      </b-button>
    </template>
  </b-modal> 

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
       sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      },
      nameState() {
        return this.name.length > 2 ? true : false
      }
    },
    data() {
      return {
        filter: null,
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
    
     onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
       onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
    getData() {
      this.$axios.get('')
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
