<template>
  <header class="header">
    <div class="header__left-side">
      <NavMenu></NavMenu>
    </div>
    <div class="header__right-side">
      <BasketPanel></BasketPanel>
    </div>
  </header>
</template>

<script>
import NavMenu from '@/components/NavMenu';
import BasketPanel from '@/components/BasketPanel';

export default {
  components: {
    NavMenu,
    BasketPanel
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
}

.header__left-side,
.header__right-side {
  flex-grow: 0;
  flex-shrink: 0;
}

.header__right-side {
  margin-left: auto;
}
</style>
