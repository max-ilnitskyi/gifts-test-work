// For nominal display, the width of the wrapper should be greater than 200px //
// min height must be 200px

<template>
  <article class="gift">
    <div class="gift__left-wrap">
      <div class="gift__img-wrap">
        <img class="gift__img" :src="gift.img" :alt="imgAlt" />
      </div>
      <div class="gift__price-wrap">
        <div>Price:</div>
        <div class="gift__price-amount">{{ properPrice }}</div>
      </div>
      <div class="gift__buy-wrap">
        <Button
          class="gift__buy-button action"
          type="button"
          v-if="showButton"
          @click="onBuyClick"
        >
          Add
        </Button>
        <NumInput
          class="gift__buy-input"
          :currentNum="amount"
          @numChange="onAmountChange"
          v-else
        />
      </div>
    </div>

    <div class="gift__right-wrap">
      <h2 class="gift__name">{{ gift.name }}</h2>
      <p class="gift__description">
        <span>{{ gift.description }}</span>
      </p>
    </div>

    <button
      v-show="showRemoveButton"
      class="gift__remove-button"
      type="button"
      @click="onRemoveClick"
      aria-label="Remove from basket completely"
      title="Remove from basket completely"
    >
      x
    </button>
  </article>
</template>

<script>
import NumInput from '@/components/NumInput';
import Button from '@/components/Button';

export default {
  props: ['gift', 'withRemoveButton'],
  components: { NumInput, Button },
  computed: {
    imgAlt() {
      return `Image of ${this.gift.name}`;
    },
    properPrice() {
      return this.gift.price + '$';
    },
    showButton() {
      return this.amount === 0;
    },
    // Takes current selected amount from store
    amount() {
      const amountById = this.$store.state.gifts.selectedGiftsAmountById;
      const currentId = this.gift.id;

      if (amountById[currentId] === undefined) {
        return 0;
      }

      return amountById[currentId];
    },
    showRemoveButton() {
      return this.amount > 0 && this.withRemoveButton;
    }
  },
  methods: {
    onBuyClick() {
      // With click on button can be added only one item
      if (this.amount >= 1) return;
      this.setAmount(1);
    },
    onAmountChange(newNum) {
      if (newNum < 0) return;
      this.setAmount(newNum);
    },
    onRemoveClick() {
      this.setAmount(0);
    },
    // Set new amount to store
    setAmount(amount) {
      this.$store.dispatch('gifts/trySetSelectedAmount', {
        id: this.gift.id,
        amount
      });
    }
  }
};
</script>

<style lang="scss">
.gift {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 200px;
  padding: 5px;

  border: 2px solid $secondary-color;
}

.gift__left-wrap {
  flex-grow: 0;
  flex-shrink: 0;
}

.gift__right-wrap {
  // All width - img block - indent
  width: calc(100% - 100px - 15px); // -15px from margin-left below
  margin-left: 15px;
}

.gift__img-wrap {
  width: 100px;
  height: 100px;
  display: flex;
}

.gift__img {
  max-height: 100%;
  max-width: 100%;
  margin: auto;
}

.gift__price-wrap {
  font-weight: 600;
}

.gift__price-amount {
  color: $primary-color;
}

.gift__name {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
}

.gift__description {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}

.gift__buy-wrap {
  margin-top: 5px;
}

.gift__buy-input {
  width: 50px;
}

.gift__buy-button {
  font-size: 20px;
}

.gift__remove-button {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  padding: 2px 5px;

  font-family: inherit;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background-color: transparent;
  transition: 0.1s;

  color: grey;

  &:hover {
    color: #000;
  }
}
</style>
