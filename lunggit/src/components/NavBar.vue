<template>
  <div>
  <b-navbar toggleable type="dark" variant="dark"  >
   
    <b-navbar-brand> <b-img src="https://cdn.discordapp.com/attachments/678634511214313493/737600952722522133/logo.png" 
    width ="40"></b-img>Lungscreen</b-navbar-brand>

      <b-form inline>
    <label class="sr-only" for="inline-form-input-username">Username</label>
    <b-input-group prepend="Username" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-username" placeholder="Enter your username"></b-input>
      
    </b-input-group>

    <label class="sr-only" for="inline-form-input-username">Username</label>
    <b-input-group prepend="Password" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-username" placeholder="Enter your password"></b-input>
    </b-input-group>

    

    <b-link href="/Main"> <b-button variant="primary">Login</b-button></b-link>
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
a {
  color: #42b983;
}
</style>
