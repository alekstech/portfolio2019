<template>
  <div>
    <p>languages</p>
    <ul>
      <li
        v-for="(language, index) in languages"
        :key="index"
      >
        {{ language.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    languages: [
      {
        name: 'HTML'
      },
      {
        name: 'CSS (some SASS, some Stylus)'
      },
      {
        name: 'JavaScript'
      },
      {
        name: 'basic Typescript'
      },
      {
        name: 'basic SQL'
      },
      {
        name: 'passive exposure to PHP and Python'
      }
    ]
  })
};
</script>
