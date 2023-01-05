<script setup lang="ts">
import {ref} from "vue";
import type { VForm } from "vuetify/components";
const emit = defineEmits<{
    (e: "enter", userName: string): void;
}>();
const EnterName = ref("");
const valid = ref(true);
const form = ref<InstanceType<typeof VForm> | null>(null);
const enter = async () => {
  const { valid } = await form.value!.validate();
  if (valid) {
    emit("enter", EnterName.value);
  }
};
</script>

<template>
  <v-app>
    <v-main class="bg-blue-grey-darken-2 pa-16">
      <v-card width="400px" class="mx-auto">
        <v-card-title primary-title class="text-center text-h6 font-weight-bold"> Login </v-card-title>
        <v-card-text>
            <v-form ref="form" v-model="valid">
                <v-text-field 
                label="Enter Name" 
                v-model="EnterName" 
                ></v-text-field>
                
            </v-form>
            
        </v-card-text>
        <v-card-actions class="justify-center">
            <v-btn color="success" @click="enter">Submit</v-btn>
        </v-card-actions>
        </v-card>
    </v-main>
  </v-app>
</template>