<template>
  <v-row no-gutters>
    <v-img
      src="/image/top.png"
      :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      max-height="100vh"
    >
      <v-container fill-height>
        <v-row align="center" class="white--text mx-auto" justify="center">
          <v-col cols="12">
            <p class="font-weight-light white--text text-center text-h4">
              なんでも食べる！「超」雑食系エンジニア
            </p>

            <h1 class="font-weight-black text-h1 white--text text-center">
              Toma Kozuka's portfolio
            </h1>

            <v-btn
              class="align-self-end"
              fab
              outlined
              @click="$vuetify.goTo('#about-me')"
            >
              <v-icon>mdi-chevron-double-down</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-row>
</template>

<style scoped>
.page-title {
  padding-left: 50px;
}
</style>
