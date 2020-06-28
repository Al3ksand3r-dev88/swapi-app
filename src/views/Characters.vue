<template>
  <div>
    <list-content />
  </div>
</template>

<script>
import ListContent from "@/components/ListContent.vue";
import store from "@/store/index";

function getCurrentPage(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page || 1);
  store.dispatch("GET_ALL", currentPage).then(() => {
    next();
  });
}
export default {
  name: "characters",
  components: {
    ListContent
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getCurrentPage(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getCurrentPage(routeTo, next);
  }
};
</script>

<style lang="scss" scoped></style>
