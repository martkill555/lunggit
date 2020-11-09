<template>
  <div>
    <label>If you cannnot find your patient name, please</label>

    <b-button variant="outline-success" size="sm" v-b-modal.modal-center1
      >Register</b-button
    >
    <b-modal id="modal-center1" centered title="BootstrapVue">
      <template v-slot:modal-header="{}">
        <!-- Emulate built in modal header close button action -->

        <h4>Register</h4>
      </template>

      <template v-slot:default="{}">
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            :state="nameState"
            label="First name"
            label-for="name-input"
            invalid-feedback="First name is required"
          >
            <b-form-input
              id="name-input"
              v-model="firstname"
              :state="nameState"
              required
            ></b-form-input>
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
          v-model="DOB"
          menu-class="w-100"
          calendar-width="100%"
          class="mb-2"
        ></b-form-datepicker>
      </template>

      <template v-slot:modal-footer="{ cancel }">
        <!-- Button with custom close trigger value -->

        <b-button size="md" variant="outline-dark" @click="cancel()"
          >Cancel</b-button
        >
        <b-button
          size="md"
          variant="info"
          v-b-modal.modal-center2
          @click="regis()"
          >Confirm</b-button
        >
      </template>
    </b-modal>
  </div>
</template>
<script>
import { LungscanAPI } from "../../api/lungscanAPI";
const api = new LungscanAPI({
  baseUri: "http://localhost:8080",
});
// var date = new Date(this.DOB);
// var DOB = JSON.stringify(date);
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      DOB: null,
    };
  },
  computed: {},
  props: {
    msg: String,
  },
  methods: {
    async regis() {
      const res = await api.patientsController.createOne({
        firstname: this.firstname,
        lastname: this.lastname,
        dOB: this.DOB,
      });
      // console.log(this.firstname),
      // console.log(this.lastname),
      // console.log(this.DOB),
      console.log(res),
        this.$router.push({
          name: "Predict",
          params: {
            firstname: this.firstname,
            lastname: this.lastname,
            DOB: this.dOB,
          },
        });
    },
    getData() {
      this.$axios.get("");
    },
  },
};
</script>