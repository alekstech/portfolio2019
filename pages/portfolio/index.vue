<template>
  <div class="min-h-full flex flex-col items-center py-8 lg:py-12 px-4 lg:px-8 bg-red-lightest">
    <products />
  </div>
</template>

<script>
import Products from '~/components/Products';

export default {
  components: {
    products: Products
  }
};
</script>
