<template>
  <div class="px-2">
    <p class="text-sm font-semibold tracking-wide">languages</p>
    <ul class="list-reset mt-4 pl-1 ">
      <li
        v-for="(language, index) in languages"
        :key="index"
        class="mt-2 pb-1 border-b border-grey"
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
        name: 'basic SQL'
      },
      {
        name: 'passive exposure to PHP and Python'
      }
    ]
  })
};
</script>
