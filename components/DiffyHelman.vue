<template>
  <div class="diffy-helman__container">
    <v-text-field 
      v-model="diffy"
      solo />
    <v-text-field 
      v-model="helman"
      solo />
  </div>
</template>

<script>
export default {
  data: () => ({
    shared: 1,
    diffy: 15,
    helman: 10
  }),
  methods: {
    product (a, b) {
      return a * b
    }
  }
}
</script>

<style>
.diffy-helman__container {
  width: 100%;
  display: flex;
}
</style>
