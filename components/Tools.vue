<template>
  <div class="width-100">
    <v-list>
      <v-subheader>
        tools
      </v-subheader>
      <v-list-tile
        v-for="(tool, index) in tools"
        :key="index"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ tool.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    tools: [
      {
        name: 'git'
      },
      {
        name: 'npm'
      },
      {
        name: 'node'
      },
      {
        name: 'Postman'
      },
      {
        name: 'Google Suite'
      },
      {
        name: 'Trello, JIRA'
      },
      {
        name: 'Slack, Teams'
      },
      {
        name: 'Windows, macOS, Ubuntu Desktop'
      }
    ]
  })
};
</script>
