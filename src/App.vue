<script setup lang="ts">
import MainView from './views/MainView.vue';
import LoginView from './views/LoginView.vue';
import {ref,computed} from "vue";
const loginName = ref("");
const isLogin = computed(() => {
  return loginName.value !== "";
});
const login = (userName: string): void => {
  loginName.value = userName;
};

const enter = (EnterName: string): void => {
  loginName.value = EnterName;
};
</script>

<template>
  <LoginView v-if="!isLogin" @login="login"/>
  <MainView v-if="isLogin"/>
  <ForgotPassView @enter="enter"/>
</template>

<style scoped></style>
