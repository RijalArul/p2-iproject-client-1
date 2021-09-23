<template>
  <div class="container">
    <div class="card">
      <div class="card-header">{{ meeting.schedule }}</div>
      <div class="card-body">
        <h5 class="card-title">{{ meeting.User.username }}</h5>
        <p class="card-text">
            {{ meeting.activity }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .container {
        margin-top: 50px;   
    }
</style>

<script>
export default {
    props: ['meeting']
}
</script>