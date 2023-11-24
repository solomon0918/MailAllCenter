<script setup>
  import Header from './components/common/Layouts/NavHeader.vue';
  import Footer from './components/common/Layouts/NavFooter.vue';
</script>

<template>
  <Header></Header>
  <main>
    <router-view />
  </main>
  <Footer></Footer>
</template>
