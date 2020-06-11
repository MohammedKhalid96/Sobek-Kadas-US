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

.internal-header__bg::before{
  position: absolute;
  width: 150px;
  height: 150px;
  content: "";
  background: url("../../assets/images/vectors/triangle.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  transform: rotate(90deg);
  opacity: 0.3;
  top: 35%;
  left: 5%;
  z-index: 1;
}


.internal-header__bg::after{
  position: absolute;
  width: 300px;
  height: 300px;
  content: "";
  background: url("../../assets/images/vectors/lines.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  opacity: 0.3;
  top: 0;
  right: 0;
  z-index: 1;
}
</style>