<template>
  <div class="width-100">
    <v-list>
      <v-subheader>
        languages
      </v-subheader>
      <v-list-tile
        v-for="(language, index) in languages"
        :key="index"
      >
        <v-list-tile-content>
          {{ language.name }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    languages: [
      {
        name: 'HTML'
      },
      {
        name: 'CSS (some SASS, some Stylus)'
      },
      {
        name: 'JavaScript'
      },
      {
        name: 'basic Typescript'
      },
      {
        name: 'basic SQL'
      },
      {
        name: 'passive exposure to PHP and Python'
      }
    ]
  })
};
</script>
