<template>
  <main class="min-h-full flex flex-col lg:flex-row justify-center items-center py-8 lg:py-12 px-4 lg:px-8 bg-orange-lightest">
    <contact />
  </main>
</template>

<script>
import Contact from '~/components/Contact';

export default {
  components: {
    contact: Contact
  },
  head() {
    return {
      title: 'aleks.tech contact',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'contact',
          name: 'description',
          content: 'Contact, email, LinkedIn'
        }
      ]
    };
  }
};
</script>
