<template>
  <section id="about-me">
    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">Skills</h2>
      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>
      <v-row class="skill" justify="center">
        <Skill
          v-for="skillData in skillSetData"
          :key="skillData.key"
          :datasets="skillData.datasets"
          :name="skillData.name"
          :icon="skillData.icon"
        />
      </v-row>
    </v-container>
  </section>
</template>
<script>
import skillSetData from '@/assets/skillSetData.js'
import Skill from './Skill.vue'

export default {
  components: {
    Skill,
  },
  data() {
    return {
      skillSetData,
    }
  },
}
</script>
<style scoped></style>
