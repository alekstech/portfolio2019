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
        <img 
          src="~/assets/images/GithubLogo.svg" 
          alt="LinkedIn Logo">
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
        <img 
          src="~/assets/images/LinkedInLogo.svg" 
          alt="LinkedIn Logo">
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
        <img 
          src="~/assets/images/ClosedEnvelopeIcon.svg" 
          alt="Envelope email symbol">
      </v-btn>
    </v-flex>
  </v-container>
</template>
<script>
export default {
  name: 'Contact'
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
