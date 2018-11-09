<template>
  <div class="container h-full flex flex-col justify-center items-center bg-yellow-lightest">
    <p 
      aria-label="cheshch footnote one text-xl">
      Cześć <sup><small>*</small></sup>
    </p>
    <p class="mt-4 text-lg">My name is Aleks</p>
    <p class="mt-2 text-lg">I'm a web developer</p>
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
      class="bg-transparent hover:bg-teal-lighter text-xs text-black font-lighter hover:text-yellow-lightest mt-8 py-2 px-8 border border-teal-lighter hover:border-transparent rounded focus:border-pink-dark focus:outline-none"
    >
      projects
    </nuxt-link>
  </div>
</template>
