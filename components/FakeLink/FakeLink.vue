<template>
  <div id="fake-link">
    <span
      :class="{fakelink__roundedradius: roundedRadius, fakelink__smallradius: smallRadius, fakelink__white: white, fakelink__bgorang: bgOrange}"
    >{{content}}</span>
  </div>
</template>

<script>
export default {
  name: "FakeLink",

  props: {
    content: String,
    smallRadius: Boolean,
    roundedRadius: Boolean,
    white: Boolean,
    bgOrange: Boolean
  }
};
</script>

<style scoped>
span {
  padding: 1rem;
}

.fakelink__roundedradius {
  padding: 0.7rem 1rem;
  border-radius: 50%;
}

.fakelink__smallradius {
  border-radius: 3rem;
}

.fakelink__bgorang {
  background: #ec5423;
}

.fakelink__white {
  color: #fff;
}
</style>