<template>
  <div class="content">
    <div class="page">
      <LoginView />
    </div>
    <div class="page" id="register">
      <RegisterView />
    </div>
    <div class="page">
      2
    </div>
    <div class="page">
      3
    </div>
    <div class="page">
      4
    </div>
    <div class="page">
      5
    </div>
    <div class="page">
      6
    </div>
    <div class="page">
      7
    </div>
  </div>
</template>

<script>
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
export default {
  components: {RegisterView, LoginView}
}
</script>

<style>
.content {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  overflow-x: hidden;
  width: 100%;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.page {
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  position: relative;
}
</style>