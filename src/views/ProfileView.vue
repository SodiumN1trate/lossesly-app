<template>
  <div v-if="$store.state.user">
    <div class="main bubble">
      <h1>{{ $store.state.user.name }} {{ $store.state.user.surname }}</h1>
      <p>{{ $store.state.user.email }}</p>
    </div>
    <div class="image bubble">
      <img src="https://thispersondoesnotexist.com/image">
    </div>
    <div class="rating bubble">
      <h1 >Reitings</h1>
      <h2>{{ $store.state.user.rating }}</h2>
    </div>
    <div class="message bubble">
      <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0C38.8078 0 50 9.70453 50 21.6768C50 33.649 38.8078 43.3536 25 43.3536C23.6734 43.3536 22.3719 43.2635 21.1016 43.0901C15.7312 48.8211 9.32188 49.8483 3.125 50V48.5977C6.47187 46.8485 9.375 43.6604 9.375 40.0187C9.375 39.5101 9.3375 39.0115 9.26875 38.523C3.61406 34.5495 0 28.4783 0 21.6768C0 9.70453 11.1922 0 25 0Z" fill="white"/>
      </svg>
    </div>
    <div class="settings bubble">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_181_219)">
          <path d="M36.4763 23.8375C34.3776 20.2025 35.6401 15.545 39.2951 13.4275L35.3638 6.61878C34.2413 7.27753 32.9351 7.65503 31.5413 7.65503C27.34 7.65503 23.9351 4.22753 23.9351 -0.0012207H16.0738C16.0838 1.30378 15.7588 2.62753 15.0601 3.83628C12.9613 7.47128 8.2963 8.70753 4.6363 6.60003L0.706299 13.4088C1.83755 14.0525 2.81755 14.9938 3.5138 16.2013C5.6088 19.83 4.3538 24.48 0.712549 26.6L4.6438 33.4088C5.76255 32.7563 7.06255 32.3838 8.4488 32.3838C12.6363 32.3838 16.0326 35.79 16.0538 39.9988H23.9151C23.9113 38.7063 24.2388 37.3988 24.9288 36.2013C27.0238 32.5725 31.6776 31.3338 35.3351 33.4275L39.2663 26.6188C38.1426 25.975 37.1688 25.0363 36.4763 23.8363V23.8375ZM20.0001 28.0988C15.5276 28.0988 11.9013 24.4725 11.9013 20C11.9013 15.5275 15.5276 11.9013 20.0001 11.9013C24.4726 11.9013 28.0988 15.5275 28.0988 20C28.0988 24.4725 24.4726 28.0988 20.0001 28.0988Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_181_219">
            <rect width="40" height="40" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView'
}
</script>

<style scoped>
.main {
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translate(-50%, -50%);
  margin-left: auto;
  margin-right: auto;
  left: 50%;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.main > h1 {
  font-size: 40px;
}

p, h1, h2 {
  margin: 0;
  padding: 0;
}

.bubble {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FF7408;
  border-radius: 50%;
  z-index: 11;
  font-family: 'Libre Franklin', sans-serif;
}

.image {
  width: 300px;
  height: 300px;
  top: 20%;
  left: 30%;
}

.image > img {
  height: 250px;
  width: 250px;
  border-radius: 50%;
}

.rating {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  top: 54%;
  left: 35%;
}

.message {
  width: 150px;
  height: 150px;
  top: 25%;
  left: 53%;
}

.settings {
  width: 150px;
  height: 150px;
  top: 60%;
  left: 53%;
}
</style>