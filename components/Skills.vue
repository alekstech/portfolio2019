<template>
  <div class="px-2">
    <p class="text-sm font-semibold tracking-wide">things I can do</p>
    <ul class="list-reset mt-4 pl-1 ">
      <li
        v-for="(skill, index) in skills"
        :key="index"
        class="mt-2 pb-1 border-b border-grey"
      >
        {{ skill.header }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        header: 'develop UX flows based on custom APIs'
      },
      {
        header: 'plan routes from UX flow diagrams'
      },
      {
        header: 'style based on design specs'
      },
      {
        header: 'write consistent, documented code'
      },
      {
        header: 'keep track of issues'
      },
      {
        header: 'update staging, production builds'
      },
      {
        header: 'share status updates with team, manager'
      },
      {
        header: 'independently work to goals'
      },
      {
        header: 'learn and develop new skills'
      }
    ]
  })
};
</script>
