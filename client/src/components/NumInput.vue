<template>
  <div class="num-input">
    <button
      class="num-input__button num-input__button_increase"
      type="button"
      @click="onDecrease"
      title="Remove one from basket"
      aria-label="Remove one from basket"
    >
      -
    </button>
    <span class="num-input__num">{{ currentNum }}</span>
    <button
      class="num-input__button num-input__button_decrease"
      type="button"
      @click="onIncrease"
      title="Add one more to basket"
      aria-label="Add one more to basket"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  props: ['currentNum'],
  methods: {
    onIncrease() {
      this.$emit('numChange', this.currentNum + 1);
    },
    onDecrease() {
      this.$emit('numChange', this.currentNum - 1);
    }
  }
};
</script>

<style>
.num-input {
  display: flex;
}

.num-input__button {
  min-width: 25px;

  text-align: center;

  cursor: pointer;
}

.num-input__num {
  min-width: 25px;
  padding-right: 2px;
  padding-left: 2px;

  text-align: center;
}
</style>
