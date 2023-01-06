<script setup lang="ts">
import { ref } from 'vue';
import {mdiAccountSearch } from '@mdi/js';
import { useMemberStore } from '@/stores/member';
const memberStore = useMemberStore();
const dialog = ref(false);
const dialog2 = ref(false);
</script>

<template>
    <v-row justify="center">
        <v-btn
        color="primary"
        class="ma-2"
        @click="dialog = true"
      >
        Open Dialog 1
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
            style="width: 300px;"

          >
          <template v-slot:prepend>
          <v-icon :icon="mdiAccountSearch " />
          </template>
         
        </v-text-field>
        <v-card
        class="mx-auto"
      
      >
      <v-list lines="two">
        <v-list-item v-for="member in memberStore.members" :value="member.name" :key="member.name" :title="member.name"  :subtitle="member.Point +` Point`" ></v-list-item>
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
              @click="dialog = false"
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