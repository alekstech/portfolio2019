<template>
  <v-container>
    <v-layout 
      row 
      wrap
      justify-space-around>
      <v-flex
        xs2
        column 
        class="tech-logo">
        <vue-logo />
      </v-flex>
      <v-flex
        d-inline-flex
        xs2
        class="tech-logo">
        <git-logo />
      </v-flex>
      <v-flex
        d-inline-flex
        xs2
        class="tech-logo">
        <vuetify-logo />
      </v-flex>
      <v-flex
        d-inline-flex
        xs2
        class="tech-logo">
        <nuxt-logo />
      </v-flex>
      <v-flex
        d-inline-flex
        xs2
        class="tech-logo">
        <js-logo />
      </v-flex>
      <v-flex
        d-inline-flex
        xs2
        class="tech-logo">
        <css-logo />
      </v-flex>
      <v-flex
        d-inline-flex
        xs2 hidden-xs-only
        class="tech-logo">
        <webpack-logo />
      </v-flex>
      <v-flex 
        d-inline-flex 
        xs2 
        hidden-xs-only class="tech-logo">
        <accessibility-logo />
      </v-flex>
      <v-flex 
        d-inline-flex 
        xs2 
        hidden-xs-only class="tech-logo">
        <element-ui-logo /></v-flex>
      <v-flex 
        d-inline-flex 
        xs2 
        hidden-xs-only class="tech-logo">
        <github-logo />
      </v-flex>
      <v-flex 
        d-inline-flex 
        xs2 
        hidden-xs-only class="tech-logo">
        <linked-in-logo />
      </v-flex>
      <v-flex 
        d-inline-flex 
        xs2 
        hidden-xs-only class="tech-logo">
        <mongo-db-logo /></v-flex>
      <v-flex 
        d-inline-flex 
        xs2 
        hidden-xs-only class="tech-logo">
        <node-js-logo /></v-flex>
      <v-flex 
        d-inline-flex 
        xs2 
        hidden-xs-only class="tech-logo">
        <postgre-sql-logo /></v-flex>
      <v-flex 
        d-inline-flex 
        xs2 
        hidden-xs-only class="tech-logo">
        <redux-logo />
      </v-flex>
      <v-flex 
        d-inline-flex 
        xs2 
        hidden-xs-only class="tech-logo">
        <sequelize-logo />
      </v-flex>
      <v-flex 
        d-inline-flex 
        xs2 
        hidden-xs-only class="tech-logo">
        <bitbucket-logo />
      </v-flex>
      <v-flex 
        d-inline-flex 
        xs2 
        hidden-xs-only class="tech-logo">
        <trello-logo />
      </v-flex>
      <v-flex 
        d-inline-flex 
        xs2 
        hidden-xs-only class="tech-logo">
        <source-tree-logo />
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
import ElementUILogo from '~/assets/images/ElementUILogo.svg'
import VuetifyLogo from '~/assets/images/VuetifyLogo.svg'
import AccessibilityLogo from '~/assets/images/AccessibilityLogo.svg'
import GithubLogo from '~/assets/images/GithubLogo.svg'
import LinkedInLogo from '~/assets/images/LinkedInLogo.svg'
import MongoDBLogo from '~/assets/images/MongoDBLogo.svg'
import NodeJSLogo from '~/assets/images/NodeJSLogo.svg'
import PostgreSQLLogo from '~/assets/images/PostgreSQLLogo.svg'
import ReduxLogo from '~/assets/images/ReduxLogo.svg'
import SequelizeLogo from '~/assets/images/SequelizeLogo.svg'
import BitbucketLogo from '~/assets/images/BitbucketLogo.svg'
import SourceTreeLogo from '~/assets/images/SourceTreeLogo.svg'
import TrelloLogo from '~/assets/images/TrelloLogo.svg'

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
    'bitbucket-logo': BitbucketLogo,
    'source-tree-logo': SourceTreeLogo,
    'trello-logo': TrelloLogo
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

