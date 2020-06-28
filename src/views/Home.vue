<template>
  <div class="container">
    <div class="list-container">
      <header>
        <Navbar />
      </header>
      <main>
        <section class="top">
          <p v-show="$route.name == 'home'">
            Click the button below and see all Starwars characters!
          </p>
          <Pagination v-show="hasCharacters" :page="page" />
        </section>
        <article>
          <button
            class="btn-primary"
            @click="getAllCharacters"
            v-show="$route.name == 'home'"
          >
            {{ isLoading ? "loading..." : "Get all characters" }}
          </button>
          <router-view :key="$route.fullPath" />
        </article>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Pagination from "@/components/Pagination.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "home",
  components: {
    Navbar,
    Pagination,
  },
  methods: {
    getAllCharacters() {
      this.$store
        .dispatch("GET_ALL", this.page)
        .then(() => this.$router.push({ name: "characters" }))
        .catch((err) => console.log(err));
    },
  },
  computed: {
    ...mapGetters(["hasCharacters"]),
    ...mapState(["isLoading"]),
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
  },
};
</script>

<style lang="scss">
.container {
  height: 100vh;
  display: flex;
  background: url("../assets/img/bg-bubbles.jpg") no-repeat center center/cover;
  &::before {
    top: 0;
    right: 0;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(#000, 0.3);
  }

  .list-container {
    width: 100%;
    margin: auto;
    height: 100vh;
    overflow: hidden;
    max-width: 460px;
    background: #fff;
    position: relative;
    box-shadow: 0 5px 30px rgba(#000, 0.1);

    .top {
      height: 100px;
      display: flex;
      margin-top: 70px;
      align-items: center;
      background: #ecedf2;
      justify-content: center;

      p {
        color: #aa7fe9;
      }
    }

    article {
      padding: 2rem 1rem;
    }

    .btn-primary {
      top: 50%;
      left: 50%;
      border: none;
      width: 200px;
      color: #fff;
      height: 200px;
      cursor: pointer;
      margin-top: 70px;
      font-size: 1.3rem;
      border-radius: 50%;
      position: absolute;
      transition: all 0.3s ease;
      text-transform: uppercase;
      transform: translate(-50%, -50%);
      box-shadow: 0 5px 30px rgba(#000, 0.1);
      background: linear-gradient(to bottom, #aa7fe9, 70%, #a31cf1);

      &:hover {
        background: linear-gradient(to top, #aa7fe9, 70%, #a31cf1);
      }
    }
  }
}

@media screen and (min-width: 500px) {
  .container {
    .list-container {
      height: 700px;
    }
  }
}
</style>
