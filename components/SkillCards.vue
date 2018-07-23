<template>
  <v-container>
    <v-flex
      d-inline-flex
      xs1
      class="tech-logo">
      <vue-logo />
    </v-flex>
    <v-flex
      d-inline-flex
      xs1
      class="tech-logo">
      <git-logo />
    </v-flex>
    <v-flex
      d-inline-flex
      xs1
      class="tech-logo">
      <webpack-logo />
    </v-flex>
    <v-flex
      d-inline-flex
      xs1
      class="tech-logo">
      <vuetify-logo />
    </v-flex>
    <v-flex
      d-inline-flex
      xs1
      class="tech-logo">
      <nuxt-logo />
    </v-flex>
    <v-flex
      d-inline-flex
      xs1
      class="tech-logo">
      <js-logo />
    </v-flex>
    <v-flex
      d-inline-flex
      xs1
      class="tech-logo">
      <css-logo />
    </v-flex>
    <v-flex>
      <p>I built</p>
      <ul>
        <li>brochure sites, to match provided designs</li>
        <li>store finders</li>
        <li>large custom CMS admin panels</li>
        <li>complex frontend routers</li>
        <li>apps using ElementUI and Vuetify </li>
        <li>Vuex and Nuxt projects</li>
      </ul>
    </v-flex>

    <v-flex>
      <p>team work</p>
      <p>I have</p>
      <ul>
        <li>worked with backend developers on feature development</li>
        <li>helped junior colleagues get started on projects</li>
        <li>peer reviewed commits</li>
        <li>taken part in knowledge sharing sessions</li>
      </ul>
    </v-flex>

    <v-flex>
      <p>other</p>
      <p>I have also</p>
      <ul>
        <li>improved AODA compliance</li>
        <li>retro-fitted l18n into an Angular project</li>
        <li>built React projects</li>
        <li>played with Flutter, Docker, AWS</li>
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

