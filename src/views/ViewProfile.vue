<template>
  <div id="ViewProfile">
    <Nav msg />

    <div>
      <b-card title body-class="text-center p-6" header-tag="nav" class="mx-auto">
        <template v-slot:header>
          <b-nav card-header tabs>
            <b-nav-item active>
              <b-icon icon="person-fill" aria-hidden="true"></b-icon>Profile
            </b-nav-item>
          </b-nav>
        </template>

        <ViewproInfo />
      </b-card>
    </div>

    <Footer msg />
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import ViewproInfo from "@/components/ViewproInfo.vue";

export default {
  name: "ViewProfile",
  components: {
    Nav,
    Footer,
    ViewproInfo,
  },
};
</script>

<style lang="scss">
#ViewProfile {
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
