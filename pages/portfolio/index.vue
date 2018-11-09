<template>
  <div class="h-full flex flex-col items-center py-4 lg:py-8 bg-red-lightest">
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
