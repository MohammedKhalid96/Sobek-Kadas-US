<template>
  <b-icon :icon="iconName" :class="{dark: bgDark, orange: bgOrange}"></b-icon>
</template>

<script>
import {
  BIcon,
  BIconPhone,
  BIconEnvelopeFill,
  BIconMap,
  BIconPlayFill
} from "bootstrap-vue";

export default {
  name: "Icon",

  props: {
    iconName: String,

    bgOrange: Boolean,
    bgDark: Boolean
  },

  components: {
    BIcon,
    BIconPhone,
    BIconEnvelopeFill,
    BIconMap,
    BIconPlayFill
  }
};
</script>

<style scoped>
.dark {
  background: #272b3a;
}

.orange {
  background: #ec5423;
}
</style>