<template>
  <div class="relative h-full pt-16 overflow-y-hidden">
    <toolbar />
    <div
      class="h-full overflow-y-auto"
    >
      <transition
        name="fade"
        mode="out-in"
      >
        <nuxt />
      </transition>
    </div>
  </div>
</template>

<script>
import Toolbar from '~/components/Toolbar';
import { mapState } from 'vuex';

export default {
  name: 'DefaultLayout',
  components: {
    toolbar: Toolbar
  },
  computed: {
    ...mapState({
      navbar: state => state.navbar
    })
  }
};
</script>
