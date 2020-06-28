<template>
  <nav class="navbar-container">
    <search-form />
    <div class="burger">
      <div />
      <div />
      <div />
    </div>
    <router-link to="/">Swapi API</router-link>
    <i class="fas fa-search" @click="openFilter"></i>
  </nav>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";
export default {
  name: "navbar",
  components: {
    SearchForm
  },
  methods: {
    openFilter() {
      this.$store.commit("TOGGLE_FILTER");
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar-container {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  display: flex;
  color: #fff;
  padding: 0 2rem;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(#000, 0.2);
  background: linear-gradient(to right, #aa7fe9, 50%, #a31cf1);

  .burger {
    cursor: pointer;

    div {
      width: 25px;
      height: 2px;
      margin: 6px 0;
      background: #fff;
    }
  }

  a {
    color: #fff;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
  }

  i {
    cursor: pointer;
    font-size: 1.5rem;
  }
}
</style>
