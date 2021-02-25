<template>
  <v-app>
    <Shutter />
    <v-app-bar
      :color="isClear ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'"
      fixed
      app
      flat
      style="
        hover: {
          cursor: pointer;
        }
      "
    >
      <v-app-bar-nav-icon />
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <nuxt />
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Shutter from '~/components/ShutterAnimation.vue'

export default {
  components: {
    Shutter,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      scrollY: 0,
      isShow: true,
      isClear: true,
      isMouseOvered: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
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
