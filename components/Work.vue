<template>
  <v-col md="3" xs="12">
    <v-card class="mx-auto" max-width="344">
      <v-img
        height="240px"
        :src="image"
        class="align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-card-title class="white--text mt-8">
          <h3 class="font-weight-bold mb-3 text-left">{{ title }}</h3>
        </v-card-title>
      </v-img>
      <v-card-actions>
        <v-btn color="orange" text @click="reveal = true"> Details </v-btn>

        <v-btn
          v-if="link !== ''"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          text
          color="teal"
        >
          Link
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
        >
          <v-card-text class="pb-0">
            <p
              class="text-h5 text-left font-weight-bold"
              style="padding-top: 12px"
            >
              {{ title }}
            </p>
            <v-divider> </v-divider>
            <div class="py-2"></div>
            <p class="body-1 text-cs-body-2 text-left">{{ description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text @click="reveal = false"> close </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    image: { default: '', type: String },
    title: { default: '', type: String },
    catch: { default: '', type: String },
    description: { default: '', type: String },
    link: { default: '', type: String },
    type: { default: '', type: String },
  },
  data: () => ({
    reveal: false,
  }),
}
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
