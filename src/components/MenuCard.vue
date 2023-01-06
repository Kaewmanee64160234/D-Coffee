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
  type: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <a href="#" onclick="alert('Hello')">
  <div class="card item-card">
  <img 
  class="card-img-top item-img"
        :src="props.img"
        alt="Card image cap"
      />
      <div class="card-body text-center">
        <h5 class="card-title">{{ props.name }}</h5>
        <p class="card-text">{{ props.cost }}</p>
      </div>
    </div>
</a>
</template>