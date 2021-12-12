<template>
  <my-navbar @auth="isActiveAuthModal = true"/>
  <auth-modal :is-active="isActiveAuthModal" @modal-status="updateModalStatus"/>
  <router-view/>
  <my-footer/>
</template>

<script>
import MyNavbar from "@/components/MyNavbar";
import AuthModal from "@/components/AuthModal";
import {ref} from "vue";
import MyFooter from "@/components/MyFooter";
require('@/assets/css/bootstrap/bootstrap.min.css');
require('@/assets/js/bootstrap/bootstrap.bundle.min');
export default {
  components: {MyFooter, AuthModal, MyNavbar},
  setup() {
    const isActiveAuthModal = ref(false);

    function updateModalStatus(status) {
      isActiveAuthModal.value = status
    }

    return {
      isActiveAuthModal,

      updateModalStatus
    }
  }
}
</script>

<style>
body {
  background: whitesmoke;
  font-family: Arial, sans-serif;
}
a[href="https://www.freewebhostingarea.com"] {
  display: none !important;
}
</style>
