// Show number in receved prop currentNum
// Color of text and border depends on css currentColor
// Paddings and font size depend on parent

<template>
  <div class="num-display">{{currentNum}}</div>
</template>

<script>
export default {
  props: ['currentNum']
};
</script>

<style lang="scss">
.num-display {
  display: inline-block;
  padding: 0.2em 0.3em;

  text-align: center;
  line-height: 1;
  color: currentColor;
  border: 2px solid currentColor;
  border-radius: 50%;
  font-weight: 600;
}
</style>
