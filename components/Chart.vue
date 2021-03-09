<script>
import { Doughnut } from 'vue-chartjs'
export default {
  extends: Doughnut,
  props: {
    datasets: {
      default: () => {
        return ['a', 'a']
      },
      type: Array,
    },
  },
  data() {
    return {
      datas: {
        datasets: this.datasets,
      },
      options: {
        responsive: true,
        tooltips: {
          enabled: false,
        },
        animation: {
          animationEasing: 'easeOutBounce',
          duration: 2000,
        },
      },
      borderColor: 'transparent',
    }
  },
  mounted() {
    this.renderChart(this.datas, this.options)
  },
}
</script>
