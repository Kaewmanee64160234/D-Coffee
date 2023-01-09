import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useEditStore = defineStore("edit", () => {
  const dialog1= ref(false);
  const dialog2= ref(false);
  const dialog3= ref(false);
  return {
    dialog1,dialog2,dialog3
  };
});