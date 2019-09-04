// Size of button depends on wrapper's font size. If 'action' class add, color
// will change to corresponding from scss variable
<template>
  <button class="button" type="button" @click="onClick"><slot></slot></button>
</template>

<script>
export default {
  props: ['action'],
  methods: {
    onClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style lang="scss">
$main-color: $primary-color;
$second-color: #fff;
.button {
  display: block;
  padding-right: 0.5em;
  padding-left: 0.5em;
  padding-top: 0;
  padding-bottom: 0;

  font-family: inherit;
  font-size: inherit;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: 0.1s;

  color: $second-color;
  border: 2px solid $main-color;
  background-color: $main-color;

  &:hover {
    color: $main-color;
    background-color: $second-color;
  }
}

.button.action {
  $main-color: darken($action-color, 20%);
  $second-color: #fff;

  color: $second-color;
  border-color: $main-color;
  background-color: $main-color;

  &:hover {
    color: $main-color;
    background-color: $second-color;
  }
}
</style>
