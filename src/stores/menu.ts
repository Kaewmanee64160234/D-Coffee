import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", () => {
  const dialogPromo1 = ref(false);
  const dialogPromo2 = ref(false);
  const add_on = ref([
    { name: "sugar 0 ", price: 0 },
    { name: "sugar 25 ", price: 0 },
    { name: "sugar 50 ", price: 0 },
    { name: "sugar 100 ", price: 0 },
    { name: "sugar 120 ", price: 0 },
    { name: "sugar 125 ", price: 5 },
    { name: "Add shot ", price: 10 },
    { name: "mix ", price: 10 },
    { name: "cold ", price: 10 },
    { name: "hot ", price: 10 },
    { name: "Syrup", price: 5 },
    { name: "Honey", price: 5 },
    { name: "bubble", price: 5 },
    { name: "Konjac jelly", price: 5 },
  ]);

  const promo = ref([
    { name: "แฮปปี้รับแต้ม", price: 0, point: 50, code: "HAPPY250" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    { name: "แลกคะแนนลดราคา", price: 10, point: 100, code: "Point10010" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    { name: "ช้อปครบลดราคา", price: 5, point: 0, code: "Shop1005" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    { name: "DTAC Reward", price: 20, point: 0, code: "Shop1005" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    { name: "DTAC Reward", price: 20, point: 0, code: "Shop1005" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    { name: "DTAC Reward", price: 20, point: 0, code: "Shop1005" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
  ]);
  const frameList = ref([
    {
      name: "ชานม",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/1c/b1/ec/1cb1ec513524b061acd390b872dffedc.jpg",
    },
  ]);

  return { add_on, dialogPromo1, dialogPromo2, frameList, promo };
});
