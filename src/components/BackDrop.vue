<template>
  <div
    class="back-drop"
    @click="$router.go(-1)"
    :class="[$route.name == 'modal' && 'toggle-backdrop']"
  ></div>
</template>

<script>
export default {
  name: "BackDrop",
};
</script>

<style lang="scss" scoped>
.back-drop {
  transition: 0.3s;
  &.toggle-backdrop {
    top: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: fixed;
    background: rgba(#000, 0.7);
  }
}
</style>
