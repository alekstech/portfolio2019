<template>
  <v-toolbar
    flat>
    <v-btn 
      nuxt
      icon
      flat
      to="/"
      class="
        teal--text 
      "
    >
      <a-logo />
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn 
        flat
        to="/portfolio"
        nuxt
        class="
          teal--text 
        "
      >
        Portfolio
      </v-btn>

      <v-btn 
        flat
        to="/contact"
        nuxt
        class="
          teal--text 
        "
      >
        Contact
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
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
.v-btn--active:before {
  background-color: transparent;
}
.v-btn--active .v-btn__content {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #009688;
}
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
