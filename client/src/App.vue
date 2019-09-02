<template>
  <div id="app">
    <Layout>
      <template v-slot:header>
        <Header></Header>
      </template>

      <template v-slot:default>
        <router-view />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import Header from '@/components/Header';

export default {
  components: {
    Header,
    Layout
  }
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
