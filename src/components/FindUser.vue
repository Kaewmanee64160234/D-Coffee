<script setup lang="ts">
import { ref } from 'vue';
import {mdiAccountSearch } from '@mdi/js';
import { useMemberStore } from '@/stores/member';
const memberStore = useMemberStore();
const dialog = ref(false);
const dialog2 = ref(false);
const phonInput = ref("");
const close  = ()=>{
  dialog.value = false;
  phonInput.value = "";
  memberStore.IsSerarch = false;

}
</script>

<template>
    <v-row justify="center">
        <v-btn
        color="primary"
        class="ma-2"
        @click="dialog = true"
      >
        Find Member
      </v-btn>
        <v-dialog
        v-model="dialog"  width="50%"
      >
        <v-card height="500px">
          <v-card-title>
            Find Member
          </v-card-title>
          <v-card-text>

            <v-text-field
            label="Phone Number"
           height="20px"
            hide-details="auto"
            v-model="phonInput"
           

          >
          <template v-slot:append>
          <v-btn  variant="outlined"  color="secondary" style="margin-bottom: 10px;" @click="memberStore.findPhoneNmber(phonInput)">Find</v-btn>
          </template>
         
        </v-text-field>
        <v-card
        class="mx-auto"
        style="margin-top: 10px;"
      >
      <v-list lines="two" v-if="!memberStore.IsSerarch">
        <v-list-item  v-for="member in memberStore.members" :value="member.id" :key="member.name" :title="member.name"  style="font-size: 15px;">{{ member.Point }} Point<v-btn variant="tonal" color="secondary" style="width: 100px;margin-left: 450px;" @click="memberStore.AddPoint(member.Tel)">Add Point</v-btn></v-list-item>
    </v-list>
    <v-list lines="two" v-if="memberStore.IsSerarch">
        
        <v-list-item  :value="memberStore.thisMember.id" :title="memberStore.thisMember.name"  style="font-size: 15px;">{{memberStore.thisMember.Point }} Point<v-btn variant="tonal" color="secondary" style="width: 100px;margin-left: 450px;">Add Point</v-btn></v-list-item>
        
    </v-list>
</v-card>
            <!-- <v-btn
              color="primary"
              class="ma-2"
              @click="dialog2 = true"
            >
              Open Dialog 2
            </v-btn> -->
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              variant="text"
              @click="close"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="dialog2"
      >
        <v-card>
          <v-card-title>
            Dialog 2
          </v-card-title>
          <v-card-text>
            <v-btn
              color="primary"
             
            >
              Open Dialog 3
            </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              variant="text"
              @click="dialog2 = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
</template>