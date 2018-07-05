<template>
  <v-app class="app">

    <toolbar/>

    <v-container 
      :class="toolbarPadding"
      fill-height
    >

      <main class="width-100">
        <nuxt/>
      </main>

    </v-container>

  </v-app>
</template>

<script>
import Toolbar from '~/components/Toolbar'

export default {
  components: {
    'toolbar': Toolbar
  },
  computed: {
    toolbarPadding () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'pt-56px'
        case 'sm': return 'pt-48px'
        case 'md': return 'pt-64px'
        case 'lg': return 'pt-64px'
        case 'xl': return 'pt-64px'
      }
    }
  }
}
</script>

<style scoped>
.app::-webkit-scrollbar {
  width: 1em;
}
  
.app::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
  
.app::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.pt-48px {
  padding-top: 48px;
}
.pt-56px {
  padding-top: 56px;
}
.pt-64px {
  padding-top: 64px;
}
</style>
