<template>
  <nav class="nav-menu">
    <ul class="nav-menu__list">
      <li class="nav-menu__item" v-for="link in links" :key="link.name">
        <router-link class="nav-menu__link" :to="link.href">{{ link.name }}</router-link>
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
.nav-menu__list {
  display: flex;
}

.nav-menu__link {
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;

  font-size: 20px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  .nav-menu__item:first-child & {
    padding-left: 0px;
  }

  &:hover {
    color: $secondary-light-color;
  }
}
</style>
