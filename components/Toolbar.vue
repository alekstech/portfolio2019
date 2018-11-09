<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-lighter h-16 absolute pin-t pin-x z-10 py-2 px-4">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <a 
        href="/" 
        class="block mt-4 lg:inline-block lg:mt-0 text-black hover:pink-dark mr-4">
        <img 
          class="fill-current h-8 w-8"
          src="~/assets/images/ALogo.svg" 
          alt="A" >
      </a>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-black border-teal-light hover:text-white hover:border-white">
        <svg 
          class="fill-current h-3 w-3" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block lg:flex lg:items-center lg:w-auto">
      <a 
        href="/portfolio" 
        class="no-underline block mt-4 lg:inline-block lg:mt-0 text-black hover:pink-dark mr-4">
        Projects
      </a>
      <a 
        href="/skills" 
        class="no-underline block mt-4 lg:inline-block lg:mt-0 text-black hover:pink-dark mr-4">
        Skills
      </a>
      <a 
        href="/tech" 
        class="no-underline block mt-4 lg:inline-block lg:mt-0 text-black hover:pink-dark mr-4">
        Tech
      </a>
      <a 
        href="/contact" 
        class="no-underline block mt-4 lg:inline-block lg:mt-0 text-black hover:pink-dark">
        Contact
      </a>
    </div>
  </nav>
</template>



<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Toolbar',
  methods: {
    ...mapMutations({
      toggleSidebar: 'toggleSidebar'
    })
  }
};
</script>
