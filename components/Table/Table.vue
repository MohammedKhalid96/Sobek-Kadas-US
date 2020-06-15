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
#table {
  overflow-x: auto;
}
table {
  width: 100%;
  max-width: 100%;
  border-collapse: separate;
}

td {
  width: 25%;
  padding: 1.5rem;
}

th {
  padding-bottom: 1.5rem;
}

tbody tr:nth-child(odd) {
  background: #fff;
}

#home-page .tr-action,
#home-page .tr-request {
  background: #f5f5f7 !important;
}

.tr-action td {
  padding: 0;
}

@media (min-width: 320px) and (max-width: 767px) {
  td {
    padding: 1rem;
    font-size: 0.9rem;
  }
}
</style>


