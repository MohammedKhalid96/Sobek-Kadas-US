<template>
  <div id="internal-header">
    <div class="internal-header__bg">
      <b-img src="../../assets/images/backgrounds/shape-11.png" fluid-grow></b-img>

      <div class="internal-header__title">
        <slot></slot>
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
  margin-top: 5rem;
}

.internal-header__title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>