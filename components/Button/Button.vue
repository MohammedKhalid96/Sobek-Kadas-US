<template>
  <b-button
    class="button__element"
    :block="block"
    :class="{fakelink__roundedradius: roundedRadius, fakelink__smallradius: smallRadius, black: black, orange: bgOrange}"
  >
    <!-- <Icon iconName="phone"></Icon> -->
    {{content}}
  </b-button>
</template>

<script>
import Icon from "../Icon/Icon";

export default {
  name: "Button",

  props: {
    content: String,
    block: Boolean,
    black: Boolean,
    smallRadius: Boolean,
    roundedRadius: Boolean,
    bgOrange: Boolean
  },

  components: {
    Icon
  }
};
</script>

<style scoped>
button {
  margin-top: 2rem;
}

.black {
  background: #000;
}

.orange {
  background: #ec5423;
}

.btn {
  border: 0;
  padding: 1rem;
}

.fakelink__roundedradius {
  border-radius: 50%;
}

.fakelink__smallradius {
  border-radius: 3rem;
}
</style>