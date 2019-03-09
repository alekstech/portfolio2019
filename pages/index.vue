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
      <div class="mt-8 mb-6 flex justify-center items-center">
        <img 
          src="~/assets/images/LocationPinIcon.svg" 
          alt="Location marker"
          class="fill-current h-4 w-4 mr-2">
        <p class="text-base">Toronto</p>
      </div>
      <p class="mt-2 font-serif leading-normal text-xl text-left text-base">
        I'm a web developer. I work with React, Vue and their ecosystems. I care about a11y and delivering a satisfying user experience.
      </p>
      <p class="mt-2 font-serif leading-normal text-xl text-left text-base">
        Enjoy my little CloudFront-accelerated, lambda-augumented, pre-rendered, svg-illustrated little site.
        <img 
          src="~/assets/images/WinkyFace.svg" 
          alt="Location marker"
          class="fill-current h-4 w-4 mr-2">
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
        <!-- <svg 
          className="App-icon">
          <use xlink:href="/IconsSprite.svg#circle" />
        </svg> -->
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import RotatingText from '@/components/RotatingText.vue';
import IconSprite from '@/assets/images/IconsSprite.svg';
export default {
  components: {
    RotatingText,
    IconSprite
  }
};
</script>
