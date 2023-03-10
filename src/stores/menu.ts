import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useOrderStore } from "./order";
export const useMenuStore = defineStore("menu", () => {
  const dialogPromo1 = ref(false);
  const dialogPromo2 = ref(false);
  const menuSelected = ref();
  const dicount = ref(0);
  const orderStore = useOrderStore();
  const promo = ref([
    {
      id: 1,
      name: "แฮปปี้รับแต้ม",
      price: 0,
      point: 50,
      code: "HAPPY250",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png",
    },
    {
      id: 2,
      name: "แลกคะแนนลดราคา",
      price: 10,
      point: 100,
      code: "Point10010",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png",
    },
    {
      id: 3,
      name: "ช้อปครบลดราคา",
      price: 5,
      point: 0,
      code: "Shop1005",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png",
    },
    {
      id: 4,
      name: "DTAC Reward",
      price: 20,
      point: 0,
      code: "Shop1005",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png",
    },
    {
      id: 5,
      name: "DTAC Reward",
      price: 20,
      point: 0,
      code: "Shop1005",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png",
    },
    {
      id: 6,
      name: "DTAC Reward",
      price: 20,
      point: 0,
      code: "Shop1005",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png",
    },
  ]);
  const checkCode = (idCode: number) => {
    const correctCode = promo.value.findIndex((code) => code.id === idCode);
    realCode.value = promo.value[correctCode].code;
    dicount.value = promo.value[correctCode].price;
  };
  const realCode = ref("");
  const add_ons = ref([
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
  const frameList = ref([
    {
      name: "Americano",
      type: "drink",
      cost: "ราคา 55 บาท",
      price: 55,
      img: "https://i.pinimg.com/564x/15/73/f2/1573f22afad0b6eb64074ab9dc89683f.jpg",
    
    },
    {
      name: "Latte coffee",
      type: "drink",
      cost: "ราคา 60 บาท",
      price: 60,
      img: "https://i.pinimg.com/564x/38/4e/60/384e6075849ba6118d07f523a75814ca.jpg",
    },
    {
      name: "Mocha coffee ",
      type: "drink",
      cost: "ราคา 65 บาท",
      price: 65,
      img: "https://i.pinimg.com/564x/e2/83/d7/e283d71bff5d804cc77231dc1344e0b4.jpg",
    },
    {
      name: "Espresso coffee ",
      type: "drink",
      cost: "ราคา 65 บาท",
      price: 65,
      img: "https://i.pinimg.com/564x/88/ca/da/88cadae1f3e3ab64562be99d98ca6427.jpg",
    },
    {
      name: "Cocoa",
      type: "drink",
      cost: "ราคา 45 บาท",
      price: 45,
      img: "https://i.pinimg.com/564x/8a/7d/1d/8a7d1d5d1b3663201c14e95869eaa6bd.jpg",
    },
    {
      name: "ชาแอปเปิ้ล",
      type: "drink",
      cost: "ราคา 30 บาท",
      price: 30,
      img: "https://i.pinimg.com/736x/b4/75/65/b4756508111baaa7bc857ce0d2b960c2.jpg",
    },
    {
      name: "ชาแดง",
      type: "drink",
      cost: "ราคา 30 บาท",
      price: 30,
      img: "https://i.pinimg.com/564x/d9/d6/d6/d9d6d6fb6562614001778a2ebbafe8bd.jpg",
    },
    {
      name: "ชาเขียว",
      type: "drink",
      cost: "ราคา 35 บาท",
      price: 35,
      img: "https://i.pinimg.com/564x/86/7c/c0/867cc03586802e08b76789ac9d26fa41.jpg",
    },
    {
      name: "ชาอู่หลง",
      type: "drink",
      cost: "ราคา 40 บาท",
      price: 40,
      img: "https://i.pinimg.com/564x/21/8d/90/218d90cd96b36e40ffd371602a9219d2.jpg",
    },
    {
      name: "ชาเบอร์รี่",
      type: "drink",
      cost: "ราคา 30 บาท",
      price: 30,
      img: "https://i.pinimg.com/564x/13/11/16/131116d2edaf45cab88b03f418f167c0.jpg",
    },
    {
      name: "ชาไทย",
      type: "drink",
      cost: "ราคา 30 บาท",
      price: 30,
      img: "https://i.pinimg.com/564x/75/26/ca/7526cacce7b5d84e535057f4ad0025d9.jpg",
    },
    {
      name: "ชานมไต้หวัน",
      type: "drink",
      cost: "ราคา 35 บาท",
      price: 35,
      img: "https://i.pinimg.com/564x/41/c9/b1/41c9b1867b7ee80f0a1d8cd6a0dd6e5b.jpg",
    },
    {
      name: "ชาเขียวมัทฉะ",
      type: "drink",
      cost: "ราคา 45 บาท",
      price: 45,
      img: "https://i.pinimg.com/564x/8e/ff/53/8eff539c6338eb09c3609ade1328f13e.jpg",
    },
    {
      name: "ชามะนาว",
      type: "drink",
      cost: "ราคา 40 บาท",
      price: 40,
      img: "https://i.pinimg.com/564x/5f/4f/40/5f4f40237dfd4b86514cdaa15227a2f8.jpg",
    },
    {
      name: "บลูฮาวาย อิตาเลี่ยนโซดา",
      type: "drink",
      cost: "ราคา 30 บาท",
      price: 30,
      img: "https://i.pinimg.com/564x/f8/0d/5b/f80d5b2c4a7b02dd7e00be5442c7a48a.jpg",
    },
    {
      name: "สตรอว์เบอร์รี่ อิตาเลี่ยนโซดา",
      type: "drink",
      cost: "ราคา 30 บาท",
      price: 30,
      img: "https://i.pinimg.com/564x/6b/7b/0f/6b7b0f5930adca1c3fdcf3f74d7a9b42.jpg",
    },
    {
      name: "มะนาวโซดา",
      type: "drink",
      cost: "ราคา 35 บาท",
      price: 35,
      img: "https://i.pinimg.com/564x/2e/11/7d/2e117d0ebdd79649a9f31e294b9c28ef.jpg",
    },

    {
      name: "แอปเปิ้ลโซดา",
      type: "drink",
      cost: "ราคา 35 บาท",
      price: 35,
      img: "https://i.pinimg.com/564x/3c/42/fa/3c42fa7fdc537ef3b3aa10870f8c1ca6.jpg",
    },
    {
      name: "น้ำแดงมะนาวโซดา",
      type: "drink",
      cost: "ราคา 40 บาท",
      price: 40,
      img: "https://i.pinimg.com/564x/2f/26/c5/2f26c5cc94e980d374d78d0c828b6d3a.jpg",
    },
    {
      name: "น้ำแดงโซดา",
      type: "drink",
      cost: "ราคา 35 บาท",
      price: 35,
      img: "https://i.pinimg.com/564x/d5/ed/e0/d5ede082ba3272b1c87ac456a2af11e8.jpg",
    },
    {
      name: "น้ำผลไม้รวมโซดา",
      type: "drink",
      cost: "ราคา 35 บาท",
      price: 35,
      img: "https://i.pinimg.com/564x/52/51/4f/52514f5fce867c48cec4ab745cc9f2d7.jpg",
    },
    {
      name: "บลูเบอร์รี่โซดา",
      type: "drink",
      cost: "ราคา 35 บาท",
      price: 35,
      img: "https://i.pinimg.com/564x/c3/0a/00/c30a00f7ad9b8f7eaa145110efab1c52.jpg",
    },
    {
      name: "กีวี่โซดา",
      type: "drink",
      cost: "ราคา 35 บาท",
      price: 35,
      img: "https://i.pinimg.com/564x/2e/1a/08/2e1a082d56c7957964cd387684d124c1.jpg",
    },
    {
      name: "สตอว์เบอร์รี่สมูทตี้",
      type: "drink",
      cost: "ราคา 40 บาท",
      price: 40,
      img: "https://i.pinimg.com/564x/49/2c/50/492c504b621614e212432fc67c10a894.jpg",
    },
    {
      name: "บลูเบอร์รี่สมูทตี้",
      type: "drink",
      cost: "ราคา 40 บาท",
      price: 40,
      img: "https://i.pinimg.com/564x/b7/c5/69/b7c569c31f8b0786da01603a5e9128f3.jpg",
    },
    {
      name: "เชอร์รี่สมูทตี้",
      type: "drink",
      cost: "ราคา 45 บาท",
      price: 45,
      img: "https://i.pinimg.com/564x/ce/f6/ed/cef6ede822ce1ad2d4bb0fdb66d64efe.jpg",
    },
    {
      name: "สตอเบอร์รี่โยเกิร์ตสมูทตี้",
      type: "drink",
      cost: "ราคา 45 บาท",
      price: 45,
      img: "https://i.pinimg.com/564x/ff/e4/1a/ffe41a8c1f50e5932b5539a4d4128aee.jpg",
    },
    {
      name: "ผักสมูทตี้",
      type: "drink",
      cost: "ราคา 45 บาท",
      price: 45,
      img: "https://i.pinimg.com/564x/3f/8a/1f/3f8a1f1fc200b0193e3e8d0c101c1ae7.jpg",
    },
    {
      name: "มะม่วงสมูทตี้",
      type: "drink",
      cost: "ราคา 40 บาท",
      price: 40,
      img: "https://i.pinimg.com/564x/bc/91/c7/bc91c7d3e0badaaee9f4f45cd82de68d.jpg",
    },
    {
      name: "swiss roll",
      type: "snack",
      cost: "ราคา 40 บาท",
      price: 40,
      img: "https://i.pinimg.com/564x/e6/cd/e9/e6cde9e088ce25e692f970ad283c6414.jpg",
    },
    {
      name: "macarons",
      type: "snack",
      cost: "ราคา 60 บาท",
      price: 60,
      img: "https://i.pinimg.com/564x/34/07/70/340770007b0cb242ffe7c5e4f35c861b.jpg",
    },
    {
      name: "chocolate cake",
      type: "snack",
      cost: "ราคา 40 บาท",
      price: 40,
      img: "https://i.pinimg.com/736x/38/2a/af/382aaf9ec02139eff472d9b0e5aefeba.jpg",
    },

    {
      name: "cup cake",
      type: "snack",
      cost: "ราคา 30 บาท",
      price: 30,
      img: "https://i.pinimg.com/564x/e2/6b/0b/e26b0bf1c5e82b7359bcc2264cba6986.jpg",
    },
    {
      name: "pudding stawberry",
      type: "snack",
      cost: "ราคา 40 บาท",
      price: 40,
      img: "https://i.pinimg.com/564x/40/4f/09/404f0998fc39d66208ed1afdfe4d1ed6.jpg",
    },
    {
      name: "croissant ",
      type: "snack",
      cost: "ราคา 70 บาท",
      price: 55,
      img: "https://i.pinimg.com/736x/f4/94/60/f49460cfe80a183fdd8a52ec3c4d8a4d.jpg",
    },
    {
      name: "cookies chocchip ",
      type: "snack",
      cost: "ราคา 30 บาท",
      price: 30,
      img: "https://i.pinimg.com/736x/99/3b/dd/993bdd5119af769065a058a5030b14eb.jpg",
    },
    {
      name: "brownies",
      type: "snack",
      cost: "ราคา 30 บาท",
      price: 30,
      img: "https://i.pinimg.com/564x/2e/b4/74/2eb474d43d1c2ef1bc33fbabe22e541d.jpg",
    },
    {
      name: "strawberry shortcake",
      type: "snack",
      cost: "ราคา 35 บาท",
      price: 35,
      img: "https://i.pinimg.com/564x/d3/f4/7c/d3f47ce0925b20761303feec962d9b9a.jpg",
    },
    {
      name: "donut",
      type: "snack",
      cost: "ราคา 35 บาท",
      price: 35,
      img: "https://i.pinimg.com/564x/8b/d7/06/8bd70673dd81f5455951cb428c7abe5b.jpg",
    },
    {
      name: "blueberry cheesecake",
      type: "snack",
      cost: "ราคา 35 บาท",
      price: 35,
      img: "https://i.pinimg.com/564x/c8/dd/47/c8dd4747076243a33f4976c38feab1d3.jpg",
    },
    {
      name: "ซาลาเปาไส้ครีม",
      type: "snack",
      cost: "ราคา 35 บาท",
      price: 35,
      img: "https://i.pinimg.com/736x/e1/3e/38/e13e38c0fda6757a5ee8ce40283d37cd.jpg",
    },
    {
      name: "นักเก็ตไก่",
      type: "food",
      cost: "ราคา 30 บาท",
      price: 55,
      img: "https://i.pinimg.com/564x/64/f4/40/64f4400d5c1f141a791984f07bddcb90.jpg",
    },
    {
      name: "hotdog",
      type: "snack",
      cost: "ราคา 40 บาท",
      price: 40,
      img: "https://i.pinimg.com/736x/3e/3b/09/3e3b09a49ba53db4ff4f1f6b2d7181bf.jpg",
    },
    {
      name: "คอนด็อกไส้กรอก",
      type: "snack",
      cost: "ราคา 30 บาท",
      price: 30,
      img: "https://i.pinimg.com/564x/07/a8/b2/07a8b222002e9467fca80f2293df6129.jpg",
    },
    {
      name: "เกี๊ยวซ่า",
      type: "snack",
      cost: "ราคา 35 บาท",
      price: 35,
      img: "https://i.pinimg.com/564x/89/9a/70/899a70e278d3d232077e189d353c3b89.jpg",
    },
    {
      name: "เฟรนฟราย",
      type: "snack",
      cost: "ราคา 30 บาท",
      price: 30,
      img: "https://i.pinimg.com/564x/18/37/a3/1837a3c701df77e2ea26747f8a4c8cdb.jpg",
    },
    {
      name: "คิมบับ",
      type: "food",
      cost: "ราคา 40 บาท",
      price: 40,
      img: "https://i.pinimg.com/564x/f0/af/2c/f0af2c3be578ea8ec46ac0cc00045059.jpg",
    },

    {
      name: "ข้าวผัดกิมจิ",
      type: "food",
      cost: "ราคา 40 บาท",
      price: 40,
      img: "https://i.pinimg.com/736x/c7/7a/d0/c77ad01ee73b5a1d380b68d5947b876c.jpg",
    },
    {
      name: "ไข่กระทะ",
      type: "food",
      cost: "ราคา 40 บาท",
      price: 40,
      img: "https://i.pinimg.com/564x/c0/d4/9e/c0d49ebd6402929b95c825b76474d1f3.jpg",
    },
  ]);
  const menuFilter = (type: string) => {
    if (type === "") {
      type = "drink";
    }
    const selectMenu = frameList.value.filter((menu) => menu.type === type);
    return (menuSelected.value = selectMenu);
  };

  return {
    add_ons,
    dialogPromo1,
    dialogPromo2,
    frameList,
    promo,
    checkCode,
    realCode,
    menuFilter,
    menuSelected,
    dicount,
  };
});
