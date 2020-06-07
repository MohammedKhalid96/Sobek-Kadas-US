<template>
  <div>
    <Header />
    <Features />
    <WhyKadas />
    <Contact />
    <Pricing />
  </div>
</template>

<script>
import Header from "../components/Header/Header";
import Features from "../components/Features/Features";
import WhyKadas from "../components/WhyKadas/WhyKadas";
import Contact from "../components/Contact/Contact";
import Pricing from "../components/Pricing/Pricing";

export default {
  components: { Header, Features, WhyKadas, Contact, Pricing }
};
</script>

<style scoped>
</style>
