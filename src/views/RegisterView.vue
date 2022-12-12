<template>
  <div>
    <svg class="background" width="1980" height="690" viewBox="0 0 1980 690" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1980 689.5C1980 598.954 1954.39 509.294 1904.64 425.64C1854.89 341.986 1781.97 265.976 1690.04 201.95C1598.11 137.924 1488.97 87.1357 1368.86 52.4851C1248.74 17.8344 1120.01 -3.95791e-06 990 0C859.991 3.95791e-06 731.256 17.8345 611.143 52.4851C491.031 87.1357 381.894 137.924 289.964 201.95C198.034 265.976 125.111 341.986 75.3592 425.64C25.6071 509.294 -1.13657e-05 598.954 0 689.5L990 689.5H1980Z" fill="#FF7408"/>
    </svg>
    <div class="content">
      <div>
        <h1>Reģistrācija</h1>
      </div>
      <form class="form" @submit.prevent>
        <div>
          <div class="input-wrapper">
            <label for="first">Vārds</label>
            <input type="text" v-model="form.name">
          </div>
          <div class="input-wrapper">
            <label for="first">Uzvārds</label>
            <input type="text" v-model="form.surname">
          </div>
          <div class="input-wrapper">
            <label for="first">E-pasts</label>
            <input type="text" v-model="form.email">
          </div>
          <div class="input-wrapper">
            <label for="first">Parole</label>
            <input type="password" v-model="form.password">
          </div>
          <div class="input-wrapper">
            <label for="first">Atkārtoti paroli</label>
            <input type="password" v-model="form.password_rep">
          </div>
        </div>
        <button @click="$store.dispatch('register', form)">Turpināt</button>
        <p>Obligāti nepiciešams verificēt savu identitāti</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data () {
    return {
      form: {
        name: null,
        surname: null,
        email: null,
        password: null,
        password_rep: null
      }
    }
  }
}
</script>

<style scoped>
.background {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.content {
  position: absolute;
  top: 60%;
  bottom: 0;
  -ms-transform: translateY(-50%);
  transform: translate(-50%, -50%);
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  left: 50%;
  width: 700px;
  height: 700px;
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