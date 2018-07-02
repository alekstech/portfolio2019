<template>
  <v-jumbotron>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Hi, my name is Aleks</h3>

          <span class="subheading">I'm a front-end web developer</span>

          <v-divider class="my-3" />

          <v-btn
            class="mx-0"
            large
            flat
            href="/portfolio" 
            nuxt 
            ripple
          >
            Work
          </v-btn>

          <v-btn
            @click="$store.commit('increment')"
          >
            {{ $store.state.counter }}
          </v-btn>

        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
  name: 'Jumbotron'
}  
</script>
