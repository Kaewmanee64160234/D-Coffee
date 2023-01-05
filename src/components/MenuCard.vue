<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <v-card class="mx-auto " variant="outlined" width="150">
    <v-img :src="props.img"   max-height="150"
  max-width="150" cover></v-img>
    <v-card-item>
      <div class="text-center">
        <div class="text-h6 mb-1">{{ props.name }}</div>
      </div>
      <div class="text-center">
        <div class="text-h6 mb-1">{{ props.cost }}</div>
      </div>
    </v-card-item>
  </v-card>
</template>