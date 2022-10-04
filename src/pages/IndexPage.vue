<template>
  <q-page>
    <OrderList />
  </q-page>
</template>

<script>

import { defineComponent } from "vue";
import _ from "lodash"
import OrderList from "src/components/OrderList.vue";
export default defineComponent({

  name: "IndexPage",
  components: { OrderList },
  setup() {
    return {

    };
  },


  computed: {


  },
  methods: {

  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
<style>

</style>
