<template>
  <div 
    :class="{'h-screen' : open}"
    class="w-screen bg-transparent fixed pin-t pin-x z-10"
    @click="closeNavbar()"
  >
    <nav 
      class="flex items-center justify-between flex-wrap bg-teal-lighter h-16 fixed pin-t pin-x z-20 py-2 px-4"
      @click.stop>
      <div class="h-full flex items-center flex-no-shrink text-white mr-6">
        <nuxt-link 
          ref="home" 
          to="/"
          class="block h-full flex border rounded border-teal-lighter items-center lg:mt-0 text-black hover:text-yellow-lightest px-2 focus:border-pink-dark focus:outline-none">
          <img 
            class="fill-current h-8 w-8"
            src="~/assets/images/ALogo.svg" 
            alt="A" >
        </nuxt-link>
      </div>
      <div 
        class="block lg:hidden">
        <button 
          class="flex items-center px-3 py-2 text-black border rounded border-teal-light hover:text-yellow-lightest hover:border-yellow-lightest focus:border-pink-dark focus:outline-none" 
          @click="toggleNavbar()">
          <svg 
            class="fill-current h-3 w-3" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="hidden lg:block">
        <nuxt-link 
          to="/portfolio" 
          class="no-underline block mt-4 p-2 lg:inline-block lg:mt-0 text-black hover:text-pink-dark border rounded border-teal-lighter focus:border-pink-dark focus:outline-none mr-4">
          projects
        </nuxt-link>
        <nuxt-link 
          to="/skills" 
          class="no-underline block mt-4 p-2 lg:inline-block lg:mt-0 text-black hover:text-pink-dark border rounded border-teal-lighter focus:border-pink-dark focus:outline-none mr-4">
          skills
        </nuxt-link>
        <nuxt-link 
          to="/tech" 
          class="no-underline block mt-4 p-2 lg:inline-block lg:mt-0 text-black hover:text-pink-dark border rounded border-teal-lighter focus:border-pink-dark focus:outline-none mr-4">
          tech
        </nuxt-link>
        <nuxt-link 
          to="/notes" 
          class="no-underline block mt-4 p-2 lg:inline-block lg:mt-0 text-black hover:text-pink-dark border rounded border-teal-lighter focus:border-pink-dark focus:outline-none mr-4">
          notes
        </nuxt-link>
        <nuxt-link 
          to="/contact" 
          class="no-underline block mt-4 p-2 lg:inline-block lg:mt-0 text-black hover:text-pink-dark border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
          contact
        </nuxt-link>
      </div>
      <transition
        name="fade"
        mode="out-in"
      >
        <div 
          v-show="open" 
          class="lg:hidden absolute pin-t pin-x mt-16 bg-teal-lighter w-full flex flex-col items-center px-2">
          <nuxt-link 
            to="/portfolio"
            class="no-underline block mt-4 py-4 lg:py-0 px-8 lg:px-0 lg:inline-block lg:mt-0 text-black hover:text-pink-dark lg:mr-4 border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
            projects
          </nuxt-link>
          <nuxt-link 
            to="/skills" 
            class="no-underline block mt-4 py-4 lg:py-0 px-8 lg:px-0 lg:inline-block lg:mt-0 text-black hover:text-pink-dark lg:mr-4 border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
            skills
          </nuxt-link>
          <nuxt-link 
            to="/tech" 
            class="no-underline block mt-4 py-4 lg:py-0 px-8 lg:px-0 lg:inline-block lg:mt-0 text-black hover:text-pink-dark lg:mr-4 border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
            tech
          </nuxt-link>
          <nuxt-link 
            to="/notes" 
            class="no-underline block mt-4 py-4 lg:py-0 px-8 lg:px-0 lg:inline-block lg:mt-0 text-black hover:text-pink-dark lg:mr-4 border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
            notes
          </nuxt-link>
          <nuxt-link 
            to="/contact" 
            class="no-underline block mt-4 py-4 lg:py-0 px-8 lg:px-0 mb-4 lg:mb-0 lg:inline-block lg:mt-0 text-black hover:text-pink-dark border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
            contact
          </nuxt-link>
        </div>
      </transition>
    </nav>
  </div>
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
  watch: {
    '$route.path': function() {
      this.closeNavbar();
    }
  },
  methods: {
    ...mapMutations({
      toggleNavbar: 'toggleNavbar',
      closeNavbar: 'closeNavbar'
    })
  }
};
</script>
