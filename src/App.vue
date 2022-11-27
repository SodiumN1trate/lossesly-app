<template>
  <div style="display: flex; gap: 30px; font-size: 30px;">
    <a href="/">Home</a>
    <a href="#tests">About</a>
  </div>
  <main>
    <section id="home">
      <template v-if="currentPage === '/'">
        <HomeView />
        <BubbleGenerator />
      </template>
    </section>
    <section id="tests">
      <template v-if="currentPage === '/'">
        Tests
      </template>
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
  data () {
    return {
      currentPage: '/'
    }
  },
  mounted() {
    this.ticker()
  },
  methods: {
    ticker () {
      this.currentPage = this.$router.currentRoute._value.path
      this.ticker()
    }
  }
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
  padding: 3em;
  height: calc(100vh -  6em);
  background-color: #383F51;
}

</style>
