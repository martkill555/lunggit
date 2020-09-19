<template>
  <div id="Home">
    <NavBar />

    <IMGslide />
    <HomeTitle />
    
    
    <Footer msg />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import IMGslide from "@/components/IMGslide.vue";
import HomeTitle from "@/components/HomeTitle.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Footer,
    IMGslide,
    HomeTitle,
  },
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
