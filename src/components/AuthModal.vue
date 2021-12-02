<template>
  <my-modal :is-active="isActive" @update-status="updateStatus(false)">
    <form action="#" class="box animate">
      <div class="form-floating mb-3 ">
        <h1>Авторизация</h1>
        <input name="username" placeholder="Логин" type="text">
        <input name="userpass" placeholder="Пароль" type="password">
        <input name="" type="submit" value="Войти">
        <input class="button1" type="button" value="Забыли пароль?">
        <a href="#"><input class="button2" type="button" value="Регистрация"></a>
      </div>
    </form>
  </my-modal>
</template>

<script>
import MyModal from "@/components/UI_components/MyModal";
export default {
  name: "AuthModal",
  components: {MyModal},
  props: {
    isActive: {
      required: true,
      type: Boolean
    }
  },
  setup(props, context) {
    function updateStatus(status) {
      context.emit('modal-status', status);
    }

    return {
      updateStatus
    }
  }
}
</script>

<style scoped>
.box {
  width: 500px;
  height: 470px;
  max-width: 100%;
  position: absolute ;
  padding: 40px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background: #222222;
  text-align: center;
}

h1 {
  color: rgb(233, 232, 232);
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 40px;
}

.box input[type = "text"], .box input[type = "password"] {
  background: none;
  display:block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 67%;
  outline: none;
  color: rgb(233, 232, 232);

  border-radius: 24px;
  transition: 0.5s;
  font-size: 18px;
}

.box input[type = "text"]:focus, .box input[type = "password"]:focus{
  width:100%;
  border-color: #27864c;
}

.box input[type = "submit"] {
  background: none;
  display:block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #27864c;
  padding: 14px 35px;
  outline: none;
  color: rgb(233, 232, 232);
  border-radius: 32px;
  cursor: pointer;
  font-size: 20px;
}

.box input[type = "submit"]:hover {
  background: #27864c ;
}

.button1 {
  background: none;
  text-align: center;
  border: 2px solid #a0a0a0;
  padding: 5px ;
  width: 45%;
  outline: none;
  color: rgb(233, 232, 232);

  border-radius: 24px;
  transition: 0.5s;
  font-size: 18px;
  cursor: pointer;
}

.button2  {
  background: none;
  text-align: center;
  border: 2px solid #a0a0a0;
  padding: 5px ;
  width: 45%;
  outline: none;
  color: rgb(233, 232, 232);
  text-decoration: line-through ;
  border-radius: 24px;
  transition: 0.5s;
  font-size: 18px;
  cursor: pointer;
}

.button1:hover , .button2:hover {
  background: #a0a0a0 ;
}

.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)}
  to {-webkit-transform: scale(1)}
}

@keyframes animatezoom {
  from {transform: scale(0)}
  to {transform: scale(1)}
}

</style>