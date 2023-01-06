import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { makeOptional } from '@/__VLS_types'

export const useCartStore = defineStore('cart', () => {
  const addToCard = (name:string,cost:string) => {
    return name+" "+cost;
    

  }
  return { addToCard }
})
