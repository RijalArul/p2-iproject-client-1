<template>
  <div class="container">
    <CardHistory></CardHistory>
  </div>
</template>

<style scoped>
.container {
  margin-top: 50px;
}
</style>
<script>
import CardHistory from "../components/CardHistory.vue"
export default {
    components: {
        CardHistory
    }
};
</script>