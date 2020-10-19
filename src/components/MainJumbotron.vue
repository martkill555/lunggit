<template>
  <div>
    <b-jumbotron id="Main" bg-variant="white" text-variant="dark">
      <template v-slot:header>
        <span class="Font">Overview</span>
      </template>

      <template v-slot:lead>
        <b>Lung Scan project will be using the abilities of an AI technology based on a website to implement a feature that aims to help medical staff who want to diagnose tuberculosis using x-ray film</b>
      </template>
      <br />
      <br />
      <hr class="my-4" />
      <br />
      <br />
      <b-img
        src="https://www.img.in.th/images/6d7afb4de88622abdb53ccaad22bc703.png"
        width="800"
      ></b-img>

      <br />
      <br />
      <br />
      <br />

      <router-link to="/Screen">
        <b-button variant="primary">
          <b-icon icon="tv" aria-hidden="true"></b-icon>Lung Screen
        </b-button>
      </router-link>
      <router-link to="/History">
        <b-button variant="success">
          <b-icon icon="clipboard-data" aria-hidden="true"></b-icon>History
        </b-button>
      </router-link>
    </b-jumbotron>
  </div>
</template>

<style lang="scss">
#Font {
  font-family: maven pro;
  font-weight: bold;
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