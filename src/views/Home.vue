<template>
  <div>
    <div id="home">
      <Navbar></Navbar>
      <Card></Card>
      <Discord></Discord>
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
import Discord from "../views/Discord.vue";

export default {
  name: "Home",
  components: {
    Card,
    Navbar,
    Discord
  },
};
</script>
