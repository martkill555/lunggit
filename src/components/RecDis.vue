<template>
    <div>
<router-link :to="{ name: 'Main' }">
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

                 <router-link :to="{ name: 'Main' }"> <b-button size="md" variant="success"  @click="ok()">Ok</b-button> </router-link>
                </template>
              </b-modal>

    </div>
</template>