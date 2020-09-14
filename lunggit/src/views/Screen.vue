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
                    <br /><br /><br /><br />
                    <b-form-group
                      label="Search"
                      label-cols-sm="3"
                      label-align-sm="right"
                      label-size="sm"
                      label-for="filterInput"
                      class="mb-0"
                    >
                      <b-input-group size="sm">
                        <b-form-input
                          v-model="filter"
                          type="search"
                          id="filterInput"
                          placeholder="Type to search your patient name"
                        ></b-form-input>
                        <b-input-group-append>
                          <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </b-form-group>
                  </b-col>
<br />

                  <label>If you cannnot find your patient name, please  </label>
                 
                  <b-button variant="outline-success" size="sm" v-b-modal.modal-center1>Register</b-button>
                   <br /><br /><br /><br />
                </b-card>
                <br />
              </b-card-body>
              <b-container>
                <router-link to="/Predict">
                  <b-button disabled  variant="danger" size="lg">
                    Next
                    <b-icon icon="arrow-right" aria-hidden="true"></b-icon>
                  </b-button>
                </router-link>
              </b-container>
            </b-col>
          </b-col>
        </b-row>

        <b-modal id="modal-center1" centered title="BootstrapVue">
          <template v-slot:modal-header="{ }">
            <!-- Emulate built in modal header close button action -->

            <h4>Register</h4>
          </template>

          <template v-slot:default="{  }">
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                :state="nameState"
                label="First name"
                label-for="name-input"
                invalid-feedback="First name is required"
              >
                <b-form-input id="name-input" v-model="name" :state="nameState" required></b-form-input>
              </b-form-group>
            </form>
            <form ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group label="Last name" label-for="lastname-input">
                <b-form-input id="lastname-input" v-model="lastname"></b-form-input>
              </b-form-group>
            </form>
            <label for="datepicker-full-width">Date of birth</label>
            <b-form-datepicker
              id="datepicker-full-width"
              v-model="value"
              menu-class="w-100"
              calendar-width="100%"
              class="mb-2"
            ></b-form-datepicker>
          </template>

          <template v-slot:modal-footer="{  cancel,Submit  }">
            <!-- Button with custom close trigger value -->

            <b-button size="md" variant="outline-dark" @click="cancel()">Cancel</b-button>
            <b-button
              size="md"
              variant="info"
              v-b-modal.modal-center2
              href="/Screen"
              @click="Submit()"
            >Confirm</b-button>
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

export default {
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
    nameState() {
      return this.name.length > 2 ? true : false;
    },
  },
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
