<template>
  <div class="h-full flex flex-col items-center py-4 lg:py-8 bg-purple-lightest">
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
