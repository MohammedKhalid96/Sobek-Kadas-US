<template>
  <div id="home-page">
    <HomeHeader />
    <div class="explore-more text-center">
      <Button to="/aboutPage" smallRadius dark>About Us</Button>
      <Button to="/contactPage" smallRadius bgOrange>
        Contact Us
        <Icon iconName="arrow-right-circle" class="ml-1" />
      </Button>
    </div>
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
import Button from "../components/Button/Button";
import Icon from "../components/Icon/Icon";

export default {
  components: { HomeHeader, Features, WhyKadas, Contact, Pricing, Button, Icon }
};
</script>

<style scoped>
</style>
