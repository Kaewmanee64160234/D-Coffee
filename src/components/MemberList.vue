<script setup lang="ts">
import {useMemberStore} from "@/stores/member"
import {mdiPlus} from "@mdi/js"
const memberStore = useMemberStore();
const addMember = () => {
  memberStore.dialog = true;
} 
</script>
<template>
  <v-btn color="primary" :prepend-icon="mdiPlus" @click = "addMember">Add Member</v-btn>
</template>
<style>
</style>