<template>
  <div id="table">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Table"
};
</script>

<style scoped>
table {
  width: 100%;
  max-width: 100%;
  border-collapse: separate;
  overflow-x: scroll;
}

td {
  padding: 1.5rem;
  width: 25%;
}

th {
  padding-bottom: 1.5rem;
}

tbody tr:nth-child(odd) {
  background: #fff;
}

#home-page .tr-action {
  background: #f5f5f7 !important;
}
.tr-action td {
  padding: 0;
}
</style>

