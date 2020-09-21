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
        src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/116080892_689019555014265_2885304354529837000_n.png?_nc_cat=110&_nc_sid=b96e70&_nc_eui2=AeFdTofX5j84Vd2jykt902M28IWWzNBD-7XwhZbM0EP7tUoHqi9cRg-m2n-cS_VSNzkS7d5ljYKVvlHa12uivsvA&_nc_ohc=BNqpgn81lzwAX99wc-z&_nc_ht=scontent.fbkk10-1.fna&oh=bfcd4fb6de2f2cd3f703a9d410de0fdb&oe=5F60F282"
        width="800"
      ></b-img>

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