<template>
  <p>
    Page <strong>{{ currentPath }}</strong> not found.
  </p>
</template>

<script>
export default {
  computed: {
    currentPath() {
      return this.$route.path;
    }
  }
};
</script>

<style></style>
