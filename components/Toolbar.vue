<template>
  <div 
    :class="{'h-screen' : open}"
    class="fixed pin-t z-10 w-screen flex flex-col bg-transparent"
    @click="closeNavbar()"
  >
    <nav
      class="w-full h-16 flex items-center justify-between flex-wrap bg-teal-lighter"
      @click.stop
    >
      <div class="h-full flex items-center flex-no-shrink text-white mr-6">
        <nuxt-link 
          ref="home" 
          to="/"
          class="block h-full flex px-4 py-2 border rounded border-teal-lighter items-center lg:mt-0 text-black hover:text-yellow-lightest focus:border-pink-dark focus:outline-none">
          <img 
            class="fill-current h-8 w-8"
            src="~/assets/images/ALogo.svg" 
            alt="A" >
        </nuxt-link>
      </div>
      <div 
        class="block lg:hidden">
        <button 
          class="flex items-center mx-4 px-3 py-2 text-black border rounded border-teal-light hover:text-yellow-lightest hover:border-yellow-lightest focus:border-pink-dark focus:outline-none" 
          aria-label="Toggle menu"
          @click="toggleNavbar()">
          <svg 
            class="fill-current h-3 w-3" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="hidden lg:block mx-2">
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
    </nav>
    <transition
      name="fade"
      mode="out-in"
    >
      <div 
        v-show="open" 
        class="lg:hidden w-full h-full max-h-screen flex flex-col"
      >
        <div class="flex flex-col items-center overflow-y-auto bg-teal-lighter ">
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
        <div class="h-0 flex-shrink flex-grow bg-teal-lighter opacity-50" />
      </div>
    </transition>
  </div>
</template>



<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'Toolbar',
  computed: {
    ...mapState({
      open: state => state.navbar
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
