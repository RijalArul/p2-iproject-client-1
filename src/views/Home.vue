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
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Card,
    Navbar,
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
