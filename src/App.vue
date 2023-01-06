
<script setup lang="ts">
import MainView from './views/MainView.vue';
import LoginView from './views/LoginView.vue';
import {ref,computed, onMounted} from "vue";
import {useLoginStore}  from "./stores/login";
const loginStore= useLoginStore();
onMounted(() => {
  loginStore.loadData();
});
</script>

<template>
  <LoginView v-if="!loginStore.isLogin" @login="loginStore.login"/>
  <RouterView v-if="loginStore.isLogin"/>
  

</template>



