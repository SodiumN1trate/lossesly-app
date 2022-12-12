<template>
  <transition name="bounce">
    <div class="popup" v-if="this.show" :class="'popup-' + this.popupType ">
      <p>{{ this.popupText }}</p>

      <svg  class="icon-circle-cross" @click="this.show = false" width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.580028 0.492259C0.852258 0.220028 1.29363 0.220028 1.56586 0.492259L10.3759 9.30225L19.1858 0.492259C19.4581 0.220028 19.8994 0.220028 20.1717 0.492259C20.4439 0.76449 20.4439 1.20586 20.1717 1.47809L11.3617 10.2881L20.1717 19.0981C20.4439 19.3703 20.4439 19.8117 20.1717 20.0839C19.8994 20.3561 19.4581 20.3561 19.1858 20.0839L10.3759 11.2739L1.56586 20.0839C1.29363 20.3561 0.852258 20.3561 0.580028 20.0839C0.307797 19.8117 0.307797 19.3703 0.580028 19.0981L9.39002 10.2881L0.580028 1.47809C0.307797 1.20586 0.307797 0.76449 0.580028 0.492259Z"/>
      </svg>

    </div>
  </transition>
</template>

<script>
export default {
  props: ['popupShow', 'popupType', 'popupText', 'popupShowTime', 'index'],
  data () {
    return {
      show: false
    }
  },
  mounted () {
    this.show = true
    setInterval(() => {
      this.show = false
    }, this.popupShowTime * 1000)
  }
}
</script>

<style scoped>
.popup {
  width: 450px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.75);
  -moz-box-shadow:    0px 0px 5px 0px rgba(50, 50, 50, 0.75);
  box-shadow:         0px 0px 5px 0px rgba(50, 50, 50, 0.75);
  padding: 10px 10px;
  border-radius: 3px;

}

p, .icon-circle-cross {
  margin: 0;
  padding: 0;
}

.popup-success {
  background-color: #A8F1C6;
  border: none;
  border-left: 5px solid #198245;
}

.popup-success > .icon-circle-cross {
  color: #198245;
}

.popup-danger {
  background-color: #F6A7A3;
  border: none;
  border-left: 5px solid #8D1310;
}

.popup-danger > .icon-circle-cross {
  color: #8D1310;
}

.icon-circle-cross {
  cursor: pointer;
  font-size: 24px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
