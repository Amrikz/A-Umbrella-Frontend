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
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav {*/
/*  padding: 30px;*/
/*}*/

/*#nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
