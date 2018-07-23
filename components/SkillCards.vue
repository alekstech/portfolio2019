<template>
  <v-container>
    <v-layout 
      row 
      wrap
      justify-space-around>
      <v-flex
        d-inline-flex
        xs3
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

    <v-flex
      xs12>
      <h1 class="display-1">products</h1>
      <ul>
        <li>brochure sites</li>
        <li>store finder with map</li>
        <li>multiple versions of a large custom CMS admin panel</li>
        <li>complex frontend routers</li>
        <li>ElementUI and Vuetify forms</li>
        <li>UI flows based on user stories and APIs</li>
        <li>AODA compliance improvements</li>
        <li>l18n retro-fit in Angular 5</li>
        <li>React sites</li>
        <li>Flutter Hello World</li>
      </ul>
    </v-flex>

    <v-flex
      xs12>
      <h1 class="display-1">team work</h1>
      <ul>
        <li>worked with backend developers on API development</li>
        <li>scoped and reviewed projects with colleagues</li>
        <li>reviewed builds and code</li>
        <li>took part in knowledge sharing sessions</li>
        <li>volunteered, attended tech events</li>
      </ul>
    </v-flex>

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
  height: 10vh;
  min-height: 50px;
  padding: 10px
}
</style>

