<template>
  <v-app dark>
    <toolbar />
    <v-content>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="sidebar"
      right
      temporary
      fixed
    >
      <v-list>
        <v-list-tile href="/portfolio">
          <v-list-tile-title>Projects</v-list-tile-title>
        </v-list-tile>
        <v-list-tile href="/skills">
          <v-list-tile-title>Skills</v-list-tile-title>
        </v-list-tile>
        <v-list-tile href="/tech">
          <v-list-tile-title>Tech</v-list-tile-title>
        </v-list-tile>
        <v-list-tile href="/contact">
          <v-list-tile-title>Contact</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import Toolbar from '~/components/Toolbar';

export default {
  name: 'DefaultLayout',
  components: {
    toolbar: Toolbar
  },
  data() {
    return {
      clipped: false,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    };
  },
  computed: {
    sidebar: {
      get() {
        return this.$store.state.sidebar;
      },
      set(val) {
        this.$store.commit('toggleSidebar', val);
      }
    }
  }
};
</script>
