<template>
  <div class="px-2">
    <p class="text-sm font-semibold tracking-wide">libraries</p>
    <ul class="list-reset mt-4 pl-1 ">
      <li
        v-for="(library, index) in libraries"
        :key="index"
        class="mt-2 pb-1 border-b border-grey"
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
        name: 'TailwindCSS, Bulma, Bootstrap, Metronic'
      },
      {
        name: 'Google Maps'
      },
      {
        name: 'Google Charts, Charts.js'
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
