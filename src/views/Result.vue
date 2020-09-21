<template>
  <div id="Result">
    <Nav msg />

    <div>
      <b-card title body-class="text-center " header-tag="nav" class="mx-auto">
        <template v-slot:header>
          <b-nav card-header tabs>
            <b-nav-item disabled>Screen</b-nav-item>

            <b-nav-item active>
              <b-icon icon="file-earmark-text-fill" aria-hidden="true"></b-icon>Result
            </b-nav-item>
          </b-nav>
        </template>

        <b-row class="p-4">
          <b-col>
            <b-col class="p-2">
              <b-card-body>
                <h1>Result</h1>
                <b-card>
                  <b-container fluid>
                    <br />
                    <ShowResult />
                  </b-container>
                </b-card>
              </b-card-body>

              <h4 class="my-4">
                ‘Emperical confirmation by
                <b-badge variant="info">Specialist</b-badge>is required’
              </h4>

              <b-col lg="mx-auto">
                <RecDis />
              </b-col>
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
import ShowResult from "@/components/ShowResult.vue";
import RecDis from "@/components/RecDis.vue";

export default {
  computed: {
    nameState() {
      return this.name.length > 2 ? true : false;
    },
  },
  data() {
    return {
      name: "",
      tel: "",
      hospital: "",
      className: null,
      confident: null,
      imagePath: null,
    };
  },
  name: "Home",
  components: {
    Nav,
    Footer,
    ShowResult,
    RecDis,
  },
  methods: {
    onChange(image) {
      console.log("New picture selected!");
      if (image) {
        console.log("Picture loaded.");
        this.image = image;
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
    },
  },
  mounted() {
    this.className = this.$route.params.className;
    this.confident = this.$route.params.confidence;
    const picId = this.$route.params.picId;
    this.imagePath = "http://localhost:8080/api/file/" + picId;
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
