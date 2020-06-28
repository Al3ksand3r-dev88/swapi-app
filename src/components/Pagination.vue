<template>
  <div class="pagination">
    <router-link
      v-show="page != 1"
      :to="{ name: 'characters', query: { page: page - 1 } }"
      ><i class="fas fa-chevron-left"></i
    ></router-link>
    <router-link
      v-show="page <= hasNextButton"
      :to="{ name: 'characters', query: { page } }"
      >{{ page }}</router-link
    >
    <router-link
      v-show="page <= hasNextButton"
      :to="{ name: 'characters', query: { page: page + 1 } }"
      ><i class="fas fa-chevron-right"></i
    ></router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "pagination",
  props: {
    page: Number,
  },
  computed: { ...mapGetters(["hasNextButton"]) },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
}
a {
  width: 50px;
  height: 50px;
  border: none;
  color: #fff;
  margin: 0 1rem;
  display: flex;
  font-size: 2rem;
  border-radius: 50%;
  align-items: center;
  text-decoration: none;
  background: #ccb2fc;
  justify-content: center;

  &:nth-child(odd) {
    background: lighten(#707486, 30%);
  }
}
</style>
