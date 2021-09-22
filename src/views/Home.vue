<template>
  <div>
    <div id="home">
      <Navbar></Navbar>
      <Card></Card>
    </div>
  </div>
</template>

<style scoped>
#home {
  background-color: coral;
  height: 1500px;
}
</style>
<script>
import Card from "../components/Card.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Card,
    Navbar,
  },
};
</script>
