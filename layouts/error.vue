<template>
  <div class="min-h-full flex flex-col justify-center items-center">
    <p v-if="error.statusCode === 404">There's nothing here.</p>
    <p v-else>Something went wront, sorry.</p>
    <button
      class="bg-transparent hover:bg-teal-lighter text-xs text-black font-lighter hover:text-yellow-lightest mt-8 py-2 px-8 border border-teal-lighter rounded focus:border-pink-dark focus:outline-none"
      @click="$router.go(-1)"
    >
      back
    </button>
  </div>
</template>

<script>
export default {
  //eslint-disable-next-line
  props: ['error']
};
</script>
