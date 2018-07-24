<template>
  <v-flex 
    :class="toolbarHeight"
    d-flex
    align-content-space-between>

    <v-flex
      d-inline-flex
      xs3>
      <nuxt-link   
        to="/"
        class="d-block">

        <a-logo />

      </nuxt-link>
    </v-flex>

    <v-flex
      d-inline-flex
      align-end>

      <v-btn 
        flat
        to="/portfolio"
        nuxt
        class="
          teal
          teal--text 
          text--lighten-5 
        "
      >
        Work
      </v-btn>
      <v-btn 
        flat
        to="/blog"
        nuxt
      >
        Snippets
      </v-btn>

    </v-flex>

  </v-flex>
</template>



<script>
import ALogo from '~/assets/images/ALogo.svg'
export default {
  name: 'Toolbar',
  components: {
    'a-logo': ALogo
  },
  computed: {
    breakpoint () {
      return this.$vuetify.breakpoint.name
    },
    toolbarHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'h-56px'
        case 'sm': return 'h-48px'
        case 'md': return 'h-64px'
        case 'lg': return 'h-64px'
        case 'xl': return 'h-64px'
      }
    }
  }
}
</script>

<style scoped>
.h-48px {
  height: 48px;
}
.h-56px {
  height: 56px;
}
.h-64px {
  height: 64px;
}

.logo {
  max-height: 100%;
  width: auto;
}
</style>
