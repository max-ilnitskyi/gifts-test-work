<template>
  <div class="main">
    <h1 class="main__title">Our product:</h1>
    <div class="main__gifts-wrap">
      <GiftsList class="main__gifts-list"></GiftsList>
    </div>
  </div>
</template>

<script>
import GiftsList from '@/components/GiftsList';

export default {
  components: {
    GiftsList
  }
};
</script>

<style lang="scss">
.main__title {
  text-align: center;
}

.main__gifts-wrap {
  margin-top: 20px;
}
</style>
