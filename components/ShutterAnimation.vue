<template>
  <div class="shutter">
    <p style="color: white">hello</p>
    <div id="js-pink-bg" class="background pink-background">
      <div id="js-logo" class="pink-background__logo"></div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Logo from '~/components/animationModules/logo.js'
if (process.client) {
  const mojs = require('@mojs/core')
}

export default {
  components: {},
  data() {
    return {}
  },
  mounted() {
    const mainTimeline = new mojs.Timeline({
      speed: 1.72,
      precision: 0.01,
    })
      .add(new Logo())
      .play()
  },
}
</script>

<style>
.shutter {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: 'rgba(0,0,0,0)';
  z-index: 9998;
}
.shutter::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  width: 0;
  height: 1px;
}
#js-constrain {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 300px;
  margin: -150px 0px 0px -200px; /* 幅と高さの半分のネガティブマージン */
}

.el {
  background: cyan;
}

.background {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
}

.pink-background {
  z-index: 9996;
  background: deeppink;
}

.pink-background__logo {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 25px;
  width: 120px;
  z-index: 9997;

  /*outline: 1px solid cyan;*/
}
</style>
