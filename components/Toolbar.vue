<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <svg 
        class="fill-current h-8 w-8 mr-2" 
        width="54" 
        height="54" 
        viewBox="0 0 54 54" 
        xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg 
          class="fill-current h-3 w-3" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      
      <div class="text-sm lg:flex-grow">
        <a 
          href="/portfolio" 
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
          Projects
        </a>
        <a 
          href="/skills" 
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
          Skills
        </a>
        <a 
          href="/tech" 
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
          Tech
        </a>
        <a 
          href="/contact" 
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
          Contact
        </a>
      </div>
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

<style scoped>
.v-btn--active:before {
  background-color: transparent;
}
.v-btn--active .v-btn__content {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #009688;
}
.h-48px {
  height: 48px;
}
.h-56px {
  height: 56px;
}
.h-64px {
  height: 64px;
}

.home-button {
  height: 100%;
}

.max-width-100 {
  max-width: 100%;
}
</style>
