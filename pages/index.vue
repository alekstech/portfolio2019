<template>
  <div>
    <jumbotron />
    <tech-logos />
    <skills />
  </div>
</template>

<script>
import Jumbotron from '~/components/Jumbotron'
import TechLogos from '~/components/TechLogos'
import Skills from '~/components/Skills'

export default {
  components: {
    'jumbotron': Jumbotron,
    'tech-logos': TechLogos,
    'skills': Skills
  }
}
</script>