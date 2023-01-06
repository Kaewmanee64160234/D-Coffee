<script setup lang="ts">
import { useMessageStore } from "@/stores/message";
const useMsg = useMessageStore();
</script>

<template>
  <div>
    <div class="text-center">
      <v-snackbar v-model="useMsg.isShow" multi-line :timeout="useMsg.timeout">
        {{ useMsg.message }}

        <template v-slot:actions>
          <v-btn color="red" variant="text" @click="useMsg.closeMessage">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>
