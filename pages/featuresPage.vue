<template>
  <div id="features-page" class="internal-pages">
    <InternalHeader>
      <Title big bold orange center title="Features" />
    </InternalHeader>
    <div class="internal-pages__body">
      <b-container>
        <Features />
      </b-container>
    </div>
    <div class="divider"></div>
    <div class="divider"></div>
  </div>
</template>

<script>
import InternalHeader from "../components/InternalHeader/InternalHeader";
import Title from "../components/Title/Title";
import Features from "../components/Features/Features";

export default {
  name: "FeaturesPage",

  components: {
    InternalHeader,
    Title,
    Features
  }
};
</script>

<style scoped>
#features-page #features {
  background: #fff;
}
</style>