<template>
  <p v-if="isListEmpty" class="gifts-basket__message">
    You have no gifts in your basket yet. Go to the
    <TextLink :to="hrefMain">main page</TextLink> to see our products.
  </p>

  <ul v-else class="gifts-basket">
    <li class="gifts-basket__item" v-for="gift in giftsList" :key="gift.id">
      <Gift :gift="gift" withRemoveButton="true"></Gift>
    </li>
  </ul>
</template>

<script>
import Gift from '@/components/Gift';
import TextLink from '@/components/TextLink';

import { linkMain } from '@/data';

export default {
  components: {
    Gift,
    TextLink
  },
  data: function() {
    return {
      hrefMain: linkMain.href
    };
  },
  computed: {
    giftsList() {
      return this.$store.getters['gifts/selectedGiftsList'];
    },
    isListEmpty() {
      return this.giftsList.length === 0;
    }
  }
};
</script>

<style lang="scss">
$list-indent: $standart-indent;

.gifts-basket__item {
  margin-top: $list-indent;

  &:first-child {
    margin-top: 0;
  }
}
.gifts-basket__message {
  font-size: 20px;
}
</style>
