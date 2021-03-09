<template>
  <div>
    <slot v-if="visible"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        console.log('まだみえない')
        const top = this.$el.getBoundingClientRect().top
        this.visible = top < window.innerHeight - 60
      } else {
        console.log('みえ')
      }
    },
  },
}
</script>
