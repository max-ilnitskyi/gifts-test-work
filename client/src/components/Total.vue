<template>
  <div v-show="showComponent" class="total">
    <Button @click="onBasketClear">Clear basket</Button>
    <div class="total__cost">Total cost: {{ totalCost }}$</div>
  </div>
</template>

<script>
import Button from '@/components/Button';

export default {
  components: {
    Button
  },
  computed: {
    totalCost() {
      return this.$store.getters['gifts/totalCost'];
    },
    showComponent() {
      return this.totalCost !== 0;
    }
  },
  methods: {
    onBasketClear() {
      this.$store.commit('gifts/clearSelected');
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
