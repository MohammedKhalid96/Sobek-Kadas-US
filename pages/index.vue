<template>
  <div>
    <Header />
    <Features />
    <Contact />
  </div>
</template>

<script>
import Header from "../components/Header/Header";
import Features from "../components/Features/Features";
import Contact from "../components/Contact/Contact";

export default {
  components: { Header, Features, Contact }
};
</script>

<style scoped>
</style>
