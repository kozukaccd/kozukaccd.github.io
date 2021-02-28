<template>
  <div>
    <LoadingAnimation />
    <transition appear name="content">
      <div v-show="!isLoading">
        <v-parallax src="/image/top.png" height="900">
          <v-row align="end" justify="center" style="margin-bottom: 30px">
            <v-col cols="12">
              <div style="padding-left: 50px">
                <h1 class="display-3 font-weight-bold">
                  Toma Kozuka's portfolio
                </h1>
                <h4 class="subheading">
                  なんでも食べる！「超」雑食系エンジニア
                </h4>
              </div>
            </v-col>
          </v-row>
        </v-parallax>
        <v-main>
          <v-container>
            <v-row justify="center" align="center">
              <v-col cols="8" sm="6" md="4">
                <v-img src="/image/mainVisual.png"></v-img>
              </v-col>
              <v-col cols="8" sm="6" md="4">
                <v-card>
                  <v-card-title>Toma Kozuka</v-card-title>
                  <v-card-subtitle>1993/06/14 男</v-card-subtitle>
                  <v-card-text>
                    こんにちは！Kozukaと申します。プログラミングはもちろん、イラスト・デザイン・動画作成・作曲演奏などなど、興味を持ったものはとりあえず一通り習得してみるタイプの「超」雑食エンジニアです。
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <v-row justify="center" align="center">
              <v-col cols="8" sm="6" md="4">
                <v-img src="/image/mainVisual.png"></v-img>
              </v-col>
              <v-col cols="8" sm="6" md="4">
                <v-card>
                  <v-card-title>Toma Kozuka</v-card-title>
                  <v-card-subtitle>1993/06/14 男</v-card-subtitle>
                  <v-card-text>
                    こんにちは！Kozukaと申します。プログラミングはもちろん、イラスト・デザイン・動画作成・作曲演奏などなど、興味を持ったものはとりあえず一通り習得してみるタイプの「超」雑食エンジニアです。
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoadingAnimation from '~/components/LoadingAnimation.vue'
// import Logo from '~/components/Logo.vue'
// import { Bar } from 'vue-chartjs'

export default {
  components: {
    LoadingAnimation,
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
  transition: opacity 7s;
}
</style>
