<template lang="pug">
.main
  Nav
  div
    b-card.mx-auto(body-class="text-center " header-tag="nav")
      template(v-slot:header)
        b-nav(card-header tabs)
          b-nav-item(active)
            b-icon(icon="file-earmark-text-fill" aria-hidden="true")
            | History
      b-row.p-4
        b-col
          b-col.p-2
            b-card-body
              h1 History
              b-card
                b-container(fluid)
                  HistoryBox
  Footer
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