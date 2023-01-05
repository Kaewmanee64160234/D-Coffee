<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import MenuCard from '@/components/MenuCard.vue';
import { useMenuStore } from '@/stores/menu';
const menuStore = useMenuStore();
const framList = menuStore.frameList;
</script>

<template>
  <div v-for="item in framList" :key="item.img">
    <div class="ma-5">
  <MenuCard :name="item.name" :cost="item.cost" :img="item.img"></MenuCard></div>
  </div>
</template>