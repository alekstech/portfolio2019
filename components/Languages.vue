<template>
  <list 
    :list="languages" 
    header="languages" />
</template>

<script>
import List from '~/components/List';

import HTMLLogo from '~/assets/images/HTMLLogo.svg';
import CSSLogo from '~/assets/images/CSSLogo.svg';
import JavaScriptLogo from '~/assets/images/JavaScriptLogo.svg';
import TypeScriptLogo from '~/assets/images/TypeScriptLogo.svg';
import PostgreSQLLogo from '~/assets/images/PostgreSQLLogo.svg';
import PHPLogo from '~/assets/images/PHPLogo.svg';
import PythonLogo from '~/assets/images/PythonLogo.svg';

export default {
  components: {
    list: List
  },
  data: () => ({
    languages: [
      {
        name: 'HTML',
        image: HTMLLogo
      },
      {
        name: 'CSS',
        image: CSSLogo
      },
      {
        name: 'JavaScript',
        image: JavaScriptLogo
      },
      {
        name: 'TypeScript',
        image: TypeScriptLogo
      },
      {
        name: 'SQL',
        image: PostgreSQLLogo
      }
    ]
  })
};
</script>
