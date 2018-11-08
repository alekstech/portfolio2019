<template>
  <v-container>

    <v-list>
      <v-subheader>
        I have built
      </v-subheader>
      <v-list-tile
        v-for="(skill, index) in skills"
        :key="index"
      >
        <v-list-tile-content>
          {{ skill.header }}
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </v-container>
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        header: 'a large custom CMS frontend, in multiple versions'
      },
      {
        header: 'brochure sites'
      },
      {
        header: 'a Find A Location Near You widget'
      },
      {
        header: 'a customer invoicing widget'
      },
      {
        header: 'an accessibility (AODA) layer for a brochure site'
      },
      {
        header: 'a custom user interaction logger'
      },
      {
        header: 'an internationalization layer in an Angular app'
      }
    ]
  })
};
</script>
