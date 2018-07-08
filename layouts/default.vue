<template>
  <v-app 
    class="app"
  >

    <toolbar/>

    <v-container >

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
</style>
