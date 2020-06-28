<template>
  <ul v-if="characters" class="list-content">
    <li class="card" v-for="(character, index) in filteredList" :key="index">
      <div class="card-top">
        <h1>
          Name:
          <br />
          <router-link
            :to="{
              name: 'modal',
              params: { name: character.name, character },
            }"
          >{{ character.name }}</router-link>
        </h1>
        <button
          @click="
            $router.push({
              name: 'modal',
              params: { name: character.name, character },
            })
          "
        >Details</button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "ListContent",
  computed: { ...mapState(["characters"]), ...mapGetters(["filteredList"]) }
};
</script>

<style lang="scss" scoped>
.list-content {
  height: 71vh;
  overflow: auto;
  list-style: none;
}
.card {
  width: 100%;
  height: 100px;
  margin: 5px 0;
  padding: 20px 10px;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 2px 5px rgba(#000, 0.1);

  &-top {
    display: flex;
    justify-content: space-between;

    h1 {
      font-weight: 100;
      font-size: 1.3rem;

      a {
        color: #000;
        font-size: 1rem;
        margin-top: 0.2rem;
      }
    }

    button {
      border: none;
      color: #fff;
      padding: 10px;
      cursor: pointer;
      transition: 0.3s;
      border-radius: 5px;
      background: #aa7fe9;

      &:hover {
        background: darken(#aa7fe9, 5%);
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .list-content {
    height: 60vh;
  }
}

@media screen and (min-width: 1440px) {
  .list-content {
    height: 71vh;
  }
}
</style>
