<template>
  <div class="main">
     <Nav msg=""/>
    
<div>
  <b-card title="" body-class="text-center " header-tag="nav" class="mx-auto">
    <template v-slot:header >
      <b-nav card-header tabs>
        <b-nav-item active><b-icon icon="person-fill" aria-hidden="true"></b-icon>Profile</b-nav-item>
       
      </b-nav>
    </template>
    

    <b-row class="p-4 mx-auto">
      <b-col  mx-auto>
          <b-container fluid class="p-5 mx-auto" mx-auto>
        <b-img src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/p960x960/70286121_2507184436030743_4153033461684240384_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_eui2=AeFmHi3XXYNO64vAJFmkTg9eR9E0bJitpYlH0TRsmK2lidu8qt4yX6MjOsxZ_mefcktgaMuk5jmr6nLEGhJ4n8N8&_nc_ohc=kFXF9YkEV1kAX-cGya4&_nc_ht=scontent.fbkk22-1.fna&_nc_tp=6&oh=a9b1a31bee901e20798594d252eff629&oe=5F5F821D" 
    width ="350" rounded alt="Rounded image" class="mx-auto"></b-img>
    
    </b-container>
    <router-link to="/EditProfile"> <b-button variant="outline-primary" size="lg"><b-icon icon="pencil" aria-hidden="true"></b-icon>Edit your profile</b-button></router-link>
      </b-col>
      <b-col   mx-auto>
          
        <b-card-body title="" >
            <h2>About <b-badge variant="danger">You</b-badge></h2>  
        <b-card  >
           <b-container fluid >
  <b-row class="my-4">
    <b-col sm="2">
      <label for="textarea-small">Name:</label>
    </b-col>
    <b-col sm="9" >
      <b-list-group >
  <b-list-group-item>Dr. Sarawut Rattanawichein</b-list-group-item>
 
</b-list-group>
    </b-col>
  </b-row>

 <b-row class="my-4">
    <b-col sm="2">
      <label for="textarea-small">Tel:</label>
    </b-col>
    <b-col sm="9">
      <b-list-group>
  <b-list-group-item>092-552-9166</b-list-group-item>
 
</b-list-group>
    </b-col>
  </b-row> <b-row>
    <b-col sm="2">
      <label for="textarea-small">Hospital:</label>
    </b-col>
    <b-col sm="9">
      <b-list-group>
  <b-list-group-item>KMUTT Hospital</b-list-group-item>
 
</b-list-group>
    </b-col>
  </b-row>
   <b-row class="my-4">
    <b-col sm="2">
      <label for="textarea-small">Position:</label>
    </b-col>
    <b-col sm="9">
      <b-list-group>
  <b-list-group-item>Specialist</b-list-group-item>
 
</b-list-group>
    </b-col>
  </b-row>
 

  
</b-container>
      
      
      
    
        
      
  

 
  </b-card>

        </b-card-body>
        
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

export default {
  name: 'Home',
  components: {
    Nav,
    Footer
  }
}
</script>