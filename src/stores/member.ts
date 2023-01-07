import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMessageStore } from "./message";

export const useMemberStore = defineStore("member", () => {
  const dialog = ref(false);
  const lastMember = 5;
  const thisMember = ref();
  const IsSerarch = ref(false);
  const msgStore = useMessageStore();
  const members = ref([
    { id: 1, name: "Paradon", Tel: "0922248886", Point: 20 },
    { id: 2, name: "Jontapon", Tel: "0877788942", Point: 4 },
    { id: 3, name: "Mango", Tel: "0815634478", Point: 5 },
    { id: 4, name: "Marivan", Tel: "0854322211", Point: 6 },
  ]);

  const AddPoint = (phone: string) => {
    const member = members.value.findIndex((member) => member.Tel === phone);
    members.value[member].Point += 5;
  };

  const findMember = (phone:string)=>{
     return members.value.filter(member=> member.Tel.includes(phone))
  }

  return {
    members,
    dialog,
    thisMember,
    IsSerarch,
    AddPoint,
    findMember
  };
});
