<template>

  <div>
    
  <b-navbar toggleable type="dark" variant="dark"  >
   
    <router-link to="/Main"> <b-navbar-brand> <b-img src="https://cdn.discordapp.com/attachments/678634511214313493/737600952722522133/logo.png" 
    width ="40"></b-img>Lungscan</b-navbar-brand></router-link>
    
   
  <b-navbar  >
       <b-avatar badge badge-variant="success" src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/p960x960/70286121_2507184436030743_4153033461684240384_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_eui2=AeFmHi3XXYNO64vAJFmkTg9eR9E0bJitpYlH0TRsmK2lidu8qt4yX6MjOsxZ_mefcktgaMuk5jmr6nLEGhJ4n8N8&_nc_ohc=kFXF9YkEV1kAX-cGya4&_nc_ht=scontent.fbkk22-1.fna&_nc_tp=6&oh=a9b1a31bee901e20798594d252eff629&oe=5F5F821D" href="/ViewProfile">
       </b-avatar> 
       
       <b-button variant="dark" href="/ViewProfile">Dr. Sarawut Rattanawichein</b-button>     
    <b-dropdown id="dropdown-right" right text="" variant="dark" class="m-0">
    <b-dropdown-item href="/EditProfile"><b-icon icon="person"></b-icon>Edit your profile</b-dropdown-item>
   
   
      <b-dropdown-item href="/"><b-icon icon="power"></b-icon>Logout</b-dropdown-item>
      <!-- //<b-dropdown-item  @click="showMsgBoxTwo"><b-icon icon="power"></b-icon>Logout</b-dropdown-item> -->
  </b-dropdown>
   </b-navbar>


 
    
  </b-navbar>
</div>
</template>

<script>
export default {
  data() {
      return {
        userId: '',
        boxTwo: ''
      }
    },
     methods: {      
      showMsgBoxTwo() {
        this.boxTwo = ''
        this.$router.push =''
         this.$root.$bvModal.msgBoxConfirm('You will be reture to the login screen.', {
          title: 'Confirm Logout',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'Logout' ,
          cancelTitle: 'Cancel',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(value => {
            this.boxTwo = value  
              
          })
          
      }
    },
    computed: {
      validation() {
        return this.userId.length > 4 && this.userId.length < 13
      }
    },
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h2 {
  color: #42b983;
}
h2 {
  color: #42b983;
}
h1 {
  color: #42b983;
}
h4 {
  color: #42b983;
}
h5 {
  color: #42b983;
}
</style>

<style>
#nav {
  font-family: maven pro;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
