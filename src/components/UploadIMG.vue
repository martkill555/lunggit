<template>
  <div>
    <b-card-body>
      <b-card width="50">
        <b-container fluid>
          <b-row class="p-4">
            <b-col>
              <br />
              <br />
              <br />
              <br />
              <picture-input
                type="file"
                ref="file-key"
                @change="onChange"
                width="224"
                height="224"
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
                <b-card>
                  <b-container fluid>
                    <b-row class="my-4">
                      <b-col sm="3">
                        <label for="textarea-small">First name:</label>
                      </b-col>
                      <b-col sm="9">
                        <b-list-group>
                          <input v-model="firstname" placeholder="firstname" />
                        </b-list-group>
                      </b-col>
                    </b-row>

                    <b-row class="my-4">
                      <b-col sm="3">
                        <label for="textarea-small">Last name:</label>
                      </b-col>
                      <b-col sm="9">
                        <b-list-group>
                          <input v-model="lastname" placeholder="lastname" />
                          <p>{{lastname}}</p>
                        </b-list-group>
                      </b-col>
                    </b-row>

                    <b-row class="my-4">
                      <b-col sm="3">
                        <label for="textarea-small">Date of birth:</label>
                      </b-col>
                      <b-col sm="9">
                        <b-list-group>
                          <b-list-group-item>{{DOB}}</b-list-group-item>
                        </b-list-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="12">
                        <b-row class="my-4">
                          <b-col sm="3">
                            <label for="input-none">Description:</label>
                          </b-col>
                          <b-col sm="9">
                            <b-form-textarea
                              id="textarea-no-resize"
                              placeholder="Enter description"
                              rows="3"
                              no-resize
                            ></b-form-textarea>
                          </b-col>
                        </b-row>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-card>
              </b-card-body>
            </b-col>
          </b-row>
        </b-container>
      </b-card>
    </b-card-body>
    <button @click="con()">consolelog</button>
    <b-container>
      <b-button variant="danger" @click="sendToScan()" size="lg">Screen</b-button>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

import PictureInput from "vue-picture-input";

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
      firstname: "",
      DOB: "",
      tel: "",
      hospital: "",
      lastname: "",
    };
  },
  name: "Home",
  components: {
    PictureInput,
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    async onChange(image) {
      console.log("New picture selected!");
      if (image) {
        const mimeType = mimeType || (image.match(/^data:([^;]+);/) || "")[1];
        this.file = await fetch(image)
          .then(function (res) {
            return res.arrayBuffer();
          })
          .then(function (buf) {
            return new File([buf], "filename", { type: mimeType });
          });
        console.log("Picture loaded.");
        this.image = image;
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
    },
    getData() {
      this.$axios.get("");
    },
    con(){
      console.log(this.firstname),
      console.log(this.lastname),
      console.log(this.DOB)
    },
    urltoFile(url, filename, mimeType) {
      mimeType = mimeType || (url.match(/^data:([^;]+);/) || "")[1];
      return fetch(url)
        .then(function (res) {
          return res.arrayBuffer();
        })
        .then(function (buf) {
          return new File([buf], filename, { type: mimeType });
        });
    },
    sendToScan() {
      const _this = this;
      const formdata = new FormData();
      formdata.append("file_key", this.file, "file");
      this.$axios({
        method: "post",
        url: "/api/file",
        data: formdata,
        headers: {
          "Content-Type": "multipart/formdata",
        },
      })
        .then((res) => {
          console.log(res.data);
          const className = res.data.result.class;
          const confidence = res.data.result.value.toFixed(2);
          const picId = res.data.result.picId;
          console.log("confidence", confidence);
          _this.$router.push({
            name: "Result",
            params: { className: className, confidence: confidence, picId },
          });
        })
        .catch((err) => {
          throw new err();
        });
    },
    mounted(){
      this.firstname = this.$route.params.firstname;
      this.lastname = this.$route.params.lastname;
      this.DOB = this.$route.params.DOB;
    }
    
  },
};
</script>