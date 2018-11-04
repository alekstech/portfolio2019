<template>
  <v-container
    fill-height
    justify-space-around
    reverse>
    <v-flex 
      d-inline-flex 
      xs3
      class="tech-logo">    
      <v-btn
        icon
        href="https://github.com/blurges"
        target="_blank"
      >
        <github-logo />
      </v-btn>
    </v-flex>
    <v-flex 
      d-inline-flex 
      xs3
      class="tech-logo">
      <v-btn
        icon
        href="https://www.linkedin.com/in/aleksander-sobieraj"
        target="_blank"
      >
        <linked-in-logo />
      </v-btn>
    </v-flex>
    <v-flex 
      d-inline-flex 
      xs3
      class="tech-logo"
    >
      <v-btn
        icon
        href="mailto:contact@aleks.tech"
      >
        <closed-envelope-icon />
      </v-btn>
    </v-flex>
  </v-container>
</template>
<script>
import VueLogo from '~/assets/images/VueLogo.svg';
import GitLogo from '~/assets/images/GitLogo.svg';
import JSLogo from '~/assets/images/JSLogo.svg';
import CSSLogo from '~/assets/images/CSSLogo.svg';
import WebpackLogo from '~/assets/images/WebpackLogo.svg';
import NuxtLogo from '~/assets/images/NuxtLogo.svg';
import ElementUILogo from '~/assets/images/ElementUILogo.svg';
import VuetifyLogo from '~/assets/images/VuetifyLogo.svg';
import AccessibilityLogo from '~/assets/images/AccessibilityLogo.svg';
import GithubLogo from '~/assets/images/GithubLogo.svg';
import LinkedInLogo from '~/assets/images/LinkedInLogo.svg';
import MongoDBLogo from '~/assets/images/MongoDBLogo.svg';
import NodeJSLogo from '~/assets/images/NodeJSLogo.svg';
import PostgreSQLLogo from '~/assets/images/PostgreSQLLogo.svg';
import ReduxLogo from '~/assets/images/ReduxLogo.svg';
import SequelizeLogo from '~/assets/images/SequelizeLogo.svg';
import ClosedEnvelopeIcon from '~/assets/images/ClosedEnvelopeIcon.svg';

export default {
  name: 'Skill',
  components: {
    'vue-logo': VueLogo,
    'git-logo': GitLogo,
    'js-logo': JSLogo,
    'css-logo': CSSLogo,
    'webpack-logo': WebpackLogo,
    'nuxt-logo': NuxtLogo,
    'vuetify-logo': VuetifyLogo,
    'element-ui-logo': ElementUILogo,
    'accessibility-logo': AccessibilityLogo,
    'github-logo': GithubLogo,
    'linked-in-logo': LinkedInLogo,
    'mongo-db-logo': MongoDBLogo,
    'node-js-logo': NodeJSLogo,
    'postgre-sql-logo': PostgreSQLLogo,
    'redux-logo': ReduxLogo,
    'sequelize-logo': SequelizeLogo,
    'closed-envelope-icon': ClosedEnvelopeIcon
  }
};
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
