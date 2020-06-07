<template>
  <b-icon :icon="iconName"></b-icon>
</template>

<script>
import { BIcon, BIconPhone, BIconEnvelopeFill, BIconMap } from "bootstrap-vue";

export default {
  name: "Icon",

  props: {
    iconName: String,
    white: Boolean
  },

  components: {
    BIcon,
    BIconPhone,
    BIconEnvelopeFill,
    BIconMap
  }
};
</script>

<style scoped>
</style>