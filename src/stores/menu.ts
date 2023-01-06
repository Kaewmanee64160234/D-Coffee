import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", () => {
  const dialogPromo1 = ref(false);
  const dialogPromo2 = ref(false);
  const realCode = ref("");
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
    {id:1, name: "แฮปปี้รับแต้ม", price: 0, point: 50, code: "HAPPY250" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    {id:2, name: "แลกคะแนนลดราคา", price: 10, point: 100, code: "Point10010" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    {id:3, name: "ช้อปครบลดราคา", price: 5, point: 0, code: "Shop1005" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    {id:4, name: "DTAC Reward", price: 20, point: 0, code: "Shop1005" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
  ]);
  const frameList = ref([
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/736x/1c/b1/ec/1cb1ec513524b061acd390b872dffedc.jpg",
      },
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/564x/f8/0d/5b/f80d5b2c4a7b02dd7e00be5442c7a48a.jpg",
      },
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/564x/3f/8a/1f/3f8a1f1fc200b0193e3e8d0c101c1ae7.jpg",
      },
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/736x/b0/56/7b/b0567b1b25758dd994d504d0cb70ffa4.jpg",
      },
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/564x/2a/91/89/2a9189358ced7d6349dcacd55cbe5dbb.jpg",
      },
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/564x/68/e1/f7/68e1f7de1ed0d43e1f7c7b22f66dc292.jpg",
      },
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/564x/32/7a/b8/327ab814e381828041d11c1eefc236b7.jpg",
      },
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/564x/68/e1/f7/68e1f7de1ed0d43e1f7c7b22f66dc292.jpg",
      },
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/564x/68/e1/f7/68e1f7de1ed0d43e1f7c7b22f66dc292.jpg",
      },
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/564x/68/e1/f7/68e1f7de1ed0d43e1f7c7b22f66dc292.jpg",
      },
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/564x/68/e1/f7/68e1f7de1ed0d43e1f7c7b22f66dc292.jpg",
      },
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/564x/68/e1/f7/68e1f7de1ed0d43e1f7c7b22f66dc292.jpg",
      },
  
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/564x/68/e1/f7/68e1f7de1ed0d43e1f7c7b22f66dc292.jpg",
      },
      {
        name: "ชานม",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/564x/68/e1/f7/68e1f7de1ed0d43e1f7c7b22f66dc292.jpg",
      },
      {
        name: "ฮอนด็อก",
        cost: "ราคา 10 บาท",
        img: "https://i.pinimg.com/564x/07/a8/b2/07a8b222002e9467fca80f2293df6129.jpg",
      },
  ]);

  const checkCode = (idCode: number)=>{
    const correctCode = promo.value.findIndex(code => code.id === idCode );
     realCode.value =   promo.value[correctCode].code


  }
  return { add_on, dialogPromo1, dialogPromo2, frameList, promo,checkCode ,realCode};
});
