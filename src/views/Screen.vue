<template>
  <div class="Screen">
    <Nav msg />

    <div>
      <b-card title body-class="text-center " header-tag="nav" class="mx-auto">
        <template v-slot:header>
          <b-nav card-header tabs>
            <b-nav-item active>
              <b-icon icon="archive-fill" aria-hidden="true"></b-icon>Screen
            </b-nav-item>

            <b-nav-item disabled>Result</b-nav-item>
          </b-nav>
        </template>

        <b-row class="p-4">
          <b-col>
            <h3>Please select your patient...</h3>
            <b-col>
              <b-card-body>
                <b-card width="50">
                  <b-col lg="10" class="my-1">
                    <br /><br /><br /><br /><br />
                    <SearchID />
                  </b-col>
                  <br />
                  <br />
                  <br /><br />
                  <Register />
                </b-card>
                <br />
              </b-card-body>
              <b-container>
                <NextButton />
              </b-container>
            </b-col>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <Footer msg />
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import SearchID from "@/components/SearchID.vue";
import Register from "@/components/Register.vue";
import NextButton from "@/components/NextButton.vue";

export default {
  computed: {},
  data() {
    return {
      filter: null,
      name: "",
      tel: "",
      hospital: "",
    };
  },
  name: "Home",
  components: {
    Nav,
    Footer,
    SearchID,
    Register,
    NextButton,
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
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
