<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand" style="margin-top: -1em;" href="#">(A)Umbrella <sub class="d-block" style="text-decoration: line-through;">Решение проблем</sub></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav align-items-center">
            <router-link to="/chat" class="nav-link active">Чат</router-link>
            <button class="nav-link btn" @click="$emit('auth')">Вход</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "MyNavbar"
}
</script>

<style scoped>

</style>