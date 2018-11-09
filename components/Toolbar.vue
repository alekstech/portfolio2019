<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-lighter h-16 fixed pin-t pin-x z-10 py-2 px-4">
    <div class="h-full flex items-center flex-no-shrink text-white mr-6">
      <nuxt-link 
        to="/" 
        class="h-full flex items-center lg:mt-0 text-black hover:pink-dark px-2 ">
        <img 
          class="fill-currenth-8 w-8"
          src="~/assets/images/ALogo.svg" 
          alt="A" >
      </nuxt-link>
    </div>
    <div 
      class="block lg:hidden">
      <button 
        class="flex items-center px-3 py-2 border rounded text-black border-teal-light hover:text-white hover:border-white focus:border-pink-dark focus:outline-none" 
        @click="toggleSidebar()">
        <svg 
          class="fill-current h-3 w-3" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="hidden lg:block">
      <nuxt-link 
        to="/portfolio" 
        class="no-underline block mt-4 lg:inline-block lg:mt-0 text-black hover:pink-dark mr-4">
        Projects
      </nuxt-link>
      <nuxt-link 
        to="/skills" 
        class="no-underline block mt-4 lg:inline-block lg:mt-0 text-black hover:pink-dark mr-4">
        Skills
      </nuxt-link>
      <nuxt-link 
        to="/tech" 
        class="no-underline block mt-4 lg:inline-block lg:mt-0 text-black hover:pink-dark mr-4">
        Tech
      </nuxt-link>
      <nuxt-link 
        to="/contact" 
        class="no-underline block mt-4 lg:inline-block lg:mt-0 text-black hover:pink-dark">
        Contact
      </nuxt-link>
    </div>
    <div 
      v-show="open" 
      class="lg:hidden absolute pin-t pin-x mt-16 bg-teal-lighter w-full flex justify-end pr-2">
      <div>
        <nuxt-link 
          to="/portfolio" 
          class="no-underline block mt-4 lg:inline-block lg:mt-0 text-black hover:pink-dark mr-4">
          Projects
        </nuxt-link>
        <nuxt-link 
          to="/skills" 
          class="no-underline block mt-4 lg:inline-block lg:mt-0 text-black hover:pink-dark mr-4">
          Skills
        </nuxt-link>
        <nuxt-link 
          to="/tech" 
          class="no-underline block mt-4 lg:inline-block lg:mt-0 text-black hover:pink-dark mr-4">
          Tech
        </nuxt-link>
        <nuxt-link 
          to="/contact" 
          class="no-underline block mt-4 mb-4 lg:mb-0 lg:inline-block lg:mt-0 text-black hover:pink-dark">
          Contact
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>



<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Toolbar',
  computed: {
    ...mapState({
      open: state => state.sidebar
    })
  },
  methods: {
    ...mapMutations({
      toggleSidebar: 'toggleSidebar'
    })
  }
};
</script>
