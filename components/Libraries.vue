<template>
  <list 
    :list="libraries"
    header="libraries"
  />
</template>

<script>
import List from '~/components/List';

import ExpressLogo from '~/assets/images/ExpressLogo.svg';
import JQueryLogo from '~/assets/images/JQueryLogo.svg';
import VueLogo from '~/assets/images/VueLogo.svg';
import ReactLogo from '~/assets/images/ReactLogo.svg';
import WebpackLogo from '~/assets/images/WebpackLogo.svg';
import NuxtLogo from '~/assets/images/NuxtLogo.svg';
import ElementUILogo from '~/assets/images/ElementUILogo.svg';
import VuetifyLogo from '~/assets/images/VuetifyLogo.svg';
import MaterialUILogo from '~/assets/images/MaterialUILogo.svg';
import AccessibilityLogo from '~/assets/images/AccessibilityLogo.svg';
import MongoDBLogo from '~/assets/images/MongoDBLogo.svg';
import ReduxLogo from '~/assets/images/ReduxLogo.svg';
import StencilLogo from '~/assets/images/StencilLogo.svg';
import SequelizeLogo from '~/assets/images/SequelizeLogo.svg';
import TailwindCSSLogo from '~/assets/images/TailwindCSSLogo.svg';
import BulmaLogo from '~/assets/images/BulmaLogo.svg';
import BootstrapLogo from '~/assets/images/BootstrapLogo.svg';
import GoogleChartsLogo from '~/assets/images/GoogleChartsLogo.svg';
import GoogleMapsLogo from '~/assets/images/GoogleMapsLogo.svg';
import ChartJSLogo from '~/assets/images/ChartJSLogo.svg';
import StyledComponentsLogo from '~/assets/images/StyledComponentsLogo.png';
import GraphQLLogo from '~/assets/images/GraphQLLogo.svg';
import ApolloGraphQLLogo from '~/assets/images/ApolloGraphQLLogo.svg';

export default {
  components: {
    list: List
  },
  data: () => ({
    libraries: [
      {
        name: 'Vue, Vuex, vue-router',
        image: VueLogo
      },
      {
        name: 'React, redux',
        image: ReactLogo
      },
      {
        name: 'Stencil',
        image: StencilLogo
      },
      {
        name: 'Vuetify',
        image: VuetifyLogo
      },
      {
        name: 'ElementUI',
        image: ElementUILogo
      },
      {
        name: 'MaterialUI',
        image: MaterialUILogo
      },
      {
        name: 'Hammer.js',
        initials: 'H'
      },
      {
        name: 'Nuxt',
        image: NuxtLogo
      },
      {
        name: 'Styled Components',
        image: StyledComponentsLogo
      },
      {
        name: 'TailwindCSS',
        image: TailwindCSSLogo
      },
      {
        name: 'Bulma',
        image: BulmaLogo
      },
      {
        name: 'Bootstrap',
        image: BootstrapLogo
      },
      {
        name: 'Google Maps',
        image: GoogleMapsLogo
      },
      {
        name: 'Google Charts',
        image: GoogleChartsLogo
      },
      {
        name: 'Chart.js',
        image: ChartJSLogo
      },
      {
        name: 'JQuery',
        image: JQueryLogo
      },
      {
        name: 'Express',
        image: ExpressLogo
      },
      {
        name: 'Apollo GraphQL',
        image: ApolloGraphQLLogo
      },
      {
        name: 'GraphQL',
        image: GraphQLLogo
      },
      {
        name: 'Sequelize',
        image: SequelizeLogo
      }
    ]
  })
};
</script>
