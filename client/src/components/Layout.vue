<template>
  <div class="layout">
    <div class="layout__header">
      <div class="layout__container layout__container_header">
        <slot name="header"></slot>
      </div>
    </div>

    <div class="layout__page">
      <div class="layout__container layout__container_page">
        <main class="layout__page-main">
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$header-height: 60px;

.layout {
  height: 100%;
}

body,
html {
  height: 100%;
}

.layout__header {
  position: fixed;
  width: 100%;
  height: $header-height;
  top: 0;

  background-color: $primary-color;
  border-bottom: 3px solid $secondary-color;
}

.layout__page {
  $first-color: lighten($primary-color, 30%);
  $second-color: lighten($primary-color, 10%);
  $pattern-size: 40px;

  height: 100%;

  border-bottom: 3px solid darken($secondary-color, 15%);
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

.layout__container_page {
  height: 100%;
  padding-top: $header-height + $standart-indent;
  padding-bottom: $standart-indent;

  background-color: #fff;
}

// Mainly for vertical content centering
.layout__container_header {
  padding-top: 8px;
}

.layout__page-main {
  height: 100%;
}
</style>
