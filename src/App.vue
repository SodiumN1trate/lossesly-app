<template>
  <main>
    <section>
      <HomeView/>
      <BubbleGenerator />
    </section>
    <section>
        Tests
    </section>
  </main>
</template>

<script>
import BubbleGenerator from "@/components/BubbleGenerator";
import HomeView from "@/views/HomeView";

export default {
  name: 'App',
  components: {
    HomeView,
    BubbleGenerator
  },
}
</script>

<style>
@import './assets/style/stylesheet.css';

main {
  margin: 0;
  height: 100vh;
  overflow-y: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

section {
  scroll-snap-align: start;
  height: 100vh;
  position: relative;
}

</style>
