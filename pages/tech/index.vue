<template>
  <main class="min-h-full flex flex-col items-center py-8 lg:py-12 px-4 lg:px-8 bg-green-lightest">
    <div>
      <languages />
      <div class="pt-8 lg:pt-12 w-full"/>
      <libraries />
      <div class="pt-8 lg:pt-12 w-full"/>
      <deployment />
      <div class="pt-8 lg:pt-12 w-full"/>
      <tools />
    </div>
  </main>
</template>

<script>
import Languages from '~/components/Languages';
import Tools from '~/components/Tools';
import Libraries from '~/components/Libraries';
import Deployment from '~/components/Deployment';

export default {
  components: {
    languages: Languages,
    tools: Tools,
    libraries: Libraries,
    deployment: Deployment
  },
  head() {
    return {
      title: 'aleks.tech tech',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'tech',
          name: 'description',
          content: 'Technical skills, libraries, tools'
        }
      ]
    };
  }
};
</script>
