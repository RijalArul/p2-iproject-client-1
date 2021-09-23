<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="card-body p-4 p-sm-5">
        <h5 class="card-title text-center mb-5 fw-light fs-5" id="title-card">Add Meeting</h5>
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
            <DatePicker v-model="meetDate" type="datetime" confirm></DatePicker>
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
  background-color: #9e3dff;
  margin-top: 50px;
  height: 400px;
  width: 1000px;
}

#btn-submit {
  background: linear-gradient(rgb(181, 129, 233), rgb(226, 206, 238));
  color: rgb(229, 94, 238);
}

#title-card {
  color: white
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
  },
};
</script>