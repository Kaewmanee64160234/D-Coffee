import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLoginStore } from "./login";

export const useCartStore = defineStore("cart", () => {
  const carts: any = ref([]);
  const loginStore = useLoginStore();
  const addToCard = (item: Object) => {
    carts.value.push(item);
  };
 

  const clear  = () => { 
    carts.value =  []
    loginStore.dialog = false ;
}
  const deleteList = (id:number) => {
    carts.value.splice(id, 1);
  }
  
 return { addToCard, carts , clear,deleteList};
});
