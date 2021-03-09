<template>
  <v-app>
    <CommonHeader />
    <nuxt />
    <v-footer v-show="!isLoading" :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} Toma Kozuka</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import CommonHeader from '~/components/CommonHeader.vue'
export default {
  components: {
    CommonHeader,
  },

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
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
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'opening/isLoading',
    }),
  },
}
</script>
<style scoped>
.v-application {
  background-color: #abccb2;
}
</style>
