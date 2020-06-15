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
.fakelink__roundedradius {
  display: inline-block;
  width: 45px;
  height: 45px;
  line-height: 45px;
  border-radius: 50%;
  text-align: center;
}

.fakelink__smallradius {
  border-radius: 3rem;
  padding: 1rem;
}

.fakelink__bgorang {
  background: #ec5423;
}

.fakelink__white {
  color: #fff;
}
@media (min-width: 320px) and (max-width: 767px) { 

}
</style>