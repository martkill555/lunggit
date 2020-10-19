<template>
  <div>
    <label>If you cannnot find your patient name, please</label>

    <b-button variant="outline-success" size="sm" v-b-modal.modal-center1>Register</b-button>
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
  </div>
</template>>