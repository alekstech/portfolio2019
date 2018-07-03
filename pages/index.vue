<template>
  <jumbotron />
</template>

<script>
import Jumbotron from '~/components/Jumbotron'

export default {
  components: {
    'jumbotron': Jumbotron
  },
  watch: {
  '$vuetify.breakpoint.name': function () {
      console.log(this.$vuetify.breakpoint.name)
    }
  }
}
</script>