<template>
  <div class="min-h-full flex flex-col items-center py-4 lg:py-8 bg-orange-lightest">
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
