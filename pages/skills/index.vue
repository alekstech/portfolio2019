<template>
  <div class="min-h-full flex flex-col items-center py-8 lg:py-12 px-4 lg:px-8 bg-purple-lightest">
    <div>
      <skills />
      <div class="pt-8 lg:pt-12 w-full"/>
      <teamwork />
    </div>
  </div>
</template>
<script>
import Skills from '~/components/Skills';
import Teamwork from '~/components/Teamwork';
export default {
  components: {
    skills: Skills,
    teamwork: Teamwork
  }
};
</script>
