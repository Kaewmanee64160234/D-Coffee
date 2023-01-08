<script setup lang="ts">
import { useLoginStore } from "@/stores/login";
import { useCartStore } from "@/stores/cart"
const loginStore = useLoginStore();
const cartStore = useCartStore();

</script>
<template>
  <v-row justify="center">
    <v-dialog v-model="loginStore.dialog" persistent>
      <template v-slot:activator="{ props }">
        <v-btn color="green" v-bind="props">
          Save
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-center-h5">
          คุณต้องการบันทึกรายการทั้งหมดใช่หรือไม่?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" variant="text" @click="loginStore.dialog = true">
            ใช่
          </v-btn>
          <v-btn color="red" variant="text" @click="loginStore.dialog = false">
            ไม่
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <v-row justify="center">
    <v-dialog v-model="loginStore.dialog" persistent width="80%">
      <template v-slot:activator="{ props }">
        <v-btn color="red" v-bind="props">
          Clear
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          คุณต้องการยกเลิกรายการทั้งหมดใช่หรือไม่?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green-darken-1" variant="text" @click="cartStore.clear">
            ใช่
          </v-btn>
          <v-btn color="green-darken-1" variant="text" @click="loginStore.dialog = false">
            ไม่
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>


</template>