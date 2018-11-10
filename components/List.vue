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
  }
};
</script>
