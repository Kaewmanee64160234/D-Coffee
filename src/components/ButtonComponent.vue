<script setup lang="ts">

const props = defineProps<{
  icon: string,
  title: string,
  color: string,

}>();
</script>
<template>
    <v-btn :prepend-icon="props.icon" variant="outlined" :color="props.color">
        {{ props.title }}
      </v-btn>
</template>
