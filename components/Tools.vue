<template>
  <div class="px-2">
    <p class="text-sm font-semibold tracking-wide">tools</p>
    <ul class="list-reset mt-4 pl-1 ">
      <li
        v-for="(tool, index) in tools"
        :key="index"
        class="mt-2 pb-1 border-b border-grey"
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
