import Vue from 'vue'
import colors from 'vuetify/es5/util/colors'

import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar
  },
  theme: {
    primary: colors.teal.base,
    secondary: colors.teal.darken2,
    accent: colors.purple.base,
    error: colors.deepOrange.darken2,
    warning: colors.orange.darken2,
    info: colors.blueGrey.darken2,
    success: colors.green.darken1
  }
})
