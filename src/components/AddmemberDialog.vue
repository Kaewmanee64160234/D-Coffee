<script setup lang="ts">
import {useMemberStore} from "@/stores/member"
import { ref } from "vue";
const memberStore = useMemberStore();
</script>
<template>
  <v-row justify="center">
    <v-dialog
     style = "width:50%"
      v-model="memberStore.dialog"
      persistent
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">New Member</span>
        </v-card-title>
        <v-card-text>
          <v-container>
                <v-text-field
                  label="Name"
                  :rules="[
                      (v) => !!v || 'Name จะต้องไม่เป็นช่องว่าง',
                      (v) => /^[0/^[a-zA-Z]+$/.test(v) || 'Name จะต้องเป็นตัวหนังสือภาษาอังกฤษเท่านั้น',
                    ]"
                    required
                    
                ></v-text-field>
                <v-text-field
                  label="Phone Number"
                  :rules="[
                      (v) => !!v || 'Phone Number จะต้องไม่เป็นช่องว่าง',
                      (v) => /^[0-9]+$/ .test(v) || 'Phone Number ต้องเป็นตัวเลขเท่านั้น',
                      (v) =>
                        v.length == 10 ||
                        'Phone Number จะต้องมี10ตัว',
                    ]"
                    required
                ></v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="memberStore.dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="memberStore.dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<style scoped>

</style>