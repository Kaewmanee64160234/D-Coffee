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
</script>

<template>
  <LoginView v-if="!isLogin" @login="login"/>
  <MainView v-if="isLogin"/>
</template>

<style scoped></style>
