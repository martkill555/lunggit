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
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>

       
       
      </template>
    <template v-slot:row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
            <b-col>{{ row.item.age }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
            <b-col>{{ row.item.isActive }}</b-col>
          </b-row>

          <router-link to="/ViewProfile"> <b-button variant="info" ><b-icon icon="chat-text-fill" aria-hidden="true"></b-icon>Comment </b-button></router-link>
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
          { key: 'isActive', sortable: true },
          { key: 'detect', sortable: true },
          { key: 'comment', sortable: true },
          { key: 'action', sortable: false }
        ],
        items: [
          { isActive: true, date: '20/05/2020', name: 'Dickerson', caseID: 'Macdonald', detect: 'Positive', comment: '-- --' },
          { isActive: false, date: '25/08/2020', name: 'Larsen', caseID: 'Shaw' , detect: 'Negative', comment: '-- --'},
          { isActive: false, date: '2/12/2020', name: 'Geneva', caseID: 'Wilson', detect: 'Positive' , comment: '-- --'},
          { isActive: true, date: '11/01/2020', name: 'Jami', caseID: 'Carney', detect: 'Negative', comment: '-- --' },
          { isActive: true, date: '11/01/2020', name: 'Jami', caseID: 'Carney', detect: 'Negative', comment: '-- --' },
          { isActive: true, date: '11/01/2020', name: 'Jami', caseID: 'Carney', detect: 'Negative', comment: '-- --' },
          { isActive: true, date: '11/01/2020', name: 'Jami', caseID: 'Carney', detect: 'Negative', comment: '-- --' },
          { isActive: true, date: '11/01/2020', name: 'Jami', caseID: 'Carney', detect: 'Negative', comment: '-- --' }
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