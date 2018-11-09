<template>
  <div class="min-h-full flex flex-col lg:flex-row justify-center items-center py-8 lg:py-12 px-4 lg:px-8 bg-orange-lightest">
    <contact />
  </div>
</template>

<script>
import Contact from '~/components/Contact';

export default {
  components: {
    contact: Contact
  }
};
</script>
