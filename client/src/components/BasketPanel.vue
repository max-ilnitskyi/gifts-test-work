<template>
  <div class="basket-panel" :class="mainClasses">
    <router-link
      aria-label="Link to basket"
      title="Go to basket"
      class="basket-panel__link"
      :to="linkBasket.href"
    >
      <BasketIcon class="basket-panel__icon"></BasketIcon>
      <NumDisplay
        class="basket-panel__num"
        :currentNum="selectedNum"
      ></NumDisplay>
    </router-link>
  </div>
</template>

<script>
import BasketIcon from '@/components/BasketIcon';
import NumDisplay from '@/components/NumDisplay';

import { linkBasket } from '@/data';

export default {
  data: function() {
    return {
      linkBasket,
      selectedNum: 2 // mock, value must be injected from store
    };
  },
  computed: {
    mainClasses() {
      return {
        'basket-panel_filled': Boolean(this.selectedNum)
      };
    }
  },
  components: {
    BasketIcon,
    NumDisplay
  }
};
</script>

<style lang="scss">
.basket-panel {
  color: #fff;
  position: relative;
}

.basket-panel_filled {
  color: $action-color;
  position: relative;
}

.basket-panel__icon {
  fill: currentColor;
}

.basket-panel__link {
  display: block;
  width: 40px;
  height: 40px;

  color: currentColor;
}

.basket-panel__num {
  position: absolute;
  bottom: 0;
  right: 75%;

  font-size: 12px;
  background-color: $primary-color;
}
</style>
