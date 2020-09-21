<template>
  <div>
    <b-button
      variant="outline-danger"
      size="lg"
      v-b-tooltip.hover
      title="Click to discard your result"
      v-b-modal.modal-center2
    >
      <b-icon icon="trash-fill"></b-icon>Discard
    </b-button>

    <b-button
      variant="success"
      size="lg"
      v-b-tooltip.hover
      title="Click to save your result"
      v-b-modal.modal-center1
    >
      <b-icon icon="cloud-plus-fill" aria-hidden="true"></b-icon>Record
    </b-button>

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

        <router-link :to="{ name: 'Main' }">
          <b-button size="md" variant="success" @click="ok()">Ok</b-button>
        </router-link>
      </template>
    </b-modal>
    <b-modal id="modal-center2" centered title="BootstrapVue">
      <template v-slot:modal-header="{ }">
        <!-- Emulate built in modal header close button action -->

        <h4>Confirmation</h4>
      </template>

      <template v-slot:default="{  }">
        <p>Are you sure that you want to discard the result information?</p>
      </template>

      <template v-slot:modal-footer="{ Discard, cancel }">
        <!-- Button with custom close trigger value -->
        <b-button size="md" variant="outline-dark" @click="cancel()">Cancel</b-button>
        <b-button size="md" variant="danger" @click="discard()">
          <b-icon icon="trash-fill"></b-icon>Discard
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    async discard() {
      const picId = this.$route.params.picId;
      try {
        await this.$axios.delete('/api/file/' + picId);
        console.log('SUCCESS');
      } catch (e) {
        console.log('FAILED');
      }
    }
  }
}
</script>