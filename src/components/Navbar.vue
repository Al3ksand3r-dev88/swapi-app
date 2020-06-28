<template>
  <nav class="navbar-container">
    <search-form />
    <div class="burger" @click="toggleSideMenu" :class="{ isMenuOpen }">
      <div />
      <div />
      <div />
    </div>
    <router-link to="/" @click.native="reload" :class="{'paddingRight' : hasCharacters}">
      Swapi API
      <br />
      <span>Created by Aleksander</span>
    </router-link>
    <Spinner v-if="isLoading" />
    <i v-else class="fas fa-search" @click="openFilter" v-show="hasCharacters"></i>
  </nav>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";
import Spinner from "@/components/Spinner.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "navbar",
  components: {
    SearchForm,
    Spinner
  },
  methods: {
    openFilter() {
      this.$store.commit("TOGGLE_FILTER");
      this.$store.getters.forceCloseOfMenu;
    },
    toggleSideMenu() {
      this.$store.commit("TOGGLE_SIDE_MENU");
    },
    reload() {
      location.reload().then(() => this.$router.push({ name: "home" }));
    }
  },
  computed: {
    ...mapGetters(["hasCharacters"]),
    ...mapState(["isLoading", "isMenuOpen"])
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
      margin: 5px 0;
      background: #fff;
    }

    &.isMenuOpen {
      transition: 0.3s;
      transform: rotate(180deg);
      div {
        transition: 0.3s;
        &:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
      }
    }
  }

  a {
    margin: auto;
    color: #fff;
    text-align: center;
    padding-right: 2rem;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;

    span {
      font-size: 0.7rem;
      text-transform: capitalize;
    }
    &.paddingRight {
      padding-right: 0;
    }
  }

  i {
    cursor: pointer;
    font-size: 1.5rem;
  }
}
</style>
