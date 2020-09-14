<template>
  <div>
    <Nav class="mt-0" msg />

    <b-carousel
      id="carousel-1"
      :interval="4000"
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        height="200"
        img-src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/118281345_2810978145854185_385926875551241355_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_eui2=AeElhrmpkQ8hWMexuBikuZ54xxmF27AH4k7HGYXbsAfiTg8svtZEQYm9agWEwYAe3PtxKa1O2c7znv8KNC5F08zO&_nc_ohc=BJhtDuJXER8AX8CEjR5&_nc_oc=AQlar05vzbLpun6xPLZIOkI_-M8ATtAqcuiKb63xYFhE8QLprbb66AhFsAz81BcQDHY&_nc_ht=scontent.fbkk10-1.fna&oh=ef6fc02b5b3f752dee1271643f23203e&oe=5F6762C9"
      ></b-carousel-slide>
    </b-carousel>

    <b-jumbotron id="Main" bg-variant="white" text-variant="dark">
      <template v-slot:header>
        <b-badge variant="outline-dark">Overview</b-badge>
      </template>

      <template v-slot:lead>
        <b>Lung Scan project will be using the abilities of an AI technology based on a website to implement a feature that aims to help medical staff who want to diagnose tuberculosis using x-ray film</b>
      </template>

      <hr class="my-4" />

      <b-img
        src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/116080892_689019555014265_2885304354529837000_n.png?_nc_cat=110&_nc_sid=b96e70&_nc_eui2=AeFdTofX5j84Vd2jykt902M28IWWzNBD-7XwhZbM0EP7tUoHqi9cRg-m2n-cS_VSNzkS7d5ljYKVvlHa12uivsvA&_nc_ohc=BNqpgn81lzwAX99wc-z&_nc_ht=scontent.fbkk10-1.fna&oh=bfcd4fb6de2f2cd3f703a9d410de0fdb&oe=5F60F282"
        width="800"
      ></b-img>

      <b-container class="my-4">
        <b-col lg="mx-auto">
          <router-link to="/Screen">
            <b-button variant="outline-primary" size="lg">
              <b-icon icon="tv" aria-hidden="true"></b-icon>Lung Screen
            </b-button>
          </router-link>
          <router-link to="/History">
            <b-button variant="outline-success" size="lg">
              <b-icon icon="clipboard-data" aria-hidden="true"></b-icon>History
            </b-button>
          </router-link>
        </b-col>
      </b-container>
    </b-jumbotron>

    <Footer msg />
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Footer,
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
