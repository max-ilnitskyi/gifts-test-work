<template>
  <ul class="gifts-list">
    <li class="gifts-list__item" v-for="gift in giftsList" :key="gift.id">
      <Gift :gift="gift"></Gift>
    </li>
  </ul>
</template>

<script>
import Gift from '@/components/Gift';

import { mockGiftsData } from '@/data';

export default {
  data: function() {
    // mock
    return {
      giftsList: mockGiftsData
    };
  },
  components: {
    Gift
  }
};
</script>

<style lang="scss">
$list-indent: $standart-indent;
$item-width: 250px;

.gifts-list {
  display: flex;
  flex-wrap: wrap;
  width: auto;
  margin-right: -$list-indent;
  margin-bottom: -$list-indent;
}

.gifts-list__item {
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  padding-right: $list-indent;
  padding-bottom: $list-indent;

  @media (min-width: 700px) {
    width: 50%;
  }
}
</style>
