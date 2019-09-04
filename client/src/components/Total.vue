<template>
  <div v-show="showComponent" class="total">
    <div class="total__cost">Total cost: {{ totalCost }}$</div>
  </div>
</template>

<script>
export default {
  computed: {
    totalCost() {
      return this.$store.getters['gifts/totalCost'];
    },
    showComponent() {
      return this.totalCost !== 0;
    }
  }
};
</script>

<style>
.total {
  display: flex;
}

.total__cost {
  margin-left: auto;
}
</style>
