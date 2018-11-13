<template>
  <main class="container h-full flex flex-col justify-center items-center bg-yellow-lightest">
    <p 
      aria-label="cheshch footnote one text-xl">
      Cześć <sup><small>*</small></sup>
    </p>
    <p class="mt-4 text-lg">My name is Aleks</p>
    <p class="mt-2 text-lg">I'm a web developer</p>
    <div class="mt-8 flex items-center">
      <img 
        src="~/assets/images/LocationPinIcon.svg" 
        alt="Location marker"
        class="fill-current h-4 w-4 mr-2">
      <p class="text-sm">Toronto</p>

    </div>
    <p
      class="mt-6 font-serif text-sm font-light"
      aria-label="legend"
    >
      <small>
        * Polish; 
        pron. /'cheshch/;
        <span class="italic">noun, interjection</span>: 
        <span>hello </span>
      </small>
    </p>
    <nuxt-link
      to="/portfolio"
      tag="button"
      class="bg-transparent hover:bg-teal-lighter text-xs text-black font-lighter hover:text-yellow-lightest mt-8 py-2 px-8 border border-teal-lighter rounded focus:border-pink-dark focus:outline-none"
    >
      projects
    </nuxt-link>
  </main>
</template>
