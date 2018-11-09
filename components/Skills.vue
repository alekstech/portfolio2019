<template>
  <div>
    <p>things I can do</p>
    <ul>
      <li
        v-for="(skill, index) in skills"
        :key="index"
      >
        {{ skill.header }}
      </li>
    </ul>
    <p>team work experience</p>
    <ul>
      <li
        v-for="(experience, index) in team"
        :key="index"
      >
        {{ experience.text }}
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
    ],
    team: [
      {
        text:
          'co-developed two backend developers who developed and mainained PHP APIs for a custom CMS'
      },
      {
        text: 'followed direction of two internal customer representatives'
      },
      {
        text: 'tiaged and fixed issues from two QA specialists'
      },
      {
        text: 'worked with one external enterprise customer team'
      },
      {
        text: 'reported to one manager'
      },
      {
        text: 'cooperated with two peer and junior team mates'
      },
      {
        text: 'attended several hackathon team mates'
      },
      {
        text: 'followed guidance of a volunteer project mentor'
      }
    ]
  })
};
</script>
