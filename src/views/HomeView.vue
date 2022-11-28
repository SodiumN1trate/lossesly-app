<template>
  <div>
    <svg class="background" viewBox="0 0 1416 747" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2.43471V303.168H1110.07C774.951 41.2141 277.503 -13.1295 0 2.43471Z" fill="#FF7409"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 746.109V483.298H1286.36C1342.15 559.303 1386.68 646.433 1416 746.109H0Z" fill="#FF7409"/>
      <path d="M1286.36 483.298C1235.85 414.488 1176.11 354.796 1110.07 303.168H0V483.298H1286.36Z" fill="#CE5A00"/>
    </svg>
    <div class="content">
      <h1>Atrodi sev<br>
        piemērotu speciālistu!</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>

<style scoped>
.background, .content {
  position: absolute;
  width: 60%;
  bottom: 0;
  left: 0;
  z-index: 2;
}

.content {
  position: absolute;
  height: 60%;
}

h1 {
  font-weight: 300;
  font-size: 50px;
  margin-left: 30px;
  position: absolute;
  top: 0;
}

</style>