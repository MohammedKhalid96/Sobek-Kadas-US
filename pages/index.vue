<template>
  <div id="home-page">
    <HomeHeader />
    <Features />
    <WhyKadas />
    <Pricing />
    <Contact />
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader/HomeHeader";
import Features from "../components/Features/Features";
import WhyKadas from "../components/WhyKadas/WhyKadas";
import Contact from "../components/Contact/Contact";
import Pricing from "../components/Pricing/Pricing";

export default {
  components: { HomeHeader, Features, WhyKadas, Contact, Pricing }
};
</script>

<style scoped>
</style>
