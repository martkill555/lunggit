<template>
    <div>
 <b-container fluid>
    <!-- User Interface controls -->
    
     

     

      <b-col lg="4"   >
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
              placeholder="Type to Search"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

     

      

    
 
<br />
    <!-- Main table element -->
    <b-table
      show-empty
      small
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
    >
      <template #cell(name)="row">
        {{ row.item.name }} 
      </template>

  <template #cell(actions)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2" v-b-tooltip.hover title="Click to show more information">
           {{ row.detailsShowing ? 'Hide' : 'More'}} Information
         </b-button>
       
      </template>
      <template v-slot:row-details="row">
        <b-card>

 <b-row class="mb-2">
            <b-col  class="mx-auto"><h5>Case ID: <b-badge variant="danger">{{ row.item.caseID }}</b-badge></h5></b-col>
           
             </b-row>
 <b-col cols="3"></b-col>
        <b-button v-b-modal.modal-center3> <b-img id="home" src="https://sv1.picz.in.th/images/2020/11/09/bolRoP.jpg" 
    width ="200"></b-img></b-button>
       

          
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Name:</b></b-col>
            <b-col>{{ row.item.name }}</b-col>
          </b-row>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Date:</b></b-col>
            <b-col>{{ row.item.date }}</b-col>
          </b-row>
            <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Program Detect:</b></b-col>
            <b-col  >{{ row.item.detect }} ({{ row.item.detectDate }})</b-col>
             </b-row>



          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Specialist Comment:</b></b-col>
            <b-col>{{ row.item.comment }}</b-col>
          </b-row>

        

           <b-button variant="info" v-b-modal.modal-center1 ><b-icon icon="chat-text-fill" aria-hidden="true"></b-icon>Comment </b-button>


      <b-modal id="modal-center3" centered title="BootstrapVue">
    <template v-slot:modal-header="{ }">
      <!-- Emulate built in modal header close button action -->
      
     <h5>Case ID: <b-badge variant="info">{{ row.item.caseID }}</b-badge></h5>
    </template>

    <template v-slot:default="{  }" >
     
      <b-img id="home" src="https://sv1.picz.in.th/images/2020/11/09/bolRoP.jpg" 
    width ="465"></b-img>
    </template>

    <template v-slot:modal-footer="{  cancel }">
     
      
      <!-- Button with custom close trigger value -->
      <b-button size="md"  variant="danger" @click="cancel()">
        Close
      </b-button>
      
    </template>
  </b-modal>
   <b-modal id="modal-center1" centered title="BootstrapVue">
    <template v-slot:modal-header="{ }">
      <!-- Emulate built in modal header close button action -->
      
      <h4>Comment</h4><h5>Case ID: <b-badge variant="info">{{ row.item.caseID }}</b-badge></h5>
    </template>

    <template v-slot:default="{  }" >
     
      <b-container fluid class="mb-2 text-center">
        <b-row class="mb-4 text-center">
          <b-col cols="3"></b-col>
       
        </b-row>

        <b-row class="mb-4">
          <b-col cols="3"><b>Detect</b></b-col>
          <b-col>
            <b-form-select
              v-model="headerBgVariant"
              :options="detect"
            ></b-form-select>
          </b-col>
         
        </b-row>

        <b-row class="mb-1">
          <b-col cols="3"><b>Confident</b></b-col>
          <b-col>
            <b-form-select
              v-model="bodyBgVariant"
              :options="confident"
            ></b-form-select>
          </b-col>
          
        </b-row>
 
      </b-container>

      <b-col sm="12" >
       
    
 <b-row class="my-4">
    <b-col sm="3">
      <label for="input-none"><b>Description:</b></label>
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
    </template>

    <template v-slot:modal-footer="{  Submit,cancel  }">
     
      
      <!-- Button with custom close trigger value -->
      <b-button size="md"  variant="outline-dark" @click="cancel()">
        Cancel
      </b-button>
      <b-button size="md" variant="danger" v-b-modal.modal-center2  @click="Submit()">
        Submit
      </b-button>
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
      
      <b-button size="md" variant="success" href="/History" @click="ok()"><b-icon icon="check-circle-fill"></b-icon>
        Ok
      </b-button>
    </template>
  </b-modal>


   </b-card>
      </template>
    </b-table>
    <br />
  <b-col sm="7" md="6" class="mx-auto">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>

    <!-- Info modal -->
   
  </b-container>
        </div>
</template>


<script>

export default {
    data() {
      return {
        detect: ['Negative', 'Positive'],
        confident: ['Weakness', 'Strong'],
        items: [
           { date: '20/05/2020', name: 'Dickerson Macdonald', caseID: '1040', detect: 'Positive', comment: '-- --',detectDate: '20/05/2020'},
          { date: '25/08/2020', name: 'Larsen Shaw', caseID: '1501' , detect: 'Negative', comment: '-- --',detectDate: '20/05/2020'},
          { date: '2/12/2020', name: 'Geneva Wilson', caseID: '1677', detect: 'Positive' , comment: '-- --',detectDate: '20/05/2020'},
          { date: '11/01/2020', name: 'Jami Carney', caseID: '1599', detect: 'Negative', comment: '-- --',detectDate: '20/05/2020' },
          {date: '15/04/2020', name: 'Hiko Forest', caseID: '1402', detect: 'Negative', comment: '-- --' ,detectDate: '20/05/2020'},
          {  date: '21/02/2020', name: 'New Dhan', caseID: '0950', detect: 'Positive', comment: '-- --' ,detectDate: '20/05/2020'},
          { date: '08/09/2020', name: 'Cheetah Srihan', caseID: '2104', detect: 'Negative', comment: '-- --' ,detectDate: '20/05/2020'},
          { date: '31/12/2020', name: 'Mormart Handsome', caseID: '1978', detect: 'Positive', comment: '-- --' ,detectDate: '20/05/2020'}
        ],
        fields: [
          { key: 'caseID', sortable: true },  
          { key: 'name', label: 'Name', sortable: true, sortDirection: 'desc' },
           
            
          { key: 'date', label: 'Date', sortable: true, class: 'text-center' },
          {
            key: 'detect',
            label: 'Detect',
            sortable: true,
            sortByFormatted: true,
            filterByFormatted: true
          },
          { key: 'comment', sortable: true },
          { key: 'actions', label: 'Actions' }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        }
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      }
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length
    },
    methods: {
      
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }
    }
  }
</script>