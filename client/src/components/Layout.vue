<template>
  <div class="layout">
    <div class="layout__header">
      <div class="layout__container">
        <slot name="header"></slot>
      </div>
    </div>

    <div class="layout__page">
      <div class="layout__container layout__container-page">
        <main class="layout__page-main">
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$header-height: 60px;

.layout__header {
  position: fixed;
  width: 100%;
  height: $header-height;
  top: 0;

  background-color: $primary-color;
  border-bottom: 2px solid $secondary-color;
}

.layout__page {
  $first-color: lighten($primary-color, 30%);
  $second-color: lighten($primary-color, 10%);
  $pattern-size: 40px;

  background-color: $first-color;
  background-size: $pattern-size $pattern-size;
  background-image: linear-gradient(
    135deg,
    $second-color 25%,
    transparent 25%,
    transparent 50%,
    $second-color 50%,
    $second-color 75%,
    transparent 75%,
    transparent 100%
  );
}

.layout__container {
  max-width: 770px;
  margin-left: auto;
  margin-right: auto;
  padding-left: $standart-indent;
  padding-right: $standart-indent;
}

.layout__container-page {
  background-color: #fff;
}

.layout__page-main {
  min-height: 100vh;
  padding-top: $header-height;
}
</style>
