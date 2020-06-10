<template>
  <b-button
    class="button__element"
    :to="to"
    :block="block"
    :type="type"
    :class="{fakelink__roundedradius: roundedRadius, fakelink__smallradius: smallRadius, dark: dark, orange: bgOrange}"
  >
    <slot>
      {{content}}
    </slot>
  </b-button>
</template>

<script>
import Icon from "../Icon/Icon";

export default {
  name: "Button",

  props: {
    to: String,
    content: String,
    type: String,
    block: Boolean,
    bgOrange: Boolean,
    dark: Boolean,
    smallRadius: Boolean,
    roundedRadius: Boolean,
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

.dark {
  background: #272b3a;
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