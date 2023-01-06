<script setup lang="ts">
import { ref } from "vue";
import { useLoginStore } from "@/stores/login";
import type { VForm } from "vuetify/components";
const loginStore = useLoginStore();
const form = ref<VForm | null>(null);
const save = () => {
  loginStore.dialog = false;
};
const clear = () => {
  loginStore.dialog = false;
};
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="loginStore.dialog" persistent>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Search Member </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Search Member</span>
        </v-card-title>
        <v-card-text>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="clear">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped></style>
