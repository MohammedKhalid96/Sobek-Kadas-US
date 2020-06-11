<template>
  <div id="pricing-page" class="internal-pages">
    <InternalHeader>
      <Title big blod orange center title="Pricing" />
    </InternalHeader>
    <div class="internal-pages__body">
      <Pricing />
    </div>
    <div class="divider"></div>
    <div class="divider"></div>
  </div>
</template>

<script>
import InternalHeader from "../components/InternalHeader/InternalHeader";
import Title from "../components/Title/Title";
import Pricing from "../components/Pricing/Pricing";

export default {
  name: "PricingPage",

  components: { InternalHeader, Title, Pricing }
};
</script>

<style scoped>
#pricing {
  background: #fff;
}

.internal-pages__body {
  position: relative;
  bottom: 1rem;
}

</style>