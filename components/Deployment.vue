<template>
  <list 
    :list="deployment"
    header="deployment"
  />
</template>

<script>
import List from '~/components/List';

import CloudfrontLogo from '~/assets/images/CloudfrontLogo.svg';
import CodeshipLogo from '~/assets/images/CodeshipLogo.svg';
import HerokuLogo from '~/assets/images/HerokuLogo.svg';
import NetlifyLogo from '~/assets/images/NetlifyLogo.svg';
import Route53Logo from '~/assets/images/Route53Logo.svg';
import S3Logo from '~/assets/images/S3Logo.svg';

export default {
  components: {
    list: List
  },
  data: () => ({
    deployment: [
      {
        name: 'Route 53',
        image: Route53Logo
      },
      {
        name: 'S3',
        image: S3Logo
      },
      {
        name: 'Clourfront',
        image: CloudfrontLogo
      },
      {
        name: 'Codeship',
        image: CodeshipLogo
      },
      {
        name: 'Heroku',
        image: HerokuLogo
      },
      {
        name: 'Netlify',
        image: NetlifyLogo
      }
    ]
  })
};
</script>
