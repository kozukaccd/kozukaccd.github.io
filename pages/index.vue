<template>
  <div>
    <v-app-bar color="rgba(255, 255, 255, 0)" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
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
    <v-parallax src="/image/top.png" height="700">
      <v-row align="end" justify="center" style="margin-bottom: 30px">
        <v-col cols="12">
          <div style="padding-left: 50px">
            <h1 class="display-3 font-weight-bold">Toma Kozuka's portfolio</h1>
            <h4 class="subheading">なんでも食べる！「超」雑食系エンジニア</h4>
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
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo,
  },
}
</script>
