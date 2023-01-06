import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMessageStore } from "./message";

export const useMemberStore = defineStore("member", () => {
  const dialog = ref(false);
  const lastMember = 5;
  const thisMember = ref();
  const msgStore = useMessageStore();
  const members = ref([
    {name: "Paradon", Tel: "0922248886",Point: 20 },
    {name: "Jontapon", Tel: "0877788942", Point: 4 },
    {name: "Mango", Tel: "0815634478",Point: 5 },
    {name: "Marivan",Tel: "0854322211", Point: 6 },
  ]);

  const findPhoneNmber = (number:string)=>{
    const member = members.value.findIndex(member => member.Tel === number);
    if(member!==-1){
      thisMember.value = members.value[member]

    }else{
msgStore.showMessage("Not found member " + number);
    }

  }
  
  return {
    members, dialog,thisMember
  };
});
