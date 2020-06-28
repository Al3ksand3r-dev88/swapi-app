<template>
  <aside :class="{ toggle : isMenuOpen }">
    <ul>
      <li>
        <router-link to="/" @click.native="$store.commit('TOGGLE_SIDE_MENU'); reload()">Home</router-link>
      </li>
      <li>
        <router-link to="/" @click.native="getCharacters">Get characters</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SideMenu",
  computed: {
    ...mapState(["isMenuOpen"])
  },
  methods: {
    getCharacters() {
      this.$store
        .dispatch("GET_ALL", parseInt(this.$route.query.page || 1))
        .then(() => this.$router.push({ name: "characters" }))
        .then(() => this.$store.commit("TOGGLE_SIDE_MENU"));
    },
    reload() {
      location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
aside {
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  margin-top: 70px;
  position: absolute;
  background: #707486;
  transform: translateX(-100%);

  &.toggle {
    transition: 0.3s;
    transform: translateX(0);
  }

  ul {
    margin: auto;
    list-style: none;
    text-align: center;

    a {
      color: #fff;
      display: block;
      margin: 1rem 0;
      padding: 10px 0;
      font-size: 1.3rem;
      text-decoration: none;
    }
  }
}
</style>