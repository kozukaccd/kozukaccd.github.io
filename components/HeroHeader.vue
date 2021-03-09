<template>
  <!-- <content></content>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <div class="page-title">
          <h4 class="subheading">なんでも食べる！「超」雑食系エンジニア</h4>
          <h1 class="display-3 font-weight-bold">Toma Kozuka's portfolio</h1>
        </div>
      </v-col>
    </v-row> -->
  <v-row no-gutters>
    <v-img
      src="/image/top.png"
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      max-height="100vh"
    >
      <v-theme-provider dark>
        <v-container fill-height>
          <v-row align="center" class="white--text mx-auto" justify="center">
            <v-col class="white--text text-center" cols="12" tag="h1">
              <span class="font-weight-light">
                なんでも食べる！「超」雑食系エンジニア
              </span>

              <br />

              <h1 class="font-weight-black">Toma Kozuka's portfolio</h1>
            </v-col>

            <v-btn
              class="align-self-end"
              fab
              outlined
              @click="$vuetify.goTo('#about-me')"
            >
              <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-theme-provider>
    </v-img>
  </v-row>
</template>

<style scoped>
.page-title {
  padding-left: 50px;
}
</style>
