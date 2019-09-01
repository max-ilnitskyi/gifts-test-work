<template>
  <nav class="NavMenu">
    <ul>
      <li v-for="link in links" :key="link.name">
        <router-link class="sss" :to="link.href">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { navMenuLinks } from '@/data';

export default {
  props: {
    msg: String
  },
  data: function() {
    return {
      links: navMenuLinks
    };
  }
};
</script>

<style lang="scss">
</style>
