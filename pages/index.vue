<template>
  <div>
    <LoadingAnimation />
    <transition appear name="content">
      <div v-show="!isLoading">
        <HeroHeader />
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12">
              <div class="py-12"></div>
              <v-divider inset />
              <AboutMe />
            </v-col>
            <v-col cols="12">
              <v-divider inset />
              <div class="py-12"></div>
              <Skills />
            </v-col>
            <v-col cols="12">
              <v-divider inset />
              <div class="py-12"></div>
              <Works />
            </v-col>
            <v-divider inset />
            <div class="py-12"></div>
          </v-row>
        </v-container>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoadingAnimation from '~/components/LoadingAnimation.vue'
import HeroHeader from '~/components/HeroHeader.vue'
import AboutMe from '~/components/AboutMe.vue'
import Skills from '~/components/Skills.vue'
import Works from '~/components/Works.vue'

export default {
  components: {
    LoadingAnimation,
    HeroHeader,
    AboutMe,
    Skills,
    Works,
  },
  computed: {
    ...mapGetters({
      isLoading: 'opening/isLoading',
    }),
  },
  // extends: Bar,
  // data() {
  //   return {
  //     chartdata: {
  //       labels: ['January', 'February'],
  //       datasets: [
  //         {
  //           label: ['Data One'],
  //           backgroundColor: '#f87979',
  //           data: [40, 30],
  //         },
  //       ],
  //     },
  //   options: {
  //     responsive: true,
  //     maintainAspectRatio: false,
  //   },
  // }
  // },
  mounted() {
    // this.renderChart(chartdata, options)
  },
}
</script>

<style>
.content-enter,
.content-leave-to {
  opacity: 0;
}
.content-enter-active,
.content-leave-active {
  transition: opacity 3s;
}
</style>
