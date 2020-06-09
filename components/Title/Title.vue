<template>
  <div id="title">
    <h4
      class="title__element"
      :class="{
        title__big: big,
        title__medium: medium,
        title__small: small, 
        title__bold: bold, 
        title__white: white, 
        title__orange: orange, 
        title__dark: dark,
        title__shadow: shadow, 
        title__center: center
      }"
    >{{title}}</h4>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
    big: Boolean,
    medium: Boolean,
    bold: Boolean,
    small: Boolean,
    white: Boolean,
    orange: Boolean,
    dark: Boolean,
    shadow: Boolean,
    center: Boolean
  }
};
</script>

<style scoped>
#title {
  margin: 2rem 0;
}

.title__big {
  font-size: 3em;
  font-weight: bold;
}

.title__medium {
  font-size: 2em;
}

.title__small {
  font-size: 1.2em;
}

.title__white {
  color: #fff;
}

.title__orange {
  color: #ec5423;
}

.title__dark {
  color: #272b3a;
}

.title__bold {
  font-weight: bold;
}

.title__shadow {
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
}

.title__center {
  text-align: center;
}
@media (min-width: 992px) and (max-width: 1183px),
  screen and (min-width: 768px) and (max-width: 991px),
  screen and (min-width: 320px) and (max-width: 767px) {
  .title__big {
    font-size: 3em;
  }
  .title__small {
    font-size: 1em;
  }
}
</style>