<template>
  <v-toolbar>

    <nuxt-link 
      to="/"
      class="logo-container" 
    >

      <svg
        class="logo pa-1"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        viewBox="0 0 285.946 302.327"
        preserveAspectRatio="xMinYMid meet"
      >
        <g
          stroke="#00796b"
          stroke-width="3.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        >
          <path
            d="M1.902 280.428L131.679 2.118M42.576 300.428l32.641-70M75.217 230.428h137.925M213.142 230.428l32.641 70M245.783 300.428h26.348M59.543 210.428l-32.641 70M26.902 280.428h-25M42.576 300.428l-15.674-20M42.576 300.428h-25M17.576 300.428l-15.674-20M156.68 55.732L93.87 190.428M156.782 1.9L68.869 190.427M131.577 1.9h25.205M284.06 274.847L156.782 1.9M284.06 274.847l-11.93 25.581M59.543 210.428h144.273M203.816 210.428l-59.637-127.89M194.49 190.428H68.87M156.68 55.732l115.45 244.696"
          />
        </g>
      </svg>

    </nuxt-link>

    <v-spacer />

    <v-toolbar-side-icon class="hidden-sm-and-up" />

    <v-toolbar-items class="hidden-xs-only">

      <v-btn 
        flat
        href="/blog"
        nuxt
      >
        Blog
      </v-btn>
      <v-btn 
        flat
        href="/portfolio"
        nuxt
      >
        Portfolio
      </v-btn>

    </v-toolbar-items>

  </v-toolbar>    

</template>



<script>
export default {
    name: 'Toolbar'
}
</script>

<style scoped>
.logo-container {
  height: 100%;
  display: flex;
  justify-content: flex-start;
}

.logo {
  max-width: 100%;
  max-height: 100%;
}
</style>
