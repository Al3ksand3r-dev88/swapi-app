<template>
  <div
    class="modal"
    v-if="character"
    :class="[$route.name == 'modal' ? 'animate__animated animate__zoomInDown' : '']"
  >
    <span
      class="btn-close"
      @click="$router.go(-1)"
      :tabindex="0"
      @keyup.enter="$router.go(-1)"
    >&times;</span>
    <ul class="modal-content">
      <h1>Character information</h1>
      <li>Name: {{ character.name }}</li>
      <li>Gender: {{ character.gender }}</li>
      <li>Height: {{ character.height }} cm</li>
      <li>Weight: {{ character.mass}} kg</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    character: Object
  }
};
</script>

<style lang="scss" scoped>
.modal {
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 2rem;
  position: fixed;
  background: #fff;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 30px rgba(#000, 0.1);

  .btn-close {
    top: 0;
    right: 1rem;
    cursor: pointer;
    font-size: 3rem;
    position: absolute;
  }

  .modal-content {
    margin: auto;
    display: flex;
    list-style: none;
    flex-direction: column;
    justify-content: flex-start;

    h1 {
      margin-bottom: 2rem;
    }

    li {
      padding: 10px 0;
    }
  }

  &.animate__animated.animate__zoomInDown {
    animation-duration: 0.3s;
    top: 50%;
    left: 50%;
  }
}

@media screen and (min-width: 1024px) {
  .modal {
    max-width: 1000px;
    max-height: 80%;
    border-radius: 5px;

    .btn-close {
      right: 2rem;
      font-size: 4rem;
    }

    &-content {
      font-size: 1.5rem;
    }
  }
}
</style>
