<template>
  <div class="main">
    <Nav msg />

    <div>
      <b-card title body-class="text-center " header-tag="nav" class="mx-auto">
        <template v-slot:header>
          <b-nav card-header tabs>
            <b-nav-item active>
              <b-icon icon="file-earmark-text-fill" aria-hidden="true"></b-icon>History
            </b-nav-item>
          </b-nav>
        </template>

        <b-row class="p-4">
          <b-col>
            <b-col class="p-2">
              <b-card-body>
                <h1>History</h1>
                <b-card>
                  <b-container fluid>
                    <HistoryBox />
                  </b-container>
                </b-card>
              </b-card-body>
            </b-col>
          </b-col>
        </b-row>
      </b-card>
    </div>

    <Footer msg />
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import HistoryBox from "@/components/HistoryBox.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Footer,
    HistoryBox,
    
  },
};
</script>