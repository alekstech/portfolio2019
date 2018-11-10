<template>
  <div>
    <list 
      :list="products"
      header="things I have built"
    />
    <div class="flex items-center mt-12">
      <nuxt-link
        to="/contact"
        class="text-sm text-black hover:text-pink-dark p-1 border border-red-lightest rounded focus:border-pink-dark focus:outline-none"
      >
        Get in touch</nuxt-link>
      <p class="text-sm text-black font-lighter">to see examples.</p>
    </div>
  </div>
</template>

<script>
import List from '~/components/List';
export default {
  components: {
    list: List
  },
  data: () => ({
    products: [
      {
        name: 'a large custom CMS frontend, in multiple versions'
      },
      {
        name: 'brochure sites'
      },
      {
        name: 'a Find A Location Near You widget'
      },
      {
        name: 'an ordering widget'
      },
      {
        name: 'an accessibility (AODA) layer for a brochure site'
      },
      {
        name: 'a custom user interaction logger'
      },
      {
        name: 'internationalization layers'
      }
    ]
  })
};
</script>
