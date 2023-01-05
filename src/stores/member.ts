import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useMemberStore = defineStore("member", () => {
  const dialog = ref(false);
  const lastMember = 5;
  const members = ref([
    {name: "Paradon", Tel: "0922248886",Point: 20 },
    {name: "Jontapon", Tel: "0877788942", Point: 4 },
    {name: "Mango", Tel: "0815634478",Point: 5 },
    {name: "Marivan",Tel: "0854322211", Point: 6 },
  ]);
  
  return {
    members, dialog
  };
});
