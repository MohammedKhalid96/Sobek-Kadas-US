<template>
  <div id="pricing-page">
    <InternalHeader />
    <div class="divider"></div>
    <Pricing />
    <div class="divider"></div>
  </div>
</template>

<script>
import InternalHeader from "../components/InternalHeader/InternalHeader";
import Pricing from "../components/Pricing/Pricing";

export default {
  name: "PricingPage",

  components: { InternalHeader, Pricing }
};
</script>

<style scoped>
</style>