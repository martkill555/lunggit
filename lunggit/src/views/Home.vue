<template>
  <div id="Home">
    <NavBar />
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        img-src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/116155080_296439891457897_1691392196203392050_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_eui2=AeG7xisKlr15KFeP43WImX2TlQhsj8xqxfWVCGyPzGrF9Q_LWW5s_eFWNB04BxETI8pu5WATJ0jIDZPiqB673JPn&_nc_ohc=Xd4Gt-k1S68AX-SyxkM&_nc_ht=scontent.fbkk22-1.fna&_nc_tp=7&oh=eefc3bc6c9789c008c24a88fba1c373d&oe=5F5F81E6"
      ></b-carousel-slide>
      <b-carousel-slide
        caption
        img-src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.15752-9/s2048x2048/116058418_632745694315024_1285163407543643633_n.jpg?_nc_cat=103&_nc_sid=b96e70&_nc_eui2=AeGeaB9Ksi-YYlboGExzIf-6j7mCn6Qma_iPuYKfpCZr-NfJ2125nqUedvKiYJ4yMwFBgMArf1NYDzb61f1-zryR&_nc_ohc=mam6gk241aEAX_sXMSe&_nc_ht=scontent.fbkk22-3.fna&_nc_tp=7&oh=a071c64be137035fc3fde7f5cbd656e6&oe=5F5E538F"
      ></b-carousel-slide>
    </b-carousel>
    <b-jumbotron bg-variant="white" text-variant="dark">
      <template v-slot:header>Discover Our Application</template>

      <template v-slot:lead>“Save life is our goal”</template>

      <hr class="my-4" />

      <p>In 2019, Tuberculosis remains one of the top 10 causes of death worldwide. Millions of people continue to fall sick from tuberculosis each year(GHO,2018). Furthermore, the number of medical staff is not enough to look after patients thoroughly. So, to decrease the burden of medical staff, the Lung Scan project will be using the abilities of an AI technology based on a website to implement a feature that aims to help medical staff who want to diagnose tuberculosis using x-ray film</p>
    </b-jumbotron>
    <Footer msg />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Footer,
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
