<template>
  <template class="popups" style="">
    <PopUp
        v-for="(pop, index) in $store.state.popups"
        :key="index"
        :popupType="pop.popupType"
        :popupText="pop.popupText"
        :popupShowTime="pop.popupShowTime + index / 2"
    />
  </template>

  <transition>
    <h1 v-show="showTitle" class="web-title">Lossesly</h1>
  </transition>
  <div class="navigation">
    <template
        v-for="(page, index) in pages"
        :key="index"
    >
      <a
          class="navigation-button"
          :style="{backgroundColor: $route.hash === page.route ? '#5D6065': '#2d3138'}"
          v-if="!$store.state.user && page.route === '#authentication' || (page.auth && $store.state.user || page.auth === false)"
          :href="page.route"
          @click="hideTitle"
          @mouseenter="page.hover = true"
          @mouseleave="page.hover = false"
      >
        <transition name="navigation">
          <span v-if="page.hover">{{ page.name }}</span>
        </transition>
      </a>
    </template>
  </div>

  <main>
    <section id="home">
      <HomeView/>
      <BubbleGenerator />
    </section>
    <section id="authentication" v-if="!$store.state.user">
      <AuthView />
<!--      <CenterBubbleGenerator />-->
    </section>
    <section id="profile" v-if="$store.state.user">
      <ProfileView />
    </section>
  </main>
</template>

<script>
// import CenterBubbleGenerator from "@/components/CenterBubbleGenerator";
import BubbleGenerator from "@/components/BubbleGenerator";
import HomeView from "@/views/HomeView";
import AuthView from "@/views/AuthView";
import ProfileView from "@/views/ProfileView";
import PopUp from "@/components/PopUp";

export default {
  name: 'App',
  data () {
    return {
      showTitle: true,
      currentPage: 0,
      pages: [
        {
          name: 'Galvenā lapa',
          route: '#home',
          hover: false,
          auth: false
        },
        {
          name: 'Autentificēšanās',
          route: '#authentication',
          hover: false
        },
        {
          name: 'Profils',
          route: '#profile',
          hover: false,
          auth: true
        }
      ]
    }
  },
  components: {
    PopUp,
    ProfileView,
    AuthView,
    HomeView,
    BubbleGenerator,
    // CenterBubbleGenerator
  },
  mounted () {
    this.$router.push(this.pages[0].route)
    document.body.addEventListener('keydown', (e) => {
      if(e.code === 'ArrowDown' || e.code === 'ArrowUp') {
        this.hideTitle()
        this.pages.map((page, index) => {
          if(this.$route.hash === page.route) {
            if(e.code === 'ArrowDown') {
              this.$router.push(this.pages[index+1].route)
            } else {
              this.$router.push(this.pages[index-1].route)
            }
          }
        })
      }
    })
  },
  methods: {
    hideTitle () {
      this.showTitle = false

      setTimeout(() => {
        this.showTitle =  true
      }, 500)
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
  height: 100vh;
  width: 100%;
  position: relative;
}

.web-title {
  font-family: 'Libre Franklin', sans-serif;
  margin-left: 50px;
  position: absolute;
  z-index: 40;
}

.navigation {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-end;
  align-items: flex-end;
  right: 20px;
  top: 50%;
  z-index: 100;
}

.popups {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
  z-index: 20;
  justify-content: center;
  align-items: center;
}

.navigation-button {
  float: right;
  width: 30px;
  cursor: pointer;
  height: 30px;
  white-space:nowrap;
  border-radius: 50%;
  transition: .9s;
  color: white;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation-button:hover {
  padding: 10px;
  width: 130px;
  border-radius: 5px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


.navigation-enter-active {
  transition: opacity 1s ease;
}

.navigation-leave-active {
  transition: opacity .1s ease;
}
.navigation-enter-from,
.navigation-leave-to {
  opacity: 0;
}


</style>
