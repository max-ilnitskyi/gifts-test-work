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
        <button
          class="gift__buy-button"
          type="button"
          v-if="showButton"
          @click="onBuyClick"
        >
          Buy
        </button>
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
  </article>
</template>

<script>
import NumInput from '@/components/NumInput';

export default {
  props: ['gift'],
  components: { NumInput },
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
    }
  },
  methods: {
    onBuyClick() {
      if (this.amount >= 1) return;
      this.setAmount(1);
    },
    onAmountChange(newNum) {
      if (newNum < 0) return;
      this.setAmount(newNum);
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

.gift__button-link-wrap {
  margin-left: auto;
}

.gift__buy-wrap {
  margin-top: 5px;
}

.gift__buy-button {
  $main-color: darken($action-color, 20%);
  $second-color: #fff;

  display: block;
  padding-right: 0.5em;
  padding-left: 0.5em;
  padding-top: 0;
  padding-bottom: 0;

  font-family: inherit;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  /* border-radius: 0.25em; */
  cursor: pointer;
  text-decoration: none;
  transition: 0.1s;

  color: $second-color;
  border: 2px solid $second-color;
  background-color: $main-color;

  &:hover {
    color: $main-color;
    background-color: $second-color;
    border: 2px solid $main-color;
  }
}

.gift__buy-input {
  width: 50px;
}
</style>
