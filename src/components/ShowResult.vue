<template>
  <div>
    <h4>
      Case ID:
      <b-badge variant="info">{{caseId}}</b-badge>
    </h4>
    <br />
    <b-img
      v-if="imagePath"
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
          <!-- <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon> -->
        </h5>

        <h5 class="my-4">
          Confident :
          <b-badge variant="primary">{{confident}} %</b-badge>
          <!-- <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon> -->
        </h5>
      </b-col>
    </b-row>
  </div>
</template>


<script>
// @ is an alias to /src

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
      caseId: null,
    };
  },
  name: "Home",
  components: {},
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
    this.caseId = this.$route.params.picId;
    const picId = this.$route.params.picId;
    this.imagePath = "http://localhost:8080/api/file/" + picId;
  },
};
</script>