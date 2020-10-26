
 <template>
  <div>
    <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" :backdrop-variant="variant"
      backdrop
      shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">History</h4>
          <br />
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
          placeholder="Enter patient name"
        ></b-form-input>
       
      </b-input-group>
    </b-form-group>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav>
          </nav>
         
        </div>
      </template>
      <template #footer="{ hide }">
       <div class="d-flex bg-light text-dark align-items-center px-3 py-2">
       <b-button variant="danger" block @click="hide">Close</b-button>
       </div>
      </template>
    </b-sidebar>
  </div>
</template>

<style lang="scss">
#Font {
  font-family: maven pro;
  font-weight: bold;
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