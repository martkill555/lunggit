<template v-slot:footer>
<div id="app" class="Main">
    <app-footer>
 <b-card bg-variant="dark" text-variant="white" footer-class="footer">
  <b-card-text>
    <b><b-badge variant="danger">Lungscan</b-badge> @KMUTT, 2020</b>
  </b-card-text>

 </b-card>
   </app-footer>
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
<style lang="scss">
#Main {
  font-family: maven pro;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
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
