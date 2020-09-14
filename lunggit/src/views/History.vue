<template>
  <div class="main">
    <Nav msg />

    <div>
      <b-card title body-class="text-center " header-tag="nav" class="mx-auto">
        <template v-slot:header>
          <b-nav card-header tabs>
            <b-nav-item active>
              <b-icon icon="file-earmark-text-fill" aria-hidden="true"></b-icon>History
            </b-nav-item>
          </b-nav>
        </template>

        <b-row class="p-4">
          <b-col>
            <b-col class="p-2">
              <b-card-body>
                <h1>History</h1>
                <b-card>
                  <b-container fluid>
                    <b-table
                      :items="items"
                      :fields="fields"
                      :sort-by.sync="sortBy"
                      :sort-desc.sync="sortDesc"
                      sort-icon-left
                      striped
                      responsive="sm"
                    >
                      <template v-slot:cell(action)="row">
                        <b-button
                          size="sm"
                          @click="row.toggleDetails"
                          class="mr-2"
                          v-b-tooltip.hover
                          title="Click to show more information"
                        >{{ row.detailsShowing ? 'Hide' : 'More'}} Infomation</b-button>
                      </template>
                      <template v-slot:row-details="row">
                        <b-card>
                          <b-row class="mb-2">
                            <b-col class="mx-auto">
                              <h5>
                                Case ID:
                                <b-badge variant="danger">{{ row.item.caseID }}</b-badge>
                              </h5>
                            </b-col>
                          </b-row>
                          <b-col cols="3"></b-col>
                          <b-img
                            id="home"
                            src="https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.15752-9/104711999_3112600348787974_6058262536763487165_n.jpg?_nc_cat=102&_nc_sid=b96e70&_nc_eui2=AeG-kjtU2bYiXTnTt9VR9MqHUimDIpxDr-hSKYMinEOv6P60UA2m_aNrhOfRlgUkvcDR7RN8-7hGexC_XjIgI9B9&_nc_ohc=Ccc4dJvv14oAX_zLII5&_nc_ht=scontent.fbkk22-6.fna&oh=d04fe097d5ee9eb3e955deb878c30e4f&oe=5F5F14D4"
                            width="200"
                          ></b-img>

                          <b-row class="mb-2">
                            <b-col sm="3" class="text-sm-right">
                              <b>Name:</b>
                            </b-col>
                            <b-col>{{ row.item.name }}</b-col>
                          </b-row>
                          <b-row class="mb-2">
                            <b-col sm="3" class="text-sm-right">
                              <b>Date:</b>
                            </b-col>
                            <b-col>{{ row.item.date }}</b-col>
                          </b-row>
                          <b-row class="mb-2">
                            <b-col sm="3" class="text-sm-right">
                              <b>Program Detect:</b>
                            </b-col>
                            <b-col>{{ row.item.detect }} ({{ row.item.detectDate }})</b-col>
                          </b-row>

                          <b-row class="mb-2">
                            <b-col sm="3" class="text-sm-right">
                              <b>Specialist Comment:</b>
                            </b-col>
                            <b-col>{{ row.item.comment }}</b-col>
                          </b-row>

                          <b-button variant="info" v-b-modal.modal-center1>
                            <b-icon icon="chat-text-fill" aria-hidden="true"></b-icon>Comment
                          </b-button>

                          <b-modal id="modal-center1" centered title="BootstrapVue">
                            <template v-slot:modal-header="{ }">
                              <!-- Emulate built in modal header close button action -->

                              <h4>Comment</h4>
                              <h5>
                                Case ID:
                                <b-badge variant="info">{{ row.item.caseID }}</b-badge>
                              </h5>
                            </template>

                            <template v-slot:default="{  }">
                              <b-container fluid class="mb-2 text-center">
                                <b-row class="mb-4 text-center">
                                  <b-col cols="3"></b-col>
                                </b-row>

                                <b-row class="mb-4">
                                  <b-col cols="3">
                                    <b>Detect</b>
                                  </b-col>
                                  <b-col>
                                    <b-form-select v-model="headerBgVariant" :options="detect"></b-form-select>
                                  </b-col>
                                </b-row>

                                <b-row class="mb-1">
                                  <b-col cols="3">
                                    <b>Confident</b>
                                  </b-col>
                                  <b-col>
                                    <b-form-select v-model="bodyBgVariant" :options="confident"></b-form-select>
                                  </b-col>
                                </b-row>
                              </b-container>
                            </template>

                            <template v-slot:modal-footer="{  Submit,cancel  }">
                              <!-- Button with custom close trigger value -->
                              <b-button size="md" variant="outline-dark" @click="cancel()">Cancel</b-button>
                              <b-button
                                size="md"
                                variant="danger"
                                v-b-modal.modal-center2
                                @click="Submit()"
                              >Submit</b-button>
                            </template>
                          </b-modal>
                          <b-modal id="modal-center2" centered title="BootstrapVue">
                            <template v-slot:modal-header="{ }">
                              <!-- Emulate built in modal header close button action -->

                              <h4>Confirmation</h4>
                            </template>

                            <template v-slot:default="{  }">
                              <p>Your comment was submited successfuly</p>
                            </template>

                            <template v-slot:modal-footer="{  ok,  }">
                              <!-- Button with custom close trigger value -->

                              <b-button size="md" variant="success" href="/History" @click="ok()">
                                <b-icon icon="check-circle-fill"></b-icon>Ok
                              </b-button>
                            </template>
                          </b-modal>
                        </b-card>
                      </template>
                    </b-table>
                  </b-container>
                </b-card>
              </b-card-body>
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
    nameState2() {
      return this.name.length > 2 ? true : false;
    },
  },
  data() {
    return {
      detect: ["Negative", "Positive"],
      confident: ["Weakness", "Strong"],
      name: "",
      nameState: null,
      submittedNames: [],
      sortBy: "age",
      sortDesc: false,
      fields: [
        { key: "name", sortable: true },
        { key: "caseID", sortable: true },
        { key: "date", sortable: true },
        { key: "detect", sortable: true, variant: "danger" },
        { key: "comment", sortable: true, variant: "warning" },
        { key: "action", sortable: false },
        //{ key: 'detectDate', hidden }
      ],
      items: [
        {
          date: "20/05/2020",
          name: "Dickerson Macdonald",
          caseID: "1040",
          detect: "Positive",
          comment: "-- --",
          detectDate: "20/05/2020",
        },
        {
          date: "25/08/2020",
          name: "Larsen Shaw",
          caseID: "1501",
          detect: "Negative",
          comment: "-- --",
          detectDate: "20/05/2020",
        },
        {
          date: "2/12/2020",
          name: "Geneva Wilson",
          caseID: "1677",
          detect: "Positive",
          comment: "-- --",
          detectDate: "20/05/2020",
        },
        {
          date: "11/01/2020",
          name: "Jami Carney",
          caseID: "1599",
          detect: "Negative",
          comment: "-- --",
          detectDate: "20/05/2020",
        },
        {
          date: "15/04/2020",
          name: "Hiko Forest",
          caseID: "1402",
          detect: "Negative",
          comment: "-- --",
          detectDate: "20/05/2020",
        },
        {
          date: "21/02/2020",
          name: "New Dhan",
          caseID: "0950",
          detect: "Positive",
          comment: "-- --",
          detectDate: "20/05/2020",
        },
        {
          date: "08/09/2020",
          name: "Cheetah Srihan",
          caseID: "2104",
          detect: "Negative",
          comment: "-- --",
          detectDate: "20/05/2020",
        },
        {
          date: "31/12/2020",
          name: "Mormart Handsome",
          caseID: "1978",
          detect: "Positive",
          comment: "-- --",
          detectDate: "20/05/2020",
        },
      ],
      tableVariants: [
        "primary",
        "secondary",
        "info",
        "danger",
        "warning",
        "success",
        "light",
        "dark",
      ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: "",
      noCollapse: false,
    };
  },

  components: {
    Nav,
    Footer,
  },
  methods: {},
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
