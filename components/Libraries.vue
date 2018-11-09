<template>
  <div>
    <p>libraries</p>
    <ul>
      <li
        v-for="(library, index) in libraries"
        :key="index"
      >
        {{ library.name }}
      </li>
    </ul>

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
