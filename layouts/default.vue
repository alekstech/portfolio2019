<template>
  <div class="container min-h-screen h-screen pt-16 relative">
    <toolbar />
    <nuxt />
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
