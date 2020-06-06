<template>
  <div>
    <Header />
    <Features />
    <WhyKadas />
    <Contact />
  </div>
</template>

<script>
import Header from "../components/Header/Header";
import Features from "../components/Features/Features";
import WhyKadas from "../components/WhyKadas/WhyKadas";
import Contact from "../components/Contact/Contact";

export default {
  components: { Header, Features, WhyKadas, Contact }
};
</script>

<style scoped>
</style>
