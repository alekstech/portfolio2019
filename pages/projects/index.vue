<template>
  <main class="min-h-full flex flex-col items-center py-8 lg:py-12 px-4 lg:px-8 bg-red-lightest">
    <products />
  </main>
</template>

<script>
import Products from '~/components/Products';

export default {
  components: {
    products: Products
  },
  head() {
    return {
      title: 'projects | aleks.tech',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'projects',
          name: 'description',
          content: 'Projects, portfolio and products'
        }
      ]
    };
  }
};
</script>
