<template>
  <div class="min-h-full flex flex-col items-center py-8 lg:py-12 px-4 lg:px-8 bg-indigo-lightest">
    <div class="flex flex-col items-center">
      <p class="text-lg tracking-wide font-semibold">The Diffy-Helman key exchange.</p>
      <p class="mt-4">Start with a number that both sides know. Call it the <span class="font-semibold tracking-wide">shared secret</span>.</p>
      <div class="flex mt-2">
        <input
          v-model="shared"
          class="py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-teal-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
      </div>
      <p class="mt-4">Then each side picks their own <span class="font-semibold tracking-wide">private secret</span> number.</p>
      <div class="flex w-full justify-center mt-2">
        <input 
          v-model="helman"
          class="py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-teal-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
        <div class="w-4"/>
        <input 
          v-model="diffy"
          class="py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-teal-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
      </div>
      <p class="mt-4">Multiply private numbers by the shared numbers.</p>
      <div class="flex w-full justify-center mt-2">
        <input 
          :value="helman * shared"
          disabled
          class="py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-indigo-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
        <div class="w-4"/>
        <input 
          :value="diffy * shared"
          disabled
          class="py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-indigo-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
      </div>
      <p class="mt-4">Exchange the products.</p>
      <div class="flex w-full justify-center mt-2">
        <input 
          :value="diffy * shared"
          disabled
          class="py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-indigo-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
        <div class="w-4"/>
        <input 
          :value="helman * shared"
          disabled
          class="py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-indigo-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
      </div>
      <p class="mt-4">Multiply by the private secret.</p>
      <div class="flex w-full justify-center mt-2">
        <input 
          :value="diffy * shared * helman"
          disabled
          class="py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-indigo-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
        <div class="w-4"/>
        <input 
          :value="helman * shared * diffy"
          disabled
          class="py-2 px-3 text-grey-darker text-center leading-tight appearance-none bg-indigo-lightest border rounded border-teal-lighter focus:border-pink-dark focus:outline-none">
      </div>
      <p class="mt-4">Your numbers match, allowing you to verify each other's identity.</p>
      <p class="leading-loose">And you never had to reveal your secret to one another.</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    shared: 1,
    diffy: 15,
    helman: 10
  })
};
</script>
