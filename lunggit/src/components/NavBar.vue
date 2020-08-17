<template>

  <div >
    
  <b-navbar toggleable type="dark" variant="dark"  >
   
     <router-link to="/"> <b-navbar-brand> <b-img src="https://cdn.discordapp.com/attachments/678634511214313493/737600952722522133/logo.png" 
    width ="40"></b-img>Lungscan</b-navbar-brand></router-link>

      <b-form inline>
    <label class="sr-only" for="inline-form-input-username">Username</label>
    <b-input-group prepend="Username" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-username" placeholder="Enter your username"></b-input>
      
    </b-input-group>

    <label class="sr-only" for="inline-form-input-password">password</label>
    <b-input-group prepend="Password" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input type="password" id="text-password" aria-describedby="password-help-block" placeholder="Enter your password"></b-input>
    </b-input-group>

    

    <router-link to="/Main"> <b-link href="/Main.vue"> <b-button variant="primary">Login</b-button></b-link></router-link>
  </b-form>
    <b-collapse id="nav-collapse" is-nav>
  

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      


      </b-navbar-nav>
      
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  data() {
      return {
        userId: ''
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
#navBar {
  font-family: maven pro;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
