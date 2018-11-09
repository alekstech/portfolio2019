<template>
  <div class="px-2">
    <p class="text-sm font-semibold tracking-wide">I have built</p>
    <ul class="list-reset mt-4 pl-1 ">
      <li
        v-for="(product, index) in products"
        :key="index"
        class="mt-2 pb-1 border-b border-grey"
      >
        {{ product.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        description: 'a large custom CMS frontend, in multiple versions'
      },
      {
        description: 'brochure sites'
      },
      {
        description: 'a Find A Location Near You widget'
      },
      {
        description: 'a customer invoicing widget'
      },
      {
        description: 'an accessibility (AODA) layer for a brochure site'
      },
      {
        description: 'a custom user interaction logger'
      },
      {
        description: 'an internationalization layer in an Angular app'
      }
    ]
  })
};
</script>
