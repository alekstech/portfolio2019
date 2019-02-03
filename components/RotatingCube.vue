<template>
  <div class="wrapper">
    <div 
      ref="prism" 
      class="rec-prism">
      <div 
        ref="front" 
        class="face face-front">
        <slot name="front">front</slot>
      </div>
      <div 
        ref="left" 
        class="face face-left">
        <slot name="left">left</slot>
      </div>
      <div 
        ref="top" 
        class="face face-top">
        <slot name="top">top</slot>
      </div>
      <div 
        ref="back"
        class="face face-back">
        <slot name="back">back</slot>
      </div>
      <div 
        ref="bottom" 
        class="face face-bottom">
        <slot name="bottom">bottom</slot>
      </div>
      <div 
        ref="right" 
        class="face face-right">
        <slot name="right">right</slot>
      </div>
    </div>
  </div>
</template>


<script>
/* Based on Nour Saud's work: https://codepen.io/nourabusoud/pen/BxJbjJ */
/* eslint-disable */
if (process.client) {
  const Hammer = require('hammerjs');
}
/* eslint-enable */

export default {
  data: () => ({
    x: 0,
    y: 0,
    z: 0,
    perspective: -100,
    hammer: null,
    faces: ['front', 'back', 'left', 'right', 'top', 'bottom'],
    front: {
      x: 0,
      y: 0,
      z: 0,
      left: 'right',
      right: 'left',
      up: 'top',
      down: 'bottom'
    },
    back: {
      x: 0,
      y: -180,
      z: 0,
      left: 'left',
      right: 'right',
      up: 'top',
      down: 'bottom'
    },
    left: {
      x: 0,
      y: 90,
      z: 0,
      left: 'front',
      right: 'back',
      up: 'top',
      down: 'bottom'
    },
    right: {
      x: 0,
      y: -90,
      z: 0,
      left: 'back',
      right: 'front',
      up: 'top',
      down: 'bottom'
    },
    top: {
      x: -90,
      y: 0,
      z: 0,
      left: 'right',
      right: 'left',
      up: 'back',
      down: 'front'
    },
    bottom: {
      x: 90,
      y: 0,
      z: 0,
      left: 'right',
      right: 'left',
      up: 'front',
      down: 'back'
    }
  }),
  computed: {
    transform() {
      return `
        translateZ(${this.perspective}px) 
        rotateX(${this.x}deg) 
        rotateY(${this.y}deg) 
        rotateZ(${this.z}deg)
      `;
    },
    face() {
      for (const face of this.faces) {
        if (this[face].x === this.x && this[face].y === this.y) {
          return this[face];
        }
      }
    }
  },
  watch: {
    transform(val) {
      this.$refs.prism.style.transform = val;
    }
  },
  mounted() {
    this.hammer = new Hammer(this.$refs.prism);
    this.hammer.on('pan', this.rotate);
  },
  methods: {
    rotate(ev) {
      if (ev.isFinal) {
        // pan up
        if (ev.angle > -135 && ev.angle < -45) {
          this.x += 90;
        }
        // pan down
        else if (ev.angle > 45 && ev.angle < 135) {
          this.x -= 90;
        }
        // pan left
        else if (Math.abs(ev.angle) > 135) {
          if (this.x === -90) {
            this.z -= 90;
          } else if (this.x === 90) {
            this.z -= 90;
          } else {
            this.y -= 90;
          }
        }
        // pan right
        else if (Math.abs(ev.angle) < 45) {
          if (this.x === -90) {
            this.z += 90;
          } else if (this.x === 90) {
            this.z -= 90;
          } else {
            this.y += 90;
          }
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped>
// Dimensions
$prism-height: 250px;
$prism-length: 250px;
$prism-depth: $prism-length;

$green: #07ad90;

* {
  box-sizing: border-box;
}

.wrapper {
  width: $prism-length;
  height: $prism-height;
  margin: 60px auto;
  perspective: 600px;
  text-align: left;
}

.rec-prism {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 0.5s ease-in;
}

.face {
  position: absolute;
  width: $prism-length;
  height: $prism-height;
  background: rgba(250, 250, 250, 0.1);
  border: 3px solid $green;
  border-radius: 3px;

  &-front {
    transform: rotateY(360deg) translateZ($prism-length/2);
  }
  &-top {
    height: $prism-depth;
    transform: rotateX(90deg) translateZ($prism-depth/2);
  }
  &-back {
    transform: rotateY(180deg) translateZ($prism-length/2);
  }
  &-right {
    transform: rotateY(90deg) translateZ($prism-length/2);
  }
  &-left {
    transform: rotateY(-90deg) translateZ($prism-length/2);
  }
  &-bottom {
    height: $prism-depth;
    transform: rotateX(-90deg) translateZ($prism-height - ($prism-depth/2));
  }
}
</style>
