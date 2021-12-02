<template>
  <div
      :class="{
        'd-block': isActive,
        'd-none': !isActive
      }"
      class="modal"
      @click.prevent.self="updateStatus(false)"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyModal",
  props: {
    isActive: {
      required: true,
      type: Boolean
    }
  },
  setup(props, context) {
    function updateStatus(status) {
      context.emit('update-status', status);
    }

    return {
      updateStatus
    }
  }
}
</script>

<style scoped>
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  padding-top: 60px;
}
</style>