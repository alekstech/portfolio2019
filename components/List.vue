<template>
  <div>
    <p class="text-sm font-semibold tracking-wide">{{ header }}</p>
    <ul class="list-reset mt-4 pl-1 ">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="mt-2 pb-1 border-b border-grey flex items-center"
      >
        <img 
          v-if="item.image"
          :src="item.image"
          :alt="`${item.name} logo`"
          class="fill-current h-6 w-6 mr-2">
        <div
          v-else-if="item.initials"
          aria-hidden="true"
          class="w-6 h-6 flex justify-center items-center mr-2"
        >
          {{ item.initials }}
        </div>
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      default: () => '',
      required: true,
      type: String
    },
    list: {
      default: () => [],
      required: true,
      type: Array
    }
  },
  methods: {
    initials: function(string, length = 2) {
      let initials = [];
      try {
        const words = string.split(' ');
        for (let word of words) {
          if (initials.length < length) {
            initials.push(word.substring(0, 1));
          }
        }
        return initials.join(' ');
      } catch (e) {
        e = 'shh';
        return '';
      }
    }
  }
};
</script>
