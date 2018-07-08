<template>
  <div>
    <jumbotron />
    <skill />
  </div>
</template>

<script>
import Jumbotron from '~/components/Jumbotron'
import Skill from '~/components/Skill'

export default {
  components: {
    'jumbotron': Jumbotron,
    'skill': Skill
  }
}
</script>