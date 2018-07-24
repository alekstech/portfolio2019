<template>
  <v-container>
    <v-layout 
      row 
      wrap
      justify-space-around>
      <v-flex
        xs3
        column 
        class="tech-logo">
        <vue-logo />
      </v-flex>
      <v-flex
        d-inline-flex
        xs3
        class="tech-logo">
        <git-logo />
      </v-flex>
      <v-flex
        d-inline-flex
        xs3
        class="tech-logo">
        <webpack-logo />
      </v-flex>
      <v-flex
        d-inline-flex
        xs3
        class="tech-logo">
        <vuetify-logo />
      </v-flex>
      <v-flex
        d-inline-flex
        xs3
        class="tech-logo">
        <nuxt-logo />
      </v-flex>
      <v-flex
        d-inline-flex
        xs3
        class="tech-logo">
        <js-logo />
      </v-flex>
      <v-flex
        d-inline-flex
        xs3
        class="tech-logo">
        <css-logo />
      </v-flex>
    </v-layout>

  </v-container>
</template>
<script>
import VueLogo from '~/assets/images/VueLogo.svg'
import GitLogo from '~/assets/images/GitLogo.svg'
import JSLogo from '~/assets/images/JSLogo.svg'
import CSSLogo from '~/assets/images/CSSLogo.svg'
import WebpackLogo from '~/assets/images/WebpackLogo.svg'
import NuxtLogo from '~/assets/images/NuxtLogo.svg'
import VuetifyLogo from '~/assets/images/VuetifyLogo.svg'

export default {
  name: 'Skill',
  components: {
    'vue-logo': VueLogo,
    'git-logo': GitLogo,
    'js-logo': JSLogo,
    'css-logo': CSSLogo,
    'webpack-logo': WebpackLogo,
    'nuxt-logo': NuxtLogo,
    'vuetify-logo': VuetifyLogo
  }
}
</script>

<style>
.tech-logo {
  padding: 5px;
}
svg {
  width: 100%;
  max-width: 100%;
}
</style>

