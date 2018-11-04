<template>
  <v-flex xs12>
    <v-flex 
      xs6 
      offset-xs3>
      <v-text-field
        v-model="shared"
        solo />
    </v-flex>
    <v-container>
      <v-flex 
        d-inline-flex
        xs6>
        <v-text-field 
          v-model="diffy"
          solo />
      </v-flex>
      <v-flex 
        d-inline-flex
        xs6>
        <v-text-field 
          v-model="helman"
          solo />
      </v-flex>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    shared: 1,
    diffy: 15,
    helman: 10
  }),
  methods: {
    product(a, b) {
      return a * b;
    }
  }
};
</script>

<style scoped>
</style>
