<template>
  <v-layout
    fill-height
    wrap
  >
    <v-flex
      d-flex 
      align-center
      xs4
      offset-xs4
      sm2
      offset-sm4
      lg1
      offset-lg4
    >
      <a
        class="display-block"
        href="https://www.linkedin.com/in/aleksander-sobieraj"
        target="_blank"
      >
        <img 
          src="~/assets/images/LinkedInLogo.svg" 
          alt="LinkedIn Logo">
      </a>
    </v-flex>
    <v-flex
      d-flex
      align-center
      xs4
      offset-xs4
      sm2
      offset-sm1
      lg1
      offset-lg2
    >
      <a
        class="display-block"
        href="mailto:contact@aleks.tech"
      >
        <img 
          src="~/assets/images/ClosedEnvelopeIcon.svg" 
          alt="Email envelope">
      </a>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'Contact'
};
</script>

<style>
.display-flex {
  display: flex;
}
.flex-direction-column {
  flex-direction: column;
}
.justify-content-center {
  justify-content: center;
}
.align-items-center {
  align-items: center;
}

.display-block {
  display: block;
}
</style>
