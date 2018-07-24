<template>
  <div>
    <jumbotron />
    <products />
    <tech-logos />
    <skills />
  </div>
</template>

<script>
import Jumbotron from '~/components/Jumbotron'
import TechLogos from '~/components/TechLogos'
import Products from '~/components/Products'
import Skills from '~/components/Skills'

export default {
  components: {
    'jumbotron': Jumbotron,
    'tech-logos': TechLogos,
    'products': Products,
    'skills': Skills
  }
}
</script>