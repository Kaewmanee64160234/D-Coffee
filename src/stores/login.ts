import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type User from "./schema/User";
import { useMessageStore } from "./message";

export const useLoginStore = defineStore("login", () => {
  const dialog = ref(false);
  const dialog2 = ref(false);
  const loginName = ref("");
  const tempPassword = ref("");
  const position = ref("");
  const profile = ref("");
  const msgStore = useMessageStore();
  const isLogin = computed(() => {
    //loginName is not empty
    return loginName.value !== "";
  });
  const users = ref<User[]>([
    {
      id: 1,
      name: "Kanwara",
      login: "owner",
      password: "dcoffee123",
      profile:
        "https://www.newtv.co.th/images/content/ct_20200602101931732.jpg",
    },
    {
      id: 2,
      name: "Nontiya",
      login: "staff",
      password: "dcoffee123",
      profile:
        "https://t1.blockdit.com/photos/2021/01/60043d517d8b660cf984bfe1.jpg",
    },
    {
      id: 3,
      name: "Jinda",
      login: "staff",
      password: "dcoffee123",
      profile:
        "https://www.thebangkokinsight.com/wp-content/uploads/2020/05/batch_1-34.jpg",
    },
  ]);

  const login = (userName: string, password: string) => {
    const findUser = users.value.findIndex((user) => user.name === userName);
    if (findUser !== -1) {
      const checkPass = users.value.findIndex((user) => user.name === userName);
      if (password !== users.value[checkPass].password) {
        msgStore.showMessage("Passwords do not match");
        return false;
      }
    } else {
      msgStore.showMessage("User not found");
      return false;
    }
    loginName.value = userName;
    position.value = users.value[findUser].login;
    profile.value = users.value[findUser].profile;
    localStorage.setItem("loginName", userName);
    localStorage.setItem("position", position.value);
    localStorage.setItem("profile",profile.value)
    return true;
  };
  const logout = () => {
    loginName.value = "";
    localStorage.removeItem("loginName");
    localStorage.removeItem("position");

  };

  const loadData = () => {
    loginName.value = localStorage.getItem("loginName") || "";
    position.value = localStorage.getItem("position") || "";
  };

  const forgetPassword = (name: string) => {
    const findUser = users.value.findIndex((user) => user.name === name);
    if (findUser !== -1) {
      tempPassword.value = users.value[findUser].password;
      dialog.value = false;
      dialog2.value = true;
      msgStore.message = "";

      // console.log(tempPassword.value)
    } else {
      tempPassword.value = "";
      dialog.value = false;
      msgStore.showMessage("Not found Your name in DB");

      // console.log("error user not found")
    }
  };

  return {
    loginName,
    isLogin,
    login,
    logout,
    loadData,
    dialog2,
    dialog,
    users,
    tempPassword,
    forgetPassword,
    position,profile

  };
});