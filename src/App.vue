<template>
  <div id="app">
    <back-drop />
    <router-view />
  </div>
</template>

<script>
import BackDrop from "@/components/BackDrop.vue";
export default {
  name: "app",
  components: {
    BackDrop
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
body {
  font-family: "Roboto", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track-piece {
  background: #ecedf2;
}

::-webkit-scrollbar-thumb {
  background: #ccb2fc;
}
</style>
