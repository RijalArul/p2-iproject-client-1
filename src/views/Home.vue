<template>
  <div>
    <div id="home">
      <Navbar></Navbar>
      <Card 
        v-for="meeting in meetings"
        :key="meeting.id"
        :meeting="meeting"
      >

      </Card>
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
  components: {
    Card,
    Navbar,
    Discord
  },
  computed: {
    meetings() {
      return this.$store.state.meetings
    }
  },
  methods: {
    fetchMeeting() {
      this.$store.dispatch('actionFetchMeetings');
    }
  },
  created() {
    this.fetchMeeting();
  }
};
</script>
