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
                    <h4>
                      Case ID:
                      <b-badge variant="info">1045</b-badge>
                    </h4>
                    <b-img v-if="imagePath"
                      :src="imagePath"
                      width="250"
                      rounded
                      alt="Rounded image"
                      class="mx-auto"
                    ></b-img>
                    <b-row>
                      <b-col sm="12" class="my-4">
                        <h5 class="my-4">
                          Detect :
                          <b-badge variant="warning">{{className}}</b-badge>
                          <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
                        </h5>

                        <h5 class="my-4">
                          Confident :
                          <b-badge variant="primary">{{confident}}</b-badge>
                          <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
                        </h5>
                      </b-col>
                      <b-col sm="12"></b-col>
                    </b-row>
                  </b-container>
                </b-card>
              </b-card-body>

              <h4 class="my-4">
                ‘Emperical confirmation by
                <b-badge variant="info">Specialist</b-badge>is required’
              </h4>

              <b-col lg="mx-auto">
                <router-link to="/Main">
                  <b-button
                    variant="outline-danger"
                    size="lg"
                    v-b-tooltip.hover
                    title="Click to discard your result"
                  >
                    <b-icon icon="trash-fill"></b-icon>Discard
                  </b-button>
                </router-link>
                <b-button
                  variant="success"
                  size="lg"
                  v-b-tooltip.hover
                  title="Click to save your result"
                  v-b-modal.modal-center1
                >
                  <b-icon icon="cloud-plus-fill" aria-hidden="true"></b-icon>Record
                </b-button>
              </b-col>

              <b-modal id="modal-center1" centered title="BootstrapVue">
                <template v-slot:modal-header="{ }">
                  <!-- Emulate built in modal header close button action -->

                  <h4>Confirmation</h4>
                </template>

                <template v-slot:default="{  }">
                  <p>Your result was recorded successfuly</p>
                </template>

                <template v-slot:modal-footer="{  ok,  }">
                  <!-- Button with custom close trigger value -->

                  <b-button size="md" variant="success" href="/Main" @click="ok()">Ok</b-button>
                </template>
              </b-modal>
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
      imagePath: null
    };
  },
  name: "Home",
  components: {
    Nav,
    Footer,
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
