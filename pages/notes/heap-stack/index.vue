<template>
  <main class="min-h-full flex flex-col items-center py-8 lg:py-12 px-4 lg:px-8 bg-indigo-lightest">
    <div class="flex flex-col max-w-sm">
      <ul
        class="list-reset"
      >
        <li class="mt-5">
          <p class="mt-2"><span class="font-semibold">Stack</span> contains primitives only - values objects resolve to, not object declarations</p>
          <p class="mt-2"><span class="font-semibold">Heap</span> contains objects</p>
        </li>

        <li class="mt-5">
          <p class="mt-2"><span class="font-semibold">Stack</span> has frames. A stack frame contains references to OS, local variables, place for return value and a pointer to the next frame.</p>
          <p class="mt-2"><span class="font-semibold">Heap</span> contains all types of objects. In JavaScript V8 even some of the primitives are written to the heap.</p>
        </li>

        <li class="mt-5">
          <p class="mt-2"><span class="font-semibold">Stack</span> is quicker and cheaper to access, it's like RAM.</p>
          <p class="mt-2"><span class="font-semibold">Heap</span> is more expensive to access, it's like the hard drive.</p>
        </li>

        <li class="mt-5">
          <p class="mt-2">In languages without automatic garbage collection heap references need to be deallocated.</p>
        </li>
      </ul>
    </div>
  </main>
</template>
