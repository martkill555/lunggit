<template>
  <div class="main">
    <Nav msg />

    <div>
      <b-card title body-class="text-center " header-tag="nav">
        <template v-slot:header>
          <b-nav card-header tabs>
            <b-nav-item active>
              <b-icon icon="pencil" aria-hidden="true"></b-icon>Edit Profile
            </b-nav-item>
          </b-nav>
        </template>

     <EditPro />
      </b-card>
    </div>

    <Footer msg />
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import EditPro from "@/components/EditPro.vue";


export default {
  computed: {
    
  },
  name: "Home",
  components: {
    Nav,
    Footer,
    EditPro,

 }
};
</script>

<style lang="scss">
#Home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
