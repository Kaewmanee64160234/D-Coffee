<script setup lang="ts">
import { ref } from "vue";
import { useLoginStore } from "@/stores/login";
import type { VForm } from "vuetify/components";
const loginStore = useLoginStore();
const form = ref<VForm | null>(null);
const save = async () => {
  const { valid } = await form.value!.validate();
  if (valid) {
    loginStore.dialog = false;
  }
};
const clear = () => {
  loginStore.dialog = false;
};
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="loginStore.dialog" persistent>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Forgot password </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Enter Name</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                    label="First name*"
                    :rules="[
                      (v) => !!v || 'First name ต้องไม่เป็นช่องว่าง',
                      (v) =>
                        v.length >= 4 ||
                        'Name must be more than or equal 4 characters',
                    ]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Last name*"
                    :rules="[
                      (v) => !!v || 'Last name ต้องไม่เป็นช่องว่าง',
                      (v) =>
                        v.length >= 4 ||
                        'Name must be more than or equal 4 characters',
                    ]"
                    required
                  ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="clear"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped></style>
