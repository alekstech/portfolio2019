<template>
  <main class="min-h-full flex justify-center py-8 lg:py-12 px-4 lg:px-8 bg-indigo-lightest">
    <div class="flex flex-col max-w-sm">
      <div class="flex flex-col items-center">
        <div>
          <div class="flex items-center">
            <input 
              id="select-all"
              v-model="allSelected"
              type="checkbox"
              class="mr-2 ">
            <label 
              for="select-all" 
              class="font-semibold tracking-tight">Select all</label>
          </div>
          <div
            v-for="(user, index) in users"
            :key="index"
            class="flex items-center mt-1">
            <input 
              :id="`user${index}`"
              v-model="user.selected"
              :aria-label="`${user.name}`"
              type="checkbox"
              class="mr-2">
            <label 
              :key="`label-${index}`"
              :for="`user${index}`">{{ user.name }}</label>  
          </div>
        </div>
      </div>
      <p class="mt-4 leading-loose">The easiest way to do a Select All checkbox is to <span class="font-mono">v-model</span> it on a <span class="font-mono">computed</span> property.</p>
      <p class="mt-2 leading-loose">The <span class="font-mono">computed</span> property is not a <span class="font-mono">function</span>, as usual. It's an object with a <span class="font-mono">set()</span> and a <span class="font-mono">get()</span>. The <span class="font-mono">set()</span> flips the values of all checkboxes. The <span class="font-mono">get()</span> returns a boolean saying if all checkboxes are selected: <span class="font-mono">!this.users.some(user => !user.selected)</span></p>
    </div>
  </main>

</template>


<script>
export default {
  data: () => ({
    users: [
      {
        name: 'Aaron',
        selected: true
      },
      {
        name: 'Abdullah',
        selected: true
      },
      {
        name: 'Anis',
        selected: true
      },
      {
        name: 'Anette',
        selected: false
      },
      {
        name: 'Asia',
        selected: false
      }
    ]
  }),
  computed: {
    allSelected: {
      set: function(selected) {
        this.users.forEach(user => {
          user.selected = selected;
        });
      },
      get() {
        return (
          this.users.length > 0 && !this.users.some(user => !user.selected)
        );
      }
    }
  }
};
</script>
