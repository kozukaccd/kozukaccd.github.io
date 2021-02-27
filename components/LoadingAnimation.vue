<template>
  <transition appear name="loading">
    <div v-show="isLoading" id="lottie loading" ref="lottie"></div>
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
    }),
  },
  watch: {
    isLoading: (next, prev) => {
      if (!next && prev) {
        // ここに好きなアニメーションとかの処理
        console.log('初回アニメーションが発火してまーす')
      } else {
        console.log('aaa', next, prev)
      }
    },
    deep: true,
    immediate: true,
  },
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
      await console.log('loaded!!!!')
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
<style>
#loading {
  width: 100vw;
  height: 100vh;
  transition: all 1s;
  background-color: #0bd;
  position: fixed;
  top: 0;
  left: 0;
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
