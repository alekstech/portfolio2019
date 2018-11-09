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
        header: 'plan routes, state and components from UX flow diagrams'
      },
      {
        header: 'style to design specs'
      },
      {
        header: 'write consistent, documented code'
      },
      {
        header: 'keep track of multiple issues and communication channels'
      },
      {
        header: 'update staging, production builds'
      },
      {
        header: 'keep stakeholders informed and flag roadblocks'
      },
      {
        header: 'independently work to goals'
      },
      {
        header: 'learn and acquire new skills'
      }
    ]
  })
};
</script>
