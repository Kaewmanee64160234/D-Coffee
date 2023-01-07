import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMenuStore } from "./menu";
import { useCartStore } from "./cart";

export const useOrderStore  = defineStore("order",()=>{
    const cartStore = useCartStore();
    const total_ = ref(0);
    const total_dicount = ref(0);
    const CaltotalPrice = ()=>{
        if(cartStore.carts.length >0){
            let cal = 0;
            for(let i=0; i<cartStore.carts.length ; i++){
                cal += cartStore.carts[i].price;
            }
             total_.value = cal;
        }
        else{
            total_.value =0;
        }
    
    }

    const CalDiscout = (discout:number)=>{
        total_dicount.value+=discout;

    }

    return {total_,total_dicount,CaltotalPrice,CalDiscout}
});