<template>
  <div id="app">
    <Layout>
      <template v-slot:header>
        <NavMenu></NavMenu>
      </template>

      <template v-slot:default>
        <router-view />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import NavMenu from '@/components/NavMenu';

export default {
  components: {
    NavMenu,
    Layout
  }
};
</script>
