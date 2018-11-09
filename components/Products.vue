<template>
  <div>
    <p>I have built</p>
    <ul>
      <li
        v-for="(skill, index) in skills"
        :key="index"
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
