<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="card-body p-4 p-sm-5">
        <h5 class="card-title text-center mb-5 fw-light fs-5">Add Meeting</h5>
        <form @submit.prevent="handleAddMeeting">
          <div class="form-floating mb-5">
            <input
              type="text"
              class="form-control rounded-pill"
              id="floatingInput"
              placeholder=""
              v-model="activity"
            />
            <label for="floatingInput">Activity</label>
          </div>
          <div class="form-floating mb-5">
            <DatePicker v-model="meetDate" type="datetime" ></DatePicker>
             <button type="button" @click="handleChangeDate">Pick Date</button>
          </div>

          <div class="d-grid">
            <button
              class="btn btn-login text-uppercase fw-bold"
              id="btn-submit"
              type="submit"
            >
              Add Meeting
            </button>
          </div>
          <hr class="my-4" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: linear-gradient(rgb(138, 56, 226), rgb(164, 70, 226));
  margin-top: 50px;
  height: 600px;
  width: 1000px;
}

#btn-submit {
  background: linear-gradient(rgb(244, 240, 248), rgb(223, 195, 241));
  color: white;
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  data() {
    return {
      activity: "",
      meetDate: "",
      schedule: {
        year: "",
        month: "",
        date: "",
        hour: "",
        minute: "",
        second: "",
      },
    };
  },
  components: {
    Navbar,
    DatePicker,
  },
  methods: {
    handleAddMeeting() {
      const payload = {
        activity: this.activity,
        schedule: this.meetDate,
      };

      this.$store.dispatch('actionAddMeeting', payload)
    },
    handleChangeDate() {
      this.schedule.year = this.meetDate.getFullYear();
      this.schedule.month = this.meetDate.getMonth();
      this.schedule.date = this.meetDate.getDate();
      this.schedule.hour = this.meetDate.getHours();
      this.schedule.minute = this.meetDate.getMinutes();
      this.schedule.second = this.meetDate.getSeconds();
    },
  },
};
</script>