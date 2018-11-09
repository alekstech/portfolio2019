<template>
  <div class="container min-h-screen h-screen pt-16 relative">
    <toolbar />
    <transition
      name="fade"
      mode="out-in"
    >
      <nuxt />
    </transition>
  </div>
</template>

<script>
import Toolbar from '~/components/Toolbar';

export default {
  name: 'DefaultLayout',
  components: {
    toolbar: Toolbar
  }
};
</script>
