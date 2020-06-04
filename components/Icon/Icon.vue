<template>
  <b-icon :icon="iconName"></b-icon>
</template>

<script>
import { BIcon, BIconPhone } from "bootstrap-vue";

export default {
  name: "Icon",

  props: {
    iconName: String,
    white: Boolean,
  },

  components: {
    BIcon,
    BIconPhone
  }
};
</script>

<style scoped>

</style>