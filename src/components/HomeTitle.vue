<template>
    <div class="Font">

<b-jumbotron bg-variant="white" text-variant="dark">
      <template v-slot:header>Discover Our Application</template>

      <template v-slot:lead>“Save life is our goal”</template>

      <hr class="my-4" />
 <br /> <br />
      <p>In 2019, Tuberculosis remains one of the top 10 causes of death worldwide. Millions of people continue to fall sick from tuberculosis each year(GHO,2018). Furthermore, the number of medical staff is not enough to look after patients thoroughly. So, to decrease the burden of medical staff, the Lung Scan project will be using the abilities of an AI technology based on a website to implement a feature that aims to help medical staff who want to diagnose tuberculosis using x-ray film</p>
    </b-jumbotron>

    </div>
</template>


<style lang="scss">
#Font {
  font-family: maven pro;

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