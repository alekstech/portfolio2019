<template>
  <v-container>
    <v-flex>
      <vue-logo />
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
import VueLogo from '~/assets/images/Vue.js_Logo.svg'
export default {
  name: 'Skill',
  components: {
    'vue-logo': VueLogo
  }
}
</script>
