<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: "spinner"
};
</script>

<style lang="scss" scoped>
.spinner {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 5px solid #ecedf2;
  border-top: 5px solid #aa7fe9;
  animation: 1s spinner ease;

  @keyframes spinner {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>