<template>
  <v-toolbar
    flat>
    <v-btn
      flat
      to="/"
      nuxt
      icon
      class="
        teal--text
      "
    >
      <div class="home-button">
        <img 
          class="logo"
          src="~/assets/images/ClosedEnvelopeIcon.svg" 
          alt="Envelope email symbol">
      </div>
    </v-btn>

    <v-spacer/>
    <v-toolbar-items>
      <v-btn 
        flat
        to="/portfolio"
        nuxt
        class="
          teal--text 
        "
      >
        Projects
      </v-btn>

      <v-btn 
        flat
        to="/skills"
        nuxt
        class="
          teal--text 
        "
      >
        Skills
      </v-btn>

      <v-btn 
        flat
        to="/tech"
        nuxt
        class="
          teal--text 
        "
      >
        Tech
      </v-btn>

      <v-btn 
        flat
        to="/contact"
        nuxt
        class="
          teal--text 
        "
      >
        Contact
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>



<script>
export default {
  name: 'Toolbar',
  computed: {
    breakpoint() {
      return this.$vuetify.breakpoint.name;
    },
    toolbarHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'h-56px';
        case 'sm':
          return 'h-48px';
        case 'md':
          return 'h-64px';
        case 'lg':
          return 'h-64px';
        case 'xl':
          return 'h-64px';
      }
    }
  }
};
</script>

<style scoped>
.v-btn--active:before {
  background-color: transparent;
}
.v-btn--active .v-btn__content {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #009688;
}
.h-48px {
  height: 48px;
}
.h-56px {
  height: 56px;
}
.h-64px {
  height: 64px;
}

.home-button {
  height: 100%;
}

.logo {
  max-height: 100%;
}
</style>
