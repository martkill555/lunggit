<template>
  <div class="main">
    <Nav msg />

    <div>
      <b-card title body-class="text-center " header-tag="nav">
        <template v-slot:header>
          <b-nav card-header tabs>
            <b-nav-item active>
              <b-icon icon="pencil" aria-hidden="true"></b-icon>Edit Profile
            </b-nav-item>
          </b-nav>
        </template>

        <b-row class="p-4">
          <b-col>
            <picture-input
              ref="pictureInput"
              @change="onChange"
              width="500"
              height="500"
              margin="16"
              accept="image/jpeg, image/png"
              size="10"
              buttonClass="btn"
              :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Upload Image '
      }"
            ></picture-input>
          </b-col>

          <b-col>
            <b-card-body title>
              <h2>
                Edit Your
                <b-badge variant="info">Profile</b-badge>
              </h2>
              <b-card>
                <b-container fluid>
                  <b-row>
                    <b-col sm="12">
                      <b-row class="my-4">
                        <b-col sm="3">
                          <label for="input-none">Name:</label>
                        </b-col>
                        <b-col sm="9">
                          <b-form-input
                            id="input-live"
                            v-model="name"
                            :state="nameState"
                            aria-describedby="input-live-help input-live-feedback"
                            placeholder="Enter at least 3 characters"
                            trim
                          ></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-4">
                        <b-col sm="3">
                          <label for="input-none2">Tel:</label>
                        </b-col>
                        <b-col sm="9">
                          <b-form-input
                            id="input-live"
                            v-model="tel"
                            :state="telState"
                            aria-describedby="input-live-help input-live-feedback"
                            placeholder="Enter your phone number"
                            trim
                          ></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-4">
                        <b-col sm="3">
                          <label for="input-none3">Hospital:</label>
                        </b-col>
                        <b-col sm="9">
                          <b-form-input
                            id="input-live"
                            v-model="hospital"
                            :state="hospitalState"
                            aria-describedby="input-live-help input-live-feedback"
                            placeholder="Enter your hospital"
                            trim
                          ></b-form-input>
                        </b-col>
                      </b-row>
                      <b-row class="my-4">
                        <b-col sm="3">
                          <label for="input-none4">Position:</label>
                        </b-col>
                        <b-col sm="9">
                          <b-form-select v-model="selected" :options="options"></b-form-select>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </b-card-body>
            <b-container>
              <b-button variant="danger" size="lg" v-b-modal.modal-center1>
                <b-icon icon="check" aria-hidden="true"></b-icon>Save
              </b-button>
            </b-container>
          </b-col>
        </b-row>

        <b-modal id="modal-center1" centered title="BootstrapVue">
          <template v-slot:modal-header="{ }">
            <!-- Emulate built in modal header close button action -->

            <h4>Confirmation</h4>
          </template>

          <template v-slot:default="{  }">
            <p>Data was submitted successfully</p>
          </template>

          <template v-slot:modal-footer="{  ok,  }">
            <!-- Button with custom close trigger value -->

            <b-button size="md" variant="success" href="/ViewProfile" @click="ok()">
              <b-icon icon="check-circle-fill"></b-icon>Ok
            </b-button>
          </template>
        </b-modal>
      </b-card>
    </div>

    <Footer msg />
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import PictureInput from "vue-picture-input";

export default {
  computed: {
    nameState() {
      return this.name.length > 2 ? true : false;
    },
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please choose your position" },
        { value: "a", text: "Staff" },
        { value: "b", text: "Specialist" },

        //{ value: 'd', text: 'This one is disabled', disabled: true }
      ],
      name: "",
      tel: "",
      hospital: "",
    };
  },
  name: "Home",
  components: {
    Nav,
    Footer,
    PictureInput,
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
    getData() {
      this.$axios.get("");
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
