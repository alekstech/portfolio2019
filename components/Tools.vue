<template>
  <div>
    <p>tools</p>
    <ul>
      <li
        v-for="(tool, index) in tools"
        :key="index"
      >
        {{ tool.name }}
      </li>
    </ul>
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
