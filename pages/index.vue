<template>
  <div>
    <jumbotron />
    <skills />
  </div>
</template>

<script>
import Jumbotron from '~/components/Jumbotron'
import Skills from '~/components/Skills'

export default {
  components: {
    'jumbotron': Jumbotron,
    'skills': Skills
  }
}
</script>