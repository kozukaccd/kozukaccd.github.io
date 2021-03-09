<template>
  <div>
    <transition name="loading-header">
      <v-app-bar
        :color="isClear ? 'rgba(255, 255, 255, 0)' : 'rgba(230, 240, 232, 1)'"
        fixed
        app
        flat
        style="
          hover: {
            cursor: pointer;
          }
        "
      >
        <v-icon color="black" style="margin-right: 16px">icon-logoOnly</v-icon>
        <v-toolbar-title>Toma Kozuka's Portfolio</v-toolbar-title>
        <v-spacer />
      </v-app-bar>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import '@/assets/icomoon/style.css'

export default {
  components: {},

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      scrollY: 0,
      isShow: true,
      isClear: true,
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'opening/isLoading',
    }),
  },
  watch: {
    // 上にスクロールした時に表示
    scrollY(newValue, oldValue) {
      this.$set(this, 'isShow', newValue < oldValue)
      this.$set(this, 'isClear', newValue === 0)
    },
  },
  mounted() {
    // スクロールイベントを取得
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('load', () => {
      this.onScroll()
    })
  },
  methods: {
    // スクロール値の取得
    onScroll() {
      this.$set(this, 'scrollY', window.pageYOffset)
    },
  },
}
</script>

<style>
.loading-header-enter,
.loading-header-leave-to {
  opacity: 0;
}
.loading-header-enter-active,
.loading-header-leave-active {
  transition: opacity 1s;
}
</style>
