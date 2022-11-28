<template>
  <div ref="content" class="content">
    <div>{{ window }}</div>
    <template v-for="(bubble, index) in bubbles" :key="index">
      <div class="bubble" @click="bubble.distance = -50000" :class="{'hide-bubble': bubble.distance < bubble.x, 'small': bubble.size === 0, 'large':  bubble.size === 1}" :style="{left: bubble.x  + 'px', bottom: bubble.y + 'px'}"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'BubbleGenerator',
  data () {
    return {
      bubbles: [],
      angle: 4.7,
      status: true
    }
  },
  mounted () {
    this.generateBubble()
    this.move()
  },
  methods: {
    generateBubble() {
      if (document.hidden) { this.status = false } else { this.status = true }
      if(this.status) {
        this.bubbles.push({
          y: 0,
          x: 0,
          vx: 0.2 * Math.cos(this.angle),
          vy: 0.2 *  -Math.sin(this.angle),
          distance:  Math.random() * (window.innerWidth - 900) + 800,
          size: Math.round(Math.random())
        })
        this.angle += Math.random() * (0.3 - 0.2) + 0.2
        if(this.angle > 6.25) {
          this.angle = 4.7
        }
      }
      setTimeout(() => {
        this.generateBubble()
      }, 500);
    },
    move () {
      this.bubbles.forEach(e => {
        e.x += e.vx
        e.y += e.vy
      })
      setTimeout(() => {
        this.move()
      }, 1);
    }
  }
}
</script>

<style scoped>
.content {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}

.bubble {
  position: absolute;
  background-color: #252E3E;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 1;
}

.large {
  width: 100px;
  height: 100px;
}

.small {
  width: 70px;
  height: 70px;
}

.hide-bubble {
  animation: hide .5s;
  animation-fill-mode: forwards;
}

@keyframes hide {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
    display: none;
  }
}
</style>