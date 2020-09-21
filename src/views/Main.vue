<template>
  <div>
    <Nav class="mt-0" msg />
    <MainIMG />
    <!-- <SideBar class="Main"/> -->
    <MainJumbotron />    
    <Footer msg />
    
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import MainIMG from "@/components/MainIMG.vue";
import MainJumbotron from "@/components/MainJumbotron.vue";
// import SideBar from "@/components/SideBar.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Footer,
    MainIMG,
    MainJumbotron,
    //  SideBar,
  },
};
</script>

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
