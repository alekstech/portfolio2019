<template>
  <div>
    <languages />
    <tools />
    <libraries />
  </div>
</template>

<script>
import Languages from '~/components/Languages'
import Tools from '~/components/Tools'
import Libraries from '~/components/Libraries'

export default {
  components: {
    'languages': Languages,
    'tools': Tools,
    'libraries': Libraries
  }
}
</script>
