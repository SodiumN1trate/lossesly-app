<template>
  <div class="content">
    <div>
      <h1>Autentifikācija</h1>
      <p>Lūdzu ierakstiet jusu lietotājvārdu un parole lai tiktu iekša</p>
    </div>
    <div class="form">
      <div>
        <div class="input-wrapper">
          <label for="first">E-pasts</label>
          <input type="text">
        </div>
        <div class="input-wrapper">
          <label for="first">Parole</label>
          <input type="password">
        </div>
        <label class="checkbox-container">Atcerēties mani?
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
      </div>
      <span>Aizmirsi paroli? <a href="/">spied šeit</a></span>
      <span>Gribi reģistrēties? <a href="#register">spied šeit</a></span>
      <button>Ieiet</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>

<style scoped>
.content {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translate(-50%, -50%);
  margin-left: auto;
  margin-right: auto;
  left: 50%;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background-color: #FF7408;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

h1 {
  text-align: center;
  font-family: 'Libre Franklin', sans-serif;
  letter-spacing: 1px;
  font-size: 40px;
  margin: 0;
  padding: 0;
}

p {
  font-family: 'Libre Franklin', sans-serif;
  margin: 0;
  text-align: center;
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  gap: 20px;
}

.form > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>