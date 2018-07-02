<template>
  <v-toolbar app>

    <svg :src="require('~/assets/images/logo.svg')">

    <v-spacer />

    <v-toolbar-items class="hidden-xs-only">

      <v-btn 
        flat
        href="/blog"
        nuxt
      >
        Blog
      </v-btn>
      <v-btn 
        flat
        href="/portfolio"
        nuxt
      >
        Portfolio
      </v-btn>

    </v-toolbar-items>

  </v-toolbar>    
</template>



<script>
export default {
    name: 'Toolbar'
}
</script>