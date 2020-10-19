<template>
    <div>


<b-row class="p-4 mx-auto">
          <b-col mx-auto>
            <b-container fluid class="p-5 mx-auto" mx-auto>
              <b-img
                src="https://www.img.in.th/images/8f1f92764550e52f5283e16e4d82dffe.png"
                width="350"
                rounded
                alt="Rounded image"
                class="mx-auto"
              ></b-img>
            </b-container>
            <router-link to="/EditProfile">
              <b-button variant="outline-primary" size="lg">
                <b-icon icon="pencil" aria-hidden="true"></b-icon><span class="haha">Edit your profile</span>
              </b-button>
            </router-link>
          </b-col>
          <b-col mx-auto>
            <b-card-body title>
              <h2>
                About
                <b-badge variant="danger">You</b-badge>
              </h2>
              <b-card>
                <b-container fluid>
                  <b-row class="my-4">
                    <b-col sm="2">
                      <label for="textarea-small">Name:</label>
                    </b-col>
                    <b-col sm="9">
                      <b-list-group>
                        <b-list-group-item>Dr. Sarawut Rattanawichein</b-list-group-item>
                      </b-list-group>
                    </b-col>
                  </b-row>

                  <b-row class="my-4">
                    <b-col sm="2">
                      <label for="textarea-small">Tel:</label>
                    </b-col>
                    <b-col sm="9">
                      <b-list-group>
                        <b-list-group-item>092-552-9166</b-list-group-item>
                      </b-list-group>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col sm="2">
                      <label for="textarea-small">Hospital:</label>
                    </b-col>
                    <b-col sm="9">
                      <b-list-group>
                        <b-list-group-item>KMUTT Hospital</b-list-group-item>
                      </b-list-group>
                    </b-col>
                  </b-row>
                  <b-row class="my-4">
                    <b-col sm="2">
                      <label for="textarea-small">Position:</label>
                    </b-col>
                    <b-col sm="9">
                      <b-list-group>
                        <b-list-group-item>Specialist</b-list-group-item>
                      </b-list-group>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card>
            </b-card-body>
          </b-col>
        </b-row>


    </div>
</template>

<style lang="scss">
#Main {
  font-family: maven pro;
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
