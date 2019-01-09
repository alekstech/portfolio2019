<template>
  <main class="container h-full flex flex-col justify-center items-center bg-yellow-lightest">
    <div class="max-w-sm text-center">
      <p 
        aria-label="cheshch footnote one"
        class="text-3xl text-left"
      >
        Cześć<sup><small>*</small></sup>,
      </p>
      <p class="mt-4 text-xl">My name is Aleks</p>
      <p class="mt-2 text-xl">I'm a web developer</p>
      <div class="mt-8 flex justify-center items-center">
        <img 
          src="~/assets/images/LocationPinIcon.svg" 
          alt="Location marker"
          class="fill-current h-4 w-4 mr-2">
        <p class="text-base">Toronto</p>

      </div>
      <p class="mt-12 font-serif leading-normal text-xl text-left text-base">
        I know how to make an server-side rendered React web app and a GraphQL backend for it. But I couldn't solve an XOr gate problem without a reference manual. Come to think of it, I couldn't do most of my work without reference manuals.
      </p>
      <p
        class="mt-12 font-serif text-left text-base font-light"
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
        class="bg-transparent hover:bg-teal-lighter text-base text-black font-lighter hover:text-yellow-lightest mt-8 py-4 px-8 border border-teal-lighter rounded focus:border-pink-dark focus:outline-none"
      >
        projects
      </nuxt-link>
    </div>
  </main>
</template>
