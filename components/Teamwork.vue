<template>
  <div class="px-2">
    <p class="text-sm font-semibold tracking-wide">team work experience</p>
    <ul class="list-reset mt-4 pl-1 ">
      <li
        v-for="(experience, index) in team"
        :key="index"
        class="mt-2 pb-1 border-b border-grey"
      >
        {{ experience.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    team: [
      {
        text: 'co-developed with two backend PHP and Python developers'
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
