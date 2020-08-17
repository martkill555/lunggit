<template>
  <div class="main">
     <Nav msg=""/>
    
<div>
 
  <b-card title="" body-class="text-center " header-tag="nav" class="mx-auto">
    <template v-slot:header >
      <b-nav card-header tabs>
        <b-nav-item active><b-icon icon="file-earmark-text-fill" aria-hidden="true"></b-icon>History</b-nav-item>
      
    


      </b-nav>
      
    </template>  
  
   <b-row class="p-4 ">
      <b-col  >
    
      <b-col  class="p-2 " >
          
        <b-card-body >
        <h1> History</h1>  
        <b-card  >
           <b-container fluid >
        

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
        <b-button size="sm" @click="row.toggleDetails" class="mr-2" v-b-tooltip.hover title="Click to show more information">
          {{ row.detailsShowing ? 'Hide' : 'More'}} Infomation
        </b-button>

       
       
      </template>
    <template v-slot:row-details="row">
        <b-card>

 <b-row class="mb-2">
            <b-col  class="mx-auto"><h5>Case ID: <b-badge variant="danger">{{ row.item.caseID }}</b-badge></h5></b-col>
           
             </b-row>

          
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

        

           <b-button variant="info" @click="$bvModal.show('modal-scoped')" ><b-icon icon="chat-text-fill" aria-hidden="true"></b-icon>Comment </b-button>
      
       <b-modal id="modal-scoped">
    <template v-slot:modal-header="{ close }">
      <!-- Emulate built in modal header close button action -->
      <b-button size="sm" variant="outline-danger" @click="close()">
        Close Modal
      </b-button>
      <h5>Modal Header</h5>
    </template>

    <template v-slot:default="{ hide }">
      <p>Modal Body with button</p>
      <b-button @click="hide()">Hide Modal</b-button>
    </template>

    <template v-slot:modal-footer="{ ok, cancel, hide }">
      <b>Custom Footer</b>
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="success" @click="ok()">
        OK
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()">
        Cancel
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
        Forget it
      </b-button>
    </template>
  </b-modal>


   </b-card>
      </template>
    </b-table>

  
</b-container>


  </b-card>

        </b-card-body>
         
      </b-col></b-col>
      
    </b-row>
  </b-card>
 
</div>

     <Footer msg=""/>
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'


export default {
    computed: {
      nameState() {
        return this.name.length > 2 ? true : false
      }
    },
    data() {
      return {
          
          sortBy: 'age',
        sortDesc: false,
        fields: [
          { key: 'name', sortable: true },
          { key: 'caseID', sortable: true },          
          { key: 'date', sortable: true },          
          { key: 'detect', sortable: true ,variant: 'danger'},
          { key: 'comment', sortable: true ,variant: 'warning'},
          { key: 'action', sortable: false  },
          //{ key: 'detectDate', hidden }
        ],
        items: [
          { date: '20/05/2020', name: 'Dickerson Macdonald', caseID: '1040', detect: 'Positive', comment: '-- --',detectDate: '20/05/2020'},
          { date: '25/08/2020', name: 'Larsen Shaw', caseID: '1501' , detect: 'Negative', comment: '-- --',detectDate: '20/05/2020'},
          { date: '2/12/2020', name: 'Geneva Wilson', caseID: '1677', detect: 'Positive' , comment: '-- --',detectDate: '20/05/2020'},
          { date: '11/01/2020', name: 'Jami Carney', caseID: '1599', detect: 'Negative', comment: '-- --',detectDate: '20/05/2020' },
          {date: '15/04/2020', name: 'Hiko Forest', caseID: '1402', detect: 'Negative', comment: '-- --' ,detectDate: '20/05/2020'},
          {  date: '21/02/2020', name: 'New Dhan', caseID: '0950', detect: 'Positive', comment: '-- --' ,detectDate: '20/05/2020'},
          { date: '08/09/2020', name: 'Cheetah Srihan', caseID: '2104', detect: 'Negative', comment: '-- --' ,detectDate: '20/05/2020'},
          { date: '31/12/2020', name: 'Mormart Handsome', caseID: '1978', detect: 'Positive', comment: '-- --' ,detectDate: '20/05/2020'}
        ],tableVariants: [
          'primary',
          'secondary',
          'info',
          'danger',
          'warning',
          'success',
          'light',
          'dark'
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
        tableVariant: '',
        noCollapse: false
      }
             
    },
  name: 'Home',
  components: {
    Nav,
    Footer,
  
  },
  methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}
</script>