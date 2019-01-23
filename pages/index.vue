<template>
  <main class="container min-h-full flex flex-col justify-center items-center bg-yellow-lightest subpixel-antialiased">
    <div class="lg:max-w-md md:max-w-sm p-8 text-center">
      <p 
        aria-label="cheshch footnote one"
        class="text-3xl text-left"
      >
        Cześć<sup><small>*</small></sup>,
      </p>
      <p class="mt-8 text-xl">My name is Aleks</p>
      <p class="mt-2 text-xl">I'm a web developer</p>
      <div class="mt-8 flex justify-center items-center">
        <img 
          src="~/assets/images/LocationPinIcon.svg" 
          alt="Location marker"
          class="fill-current h-4 w-4 mr-2">
        <p class="text-base">Toronto</p>

      </div>
      <p class="mt-8 font-serif leading-normal text-xl text-left text-base">
        I am front end web developer. I'm as familiar with the CSS cascade as I am with ES6. I can make a server-side rendered web app and a cloud backend for it. I know a few rendering libraries, have used a range of browser packages and have solid project skills. I like working on collaborative projects and keeping current with web technologies.
      </p>
      <p class="mt-2 font-serif leading-normal text-xl text-left text-base">
        I really like 
        <a
          class="text-black"
          target="_blank"
          href="https://monday.com"
        >monday</a>.
      </p>
      <p
        class="mt-8 font-serif text-left text-base font-light"
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
