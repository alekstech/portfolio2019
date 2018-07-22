<template>
  <div>
    <jumbotron />
    <skill-cards />
  </div>
</template>

<script>
import Jumbotron from '~/components/Jumbotron'
import SkillCards from '~/components/SkillCards'

export default {
  components: {
    'jumbotron': Jumbotron,
    'skill-cards': SkillCards
  }
}
</script>