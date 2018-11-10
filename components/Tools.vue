<template>
  <list 
    :list="tools" 
    header="tools" />
</template>

<script>
import List from '~/components/List';

import GitLogo from '~/assets/images/GitLogo.svg';
import BitbucketLogo from '~/assets/images/BitbucketLogo.svg';
import GithubLogo from '~/assets/images/GithubLogo.svg';
import SourceTreeLogo from '~/assets/images/SourceTreeLogo.svg';
import NPMLogo from '~/assets/images/NPMLogo.svg';
import NodeJSLogo from '~/assets/images/NodeJSLogo.svg';
import PostmanLogo from '~/assets/images/PostmanLogo.svg';
import SketchLogo from '~/assets/images/SketchLogo.svg';
import GSuiteLogo from '~/assets/images/GSuiteLogo.svg';
import TrelloLogo from '~/assets/images/TrelloLogo.svg';
import JIRALogo from '~/assets/images/JIRALogo.svg';
import SlackLogo from '~/assets/images/SlackLogo.svg';
import TeamsLogo from '~/assets/images/TeamsLogo.svg';
import WindowsLogo from '~/assets/images/WindowsLogo.svg';
import MacOSLogo from '~/assets/images/MacOSLogo.svg';
import UbuntuLogo from '~/assets/images/UbuntuLogo.svg';

export default {
  components: {
    list: List
  },
  data: () => ({
    tools: [
      {
        name: 'git',
        image: GitLogo
      },
      {
        name: 'Bitbucket',
        image: BitbucketLogo
      },
      {
        name: 'SourceTree',
        image: SourceTreeLogo
      },
      {
        name: 'Github',
        image: GithubLogo
      },
      {
        name: 'npm',
        image: NPMLogo
      },
      {
        name: 'Node.js',
        image: NodeJSLogo
      },
      {
        name: 'Postman',
        image: PostmanLogo
      },
      {
        name: 'Sketch',
        image: SketchLogo
      },
      {
        name: 'G Suite',
        image: GSuiteLogo
      },
      {
        name: 'Trello',
        image: TrelloLogo
      },
      {
        name: 'JIRA',
        image: JIRALogo
      },
      {
        name: 'Slack',
        image: SlackLogo
      },
      {
        name: 'Teams',
        image: TeamsLogo
      },
      {
        name: 'Windows',
        image: WindowsLogo
      },
      {
        name: 'MacOS',
        image: MacOSLogo
      },
      {
        name: 'Ubuntu Desktop',
        image: UbuntuLogo
      }
    ]
  })
};
</script>
