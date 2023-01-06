import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type User from "./schema/User";

export const useLoginStore = defineStore("login", () => {
  const dialog = ref(false);
  const dialog2 = ref(false);
  const loginName = ref("");
  const tempPassword = ref("");
  const isLogin = computed(() => {
    //loginName is not empty
    return loginName.value !== "";
  });
  const users = ref([{id:1,name:"Kanwara",login:"owner",password:"dcoffee123",profile: "https://www.newtv.co.th/images/content/ct_20200602101931732.jpg"},
  {id:2,name:"Nontiya",login:"staff",password:"dcoffee123",profile:"https://t1.blockdit.com/photos/2021/01/60043d517d8b660cf984bfe1.jpg"},
  {id:3,name:"Jinda",login:"staff",password:"dcoffee123",profile:"https://www.thebangkokinsight.com/wp-content/uploads/2020/05/batch_1-34.jpg"}]);

  const login = (userName: string): void => {
    loginName.value = userName;
    localStorage.setItem("loginName", userName);
  };
  const logout = () => {
    loginName.value = "";
    localStorage.removeItem("loginName");
  };

  const loadData = () => {
    loginName.value = localStorage.getItem("loginName") || "";
  };
  

  const forgetPassword = (name:string)=>{

    const findUser = users.value.findIndex(user => user.name === name);
    if(findUser !== -1){
      tempPassword.value =  users.value[findUser].password
      dialog.value = false;
      dialog2.value = true;
      console.log(tempPassword.value)

    }
    else{
      tempPassword.value  = "";
      dialog2.value = false;
      console.log("error user not found")

    }
  }


  return { loginName, isLogin, login, logout, loadData,dialog2, dialog,users,tempPassword,forgetPassword };
});
