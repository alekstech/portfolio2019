<template>
  <div class="width-100">
    <v-list>
      <v-subheader>
        libraries
      </v-subheader>
      <v-list-tile
        v-for="(library, index) in libraries"
        :key="index"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ library.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    libraries: [
      {
        name: 'Vue, React'
      },
      {
        name: 'Vuex, Redux'
      },
      {
        name: 'vue-router'
      },
      {
        name: 'Vuetify, ElementUI, Material-UI'
      },
      {
        name: 'Nuxt'
      },
      {
        name: 'Bulma, Bootstrap, Metronic'
      },
      {
        name: 'Google Maps'
      },
      {
        name: 'Google Charts. Charts.js'
      },
      {
        name: 'fetch, axios, $.ajax'
      },
      {
        name: 'JQuery'
      },
      {
        name: 'Express'
      },
      {
        name: 'Sequelize'
      }
    ]
  })
};
</script>
