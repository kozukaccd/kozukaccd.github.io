<template>
  <transition appear name="loading">
    <div v-show="isLoading" class="wrapper">
      <div id="lottie" ref="lottie" class="loading-animation"></div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import lottie from 'lottie-web'
import animationData from '../assets/logoanimation.json'

export default {
  computed: {
    ...mapGetters({
      isLoading: 'opening/isLoading',
      isPlaying: 'opening/isPlaying',
      isContentShown: 'opening/isContentShown',
    }),
  },
  watch: {},
  mounted() {
    window.addEventListener('load', async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      lottie.loadAnimation({
        container: this.$refs.lottie, // document.getElementbyId('lottie') などでも OK
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData,
      })
      await lottie.play()
      await new Promise((resolve) => setTimeout(resolve, 4000))
      await this.endLoding()
    })
  },
  methods: {
    ...mapActions({
      endLoding: 'opening/endLoding',
    }),
  },
}
</script>
<style scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9998;
  background-color: white;
}
.loading-animation {
  width: 50vw;
  height: 50vh;
  transition: all 1s;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}
.loading-enter,
.loading-leave-to {
  opacity: 0;
}
.loading-enter-active,
.loading-leave-active {
  transition: opacity 1s;
}
</style>
