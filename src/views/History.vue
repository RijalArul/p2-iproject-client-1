<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <CardHistory
        v-for="history in histories"
        :key="history.id"
        :history="history"
      ></CardHistory>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 50px;
}
</style>
<script>
import CardHistory from "../components/CardHistory.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    CardHistory,
    Navbar,
  },
  methods: {
    fetchHistory() {
      this.$store.dispatch("actionFetchHistory");
    },
  },
  created() {
    this.fetchHistory();
  },
  computed: {
    histories() {
      return this.$store.state.histories;
    },
  },
};
</script>