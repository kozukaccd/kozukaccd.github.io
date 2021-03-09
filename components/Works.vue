<template>
  <section id="works">
    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">Works</h2>
      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>
      <v-row class="skill" justify="center">
        <Work
          v-for="workData in worksData"
          :key="workData.key"
          :title="workData.title"
          :description="workData.description"
          :link="workData.link"
          :image="workData.image"
        />
      </v-row>
    </v-container>
  </section>
</template>
<script>
import worksData from '@/assets/worksData.js'
import Work from './Work.vue'

export default {
  components: {
    Work,
  },
  data() {
    return {
      worksData,
    }
  },
}
</script>
<style scoped></style>
