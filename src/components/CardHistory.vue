<template>
  <div class="container">
    <div class="card">
      <div class="card-header">{{ history.schedule }}</div>
      <div class="card-body">
        <h5 class="card-title">{{ history.activity }}</h5>
        <p class="card-text">
          {{ history.User.username}}
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
  props: ['history']
}
</script>