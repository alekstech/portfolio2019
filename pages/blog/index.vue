<template>
  <div class="width-100">
    <post-card>
      <diffy-helman />
    </post-card>
  </div>
</template>

<script>
import DiffyHelman from '~/components/DiffyHelman'
import PostCard from '~/components/PostCard'
export default {
  components: {
    'post-card': PostCard,
    'diffy-helman': DiffyHelman
  }
}
</script>