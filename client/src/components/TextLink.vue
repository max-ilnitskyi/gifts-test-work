<template>
  <router-link class="text-link" :to="to"><slot></slot></router-link>
</template>

<script>
export default {
  props: ['to']
};
</script>

<style lang="scss">
.text-link {
  color: $secondary-color;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
