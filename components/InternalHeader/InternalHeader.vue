<template>
  <div id="internal-header">
    <div class="internal-header__bg">
      <b-img src="../../assets/images/backgrounds/shape-11.png" fluid-grow></b-img>

      <div class="internal-header__title">
        <Title big blod Orange center title="Pricing" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../Title/Title";

export default {
  name: "InternalHeader",

  components: {
    Title
  }
};
</script>

<style scoped>
.internal-header__bg {
  position: relative;
}

.internal-header__title {
}

</style>