import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',()=>{
    const add_on = ref([
        {name:'sugar 0 ',price:0},
        {name:'sugar 25 ',price:0},
        {name:'sugar 50 ',price:0},
        {name:'sugar 100 ',price:0},
        {name:'sugar 120 ',price:0},
        {name:'sugar 125 ',price:5},
        {name:'Add shot ',price:10},
        {name:'mix ',price:10},
        {name:'cold ',price:10},
        {name:'hot ',price:10},
        {name:'Syrup',price:5},
        {name:'Honey',price:5},
        {name:'bubble',price:5},
        {name:'Konjac jelly',price:5},
    ]
) 
    return {add_on}
})