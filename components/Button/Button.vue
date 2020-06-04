<template>
  <div id="button">
    <b-button class="button__element" :block="block" :class="{black: black, orange: orange}">
      <Icon iconName="phone"></Icon>
      {{content}}
    </b-button>
  </div>
</template>

<script>
import Icon from "../Icon/Icon";

export default {
  name: "Button",

  props: {
    content: String,
    block: Boolean,
    black: Boolean,
    orange: Boolean
  },

  components: {
    Icon
  }
};
</script>

<style scoped>
#button {
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
  padding: 1rem 2rem;
}
</style>