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
            <h1>Predict</h1>
            <b-col>
              <UploadIMG />
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
import UploadIMG from "@/components/UploadIMG.vue";




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
      lastname: "",
    };
  },
  name: "Home",
  components: {
    Nav,
    Footer,
    UploadIMG,
  
    
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
          console.log('confidence', confidence);
          _this.$router.push({
            name: "Result",
            params: { className: className, confidence: confidence, picId },
          });
        })
        .catch((err) => {
          throw new err();
        });
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
