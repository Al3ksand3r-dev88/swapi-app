<template>
  <div>
    <Modal :character="character" />
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "modal",
  components: {
    Modal,
  },
  props: {
    character: Object,
  },
};
</script>

<style lang="scss" scoped></style>
