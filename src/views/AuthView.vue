<template>
  <div ref="auth_content" class="content">
    <div class="page">
      <LoginView />
    </div>
    <div class="page" id="register">
      <RegisterView />
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
  grid-template-columns: auto auto;
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