<template>
  <v-container>
    <v-layout 
      column
      align-center
      >
      <h1 class="headline">Hi, my name is Aleks</h1>
      <h2 class="title">I'm a web developer</h2>
      <v-btn 
        flat
        to="/portfolio"
        nuxt
        outline
        class="
          mt-4
          mx-0
          teal
          teal--text
        "
      >
        View projects
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Jumbotron'
}
</script>
