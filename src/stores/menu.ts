import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", () => {
  const dialogPromo1 = ref(false);
  const dialogPromo2 = ref(false);
  const promo = ref([
    { id:1,name: "แฮปปี้รับแต้ม", price: 0, point: 50, code: "HAPPY250" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    { id:2,name: "แลกคะแนนลดราคา", price: 10, point: 100, code: "Point10010" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    { id:3,name: "ช้อปครบลดราคา", price: 5, point: 0, code: "Shop1005" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    { id:4,name: "DTAC Reward", price: 20, point: 0, code: "Shop1005" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    { id:5,name: "DTAC Reward", price: 20, point: 0, code: "Shop1005" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    { id:6,name: "DTAC Reward", price: 20, point: 0, code: "Shop1005" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    {id:1, name: "แฮปปี้รับแต้ม", price: 0, point: 50, code: "HAPPY250" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    {id:2, name: "แลกคะแนนลดราคา", price: 10, point: 100, code: "Point10010" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    {id:3, name: "ช้อปครบลดราคา", price: 5, point: 0, code: "Shop1005" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
    {id:4, name: "DTAC Reward", price: 20, point: 0, code: "Shop1005" ,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"},
  ]);
  const checkCode = (idCode: number)=>{
    const correctCode = promo.value.findIndex(code => code.id === idCode );
     realCode.value =   promo.value[correctCode].code


  }

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
      name: "1ชานม",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/1c/b1/ec/1cb1ec513524b061acd390b872dffedc.jpg",
    },
    {
      name: "2ชานม",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/f8/0d/5b/f80d5b2c4a7b02dd7e00be5442c7a48a.jpg",
    },
    {
      name: "3ชาเขียว",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/3f/8a/1f/3f8a1f1fc200b0193e3e8d0c101c1ae7.jpg",
    },
    {
      name: "4ชานม",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/b0/56/7b/b0567b1b25758dd994d504d0cb70ffa4.jpg",
    },
    {
      name: "5ชานม",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/2a/91/89/2a9189358ced7d6349dcacd55cbe5dbb.jpg",
    },
    {
      name: "6ชานม",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/68/e1/f7/68e1f7de1ed0d43e1f7c7b22f66dc292.jpg",
    },
    {
      name: "7ชานม",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/32/7a/b8/327ab814e381828041d11c1eefc236b7.jpg",
    },
    {
      name: "8ชานม",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/35/a3/dd/35a3dd4d5a3ecf940c3abf5eb2b9abd1.jpg",
    },
    {
      name: "9ชานม",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/b6/2d/a6/b62da6aa1fa8fec5af27734cdd9ce864.jpg",
    },
    {
      name: "10เนื้อ",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/13/11/16/131116d2edaf45cab88b03f418f167c0.jpg",
    },
    {
      name: "11ชานม",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/86/7c/c0/867cc03586802e08b76789ac9d26fa41.jpg",
    },
    {
      name: "12ชานม",
      type: "food",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/e1/3e/38/e13e38c0fda6757a5ee8ce40283d37cd.jpg",
    },

    {
      name: "13ฮอทด็อก",
      type: "snack",
      cost: "ราคา 40 บาท",
      img: "https://i.pinimg.com/736x/3e/3b/09/3e3b09a49ba53db4ff4f1f6b2d7181bf.jpg",
    },
    {
      name: "14คอนด็อกไส้กรอก",
      type: "snack",
      cost: "ราคา 30 บาท",
      img: "https://i.pinimg.com/564x/07/a8/b2/07a8b222002e9467fca80f2293df6129.jpg",
    },
    {
      name: "15คิมบับ",
      type: "snack",
      cost: "ราคา 40 บาท",
      img: "https://i.pinimg.com/564x/f0/af/2c/f0af2c3be578ea8ec46ac0cc00045059.jpg",
    },
    {
      name: "16เกี๊ยวซ่า",
      type: "snack",
      cost: "ราคา 35 บาท",
      img: "https://i.pinimg.com/564x/89/9a/70/899a70e278d3d232077e189d353c3b89.jpg",
    },
    {
      name: "17เกี๊ยว1",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/d3/0d/62/d30d621dfa2b5c913905b0554c466f05.jpg",
    },
    {
      name: "18เนื้อ",
      type: "food",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/e5/76/b4/e576b4ac846db4df16b9d2a4479c999d.jpg",
    },
    {
      name: "19เนื้อ",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/02/ba/94/02ba94ec930dab2c788b437581e40013.jpg",
    },
    {
      name: "20เฟรนฟราย",
      type: "ขนม",
      cost: "ราคา 30 บาท",
      img: "https://i.pinimg.com/564x/18/37/a3/1837a3c701df77e2ea26747f8a4c8cdb.jpg",
    },
    {
      name: "21เนื้อ",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/d9/e1/48/d9e148eef5734fcbcc7d00bf4d2b0a58.jpg",
    },
    {
      name: "22เนื้อ",
      type: "food",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/01/8b/15/018b15acf9ba5793c1b2ec076a27e48a.jpg",
    },
    {
      name: "23เนื้อ",
      type: "food",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/3e/0b/58/3e0b5845df5de62b17bce0352bb69f6a.jpg",
    },
    {
      name: "24เนื้อ",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/ea/89/00/ea8900ab7034ee0357126b1c3f4ff05c.jpg",
    },
    {
      name: "25เนื้อ",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/e6/cd/e9/e6cde9e088ce25e692f970ad283c6414.jpg",
    },
    {
      name: "26เนื้อ",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/34/07/70/340770007b0cb242ffe7c5e4f35c861b.jpg",
    },

    {
      name: "27ข้าวผัดกิมจิ",
      type: "food",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/c7/7a/d0/c77ad01ee73b5a1d380b68d5947b876c.jpg",
    },
    {
      name: "28เนื้อ",
      type: "food",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/cb/93/97/cb9397508ea1fc58bc3b9e7971375dab.jpg",
    },
    {
      name: "29เนื้อ",
      type: "food",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/b7/b6/32/b7b63212557e2518b55d0198a333d428.jpg",
    },
    {
      name: "30เนื้อ",
      type: "food",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/8b/a3/bb/8ba3bb4424f579fc042f224cd8b39c03.jpg",
    },
    {
      name: "31เนื้อ",
      type: "food",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/02/3d/74/023d745e6cca9a4d56ddcaccc44eeee1.jpg",
    },
    {
      name: "32เนื้อ",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/38/2a/af/382aaf9ec02139eff472d9b0e5aefeba.jpg",
    },

    {
      name: "33เนื้อ",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/e2/6b/0b/e26b0bf1c5e82b7359bcc2264cba6986.jpg",
    },
    {
      name: "34เนื้อ",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/40/4f/09/404f0998fc39d66208ed1afdfe4d1ed6.jpg",
    },
    {
      name: "35เนื้อ",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/ce/00/37/ce00376faf268d187db771b03a6630fd.jpg",
    },
    {
      name: "36เนื้อ",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/5b/fd/4c/5bfd4cb5ab79d55fe562616cb37c075d.jpg",
    },
    {
      name: "37เนื้อ",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/f4/94/60/f49460cfe80a183fdd8a52ec3c4d8a4d.jpg",
    },

    {
      name: "38เนื้อ",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/b7/c5/69/b7c569c31f8b0786da01603a5e9128f3.jpg",
    },
    {
      name: "39เนื้อ",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/49/2c/50/492c504b621614e212432fc67c10a894.jpg",
    },
    {
      name: "40เนื้อ",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/f6/31/78/f63178eee108b64bcb077a23f85c4e19.jpg",
    },
    {
      name: "41เนื้อ",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/80/8c/74/808c74bd4ddcc19c68714c9f31675e68.jpg",
    },
    {
      name: "42เนื้อ",
      type: "snack",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/99/3b/dd/993bdd5119af769065a058a5030b14eb.jpg",
    },
    {
      name: "43เนื้อ",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/40/1a/31/401a312ab931c498e7424644d4e0ddfd.jpg",
    },
    {
      name: "44เนื้อ",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/b4/75/65/b4756508111baaa7bc857ce0d2b960c2.jpg",
    },
    {
      name: "45เนื้อ",
      type: "drink",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/13/11/16/131116d2edaf45cab88b03f418f167c0.jpg",
    },
    {
      name: "45เนื้อ",
      type: "อาหาร",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/736x/13/11/16/131116d2edaf45cab88b03f418f167c0.jpg",
    },
    {
      name: "46ไข่กระทะ",
      type: "อาหาร",
      cost: "ราคา 40 บาท",
      img: "https://i.pinimg.com/564x/c0/d4/9e/c0d49ebd6402929b95c825b76474d1f3.jpg",
    },
    {
      name: "47นักเก็ตไก่",
      type: "อาหาร",
      cost: "ราคา 30 บาท",
      img: "https://i.pinimg.com/564x/64/f4/40/64f4400d5c1f141a791984f07bddcb90.jpg",
    },
    {
      name: "48เนื้อ",
      type: "อาหาร",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/40/1a/31/401a312ab931c498e7424644d4e0ddfd.jpg",
    },
    {
      name: "49เนื้อ",
      type: "อาหาร",
      cost: "ราคา 10 บาท",
      img: "https://i.pinimg.com/564x/b4/75/65/b4756508111baaa7bc857ce0d2b960c2.jpg",
    },

  ]);
  return { add_ons, dialogPromo1, dialogPromo2, frameList, promo,checkCode ,realCode};
});