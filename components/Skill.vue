<template>
  <v-col md="3" sm="12" xs="12">
    <v-card class="py-12 px-4" color="grey lighten-5" flat shaped>
      <div>
        <v-avatar size="88" tile>
          <img :src="'/image/devicons/' + icon + '.svg'" />
        </v-avatar>
      </div>

      <v-card-title
        class="justify-center font-weight-black text-uppercase"
        v-text="name"
      />
      <v-divider></v-divider>

      <div class="chart-wrapper">
        <Chart :datasets="datasets" />
      </div>
    </v-card>
  </v-col>
</template>

<script>
import 'devicon'
import Chart from '~/components/Chart.vue'
export default {
  components: {
    Chart,
  },
  props: {
    icon: { default: '', type: String },
    name: { default: '', type: String },
    text: { default: '', type: String },
    datasets: {
      default: () => {
        return ['a', 'a']
      },
      type: Array,
    },
  },
}
</script>
<style scoped>
.chart-wrapper {
  padding: 0 30px;
}
</style>
