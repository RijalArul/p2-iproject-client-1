<template>
  <div>
    <nav class="navbar navbar-expand-lg" id="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" id="link-text">
          <img
            src="../assets/discord-logo-png-7617.png"
            alt=""
            width="90"
            height="34"
            class="d-inline-block align-text-center"
            id="link-text"
          />
          Discord Alert App
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/add">
              <a
                class="nav-link active"
                id="link-text"
                aria-current="page"
                href="#"
                >Add</a
              >
            </router-link>
            <router-link to="/history">
              <a class="nav-link" id="link-text" href="#">History</a>
            </router-link>
            <router-link to="/login">
              <a class="nav-link" id="link-text" href="#">Logout</a>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#navbar {
  background-color: #9e3dff;
}

#link-text {
  color: aliceblue;
}
</style>