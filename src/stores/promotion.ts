import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('promotion',()=>{
    const promo = ref([
        {name:'แฮปปี้รับแต้ม',price:0, point:50, code:'HAPPY250'},
        {name:'แลกคะแนนลดราคา',price:10, point:100, code:'Point10010'},
        {name:'ช้อปครบลดราคา',price:5,point:0, code:'Shop1005'}

    ]
) 
return {promo}
})