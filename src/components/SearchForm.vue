<template>
  <input
    type="text"
    placeholder="Filter character by name"
    v-model="filterValue"
    @input="setFilter"
    :class="{ toggleFilter }"
  />
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchForm",
  computed: {
    ...mapState(["toggleFilter"]),
  },
  data() {
    return {
      filterValue: null,
    };
  },
  methods: {
    setFilter() {
      this.$store.commit("SET_FILTER", this.filterValue);
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  top: 10px;
  width: 80%;
  left: 1rem;
  opacity: 0;
  height: 70%;
  margin: auto;
  padding: 0 10px;
  visibility: hidden;
  position: absolute;
  transform: translate(100%);
  &.toggleFilter {
    opacity: 1;
    transition: 0.1s;
    visibility: visible;
    transform: translate(0);
  }
}
</style>
