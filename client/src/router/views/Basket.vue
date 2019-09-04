<template>
  <div class="basket">
    <h1 class="basket__title">Products in your basket:</h1>
    <div class="basket__gifts-wrap">
      <GiftsListBasket class="basket__gifts-list"></GiftsListBasket>
    </div>
    <div class="basket__total-wrap">
      <Total></Total>
    </div>
  </div>
</template>

<script>
import GiftsListBasket from '@/components/GiftsListBasket';
import Total from '@/components/Total';

export default {
  components: {
    GiftsListBasket,
    Total
  }
};
</script>

<style lang="scss">
.basket__title {
  text-align: center;
}

.basket__gifts-wrap {
  margin-top: 20px;
}

.basket__total-wrap {
  margin-top: 20px;
}
</style>
