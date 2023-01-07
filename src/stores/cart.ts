import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const carts: any = ref([]);
  const addToCard = (item: Object) => {
    carts.value.push(item);
  };
  return { addToCard, carts };
});
