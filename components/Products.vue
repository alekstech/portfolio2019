<template>
  <v-container>

      <v-list>
        <v-subheader>
          things I have built
        </v-subheader>
        <v-list-tile
          v-for="(skill, index) in skills"
          :key="index"
        >
          <v-list-tile-content>
            <v-list-tile-title>{{skill.header}}</v-list-tile-title>
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
        header: 'large custom CMS frontend, in multiple versions'
      },
      {
        header: 'brochure sites'
      },
      {
        header: 'Find A Location Near You widget'
      },
      {
        header: 'customer invoicing widget'
      },
      {
        header: 'accessibility (AODA) layer for a brochure site'
      },
      {
        header: 'custom user interaction logger'
      },
      {
        header: 'internationalization layer in an Angular app'
      }
    ]
  })
}
</script>