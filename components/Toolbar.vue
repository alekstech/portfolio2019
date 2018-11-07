<template>
  <v-toolbar
    flat>
    <v-btn
      flat
      to="/"
      nuxt
      icon
      large
      class="
        teal--text
      "
    >
      <img 
        class="max-width-100"
        src="~/assets/images/ALogo.svg" 
        alt="Stylized letter A">
    </v-btn>

    <v-spacer/>
    <v-toolbar-items
      v-show="$vuetify.breakpoint.smAndDown"
    >
      <v-btn 
        flat
        icon
        class="
          teal--text 
        "
        @click.stop.prevent="toggleSidebar(true)"
      >
        <v-icon>
          menu
        </v-icon>
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items
      class="hidden-sm-and-down"
    >
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
import { mapMutations } from 'vuex';

export default {
  name: 'Toolbar',
  methods: {
    ...mapMutations({
      toggleSidebar: 'toggleSidebar'
    })
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

.max-width-100 {
  max-width: 100%;
}
</style>
