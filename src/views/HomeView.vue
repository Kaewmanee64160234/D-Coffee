<script setup lang="ts">
import { mdiHome, mdiAccountMultiple, mdiBasketOutline, mdiLogoutVariant, mdiAccountCircle, mdiArchivePlus, mdiClipboardList, mdiAccountTie } from "@mdi/js"
import PromotionDialog from '@/components/PromotionDialog.vue';
import AddmemberDialog from "@/components/AddmemberDialog.vue";
import { useLoginStore } from "@/stores/login";
import MenuCard from "@/components/MenuCard.vue";
import { useMenuStore } from "@/stores/menu";
import FindUser from "@/components/FindUser.vue";

import ListComponent from "@/components/ListComponent.vue";
import { ref } from "vue";

const menuStore = useMenuStore();
const framList = menuStore.frameList;
const loginStore = useLoginStore();
const drawer  = ref(false);

</script>

<template>
  <v-app>
    <v-app-bar
    color="primary"
    prominent
  >
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Point Of Sale</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn variant="text" icon="mdi-magnify"></v-btn>

    <v-btn variant="text" icon="mdi-filter"></v-btn>

    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
  </v-app-bar>

    <v-navigation-drawer  v-model="drawer" temporary location="left" permanent>
      <v-list>
      
        
        <v-list-item :prepend-avatar="loginStore.profile" :title="loginStore.loginName + ` (`+loginStore.position+`)`"
          :subtitle="loginStore.loginName+`@gmail.com`">
         
         
        </v-list-item>

      </v-list>

      <v-divider></v-divider>


      <v-list  density="compact" nav>
        <v-list-item :prepend-icon="mdiHome " title="Main Menu" value="myfiles"></v-list-item>
        <v-list-item :prepend-icon="mdiBasketOutline" title="Point of Sale" value="point of sale"></v-list-item>
        <v-list-item :prepend-icon="mdiArchivePlus " title="stock" value="stock"></v-list-item>
        <v-list-item :prepend-icon="mdiAccountMultiple" title="Customer" value="Customer"></v-list-item>
        <v-list-item :prepend-icon="mdiClipboardList " title="List" value="List"></v-list-item>
        <v-list-item :prepend-icon="mdiAccountTie" title="Employee" value="Employee"></v-list-item>
        <v-list-item :prepend-icon="mdiAccountCircle " title="User" value="User"></v-list-item>
        <v-list-item :prepend-icon="mdiLogoutVariant " title="Logout" value="Logout" @click="loginStore.logout"></v-list-item>
    
      </v-list>
    </v-navigation-drawer>
    <main>

      <table class="layout">
        <tr class="title-page">
          <td colspan="2">
            <h1>POint of sale</h1>


          </td>
        </tr>
        <tr class="contain-main-page">
          <td class="menu-left">
            <div class="col-md-4 mb-2 mt-4" v-for="item in framList" :key="item.img">
              <MenuCard :name="item.name" :cost="item.cost" type="" :img="item.img"></MenuCard>
            </div>

          </td>
          <td class="menu-right">
        <tr class="list">

          <ListComponent/>

        </tr>
        <tr class="cal-member">
          <td class="cal">

            <h1>Cal</h1>
            <h1>Cal</h1>
            <h1>Cal</h1>
            <h1>Cal</h1>

          </td>
          <td class="find-member">
            <h1>find Member</h1>

          </td>
        </tr>
        <tr class="group-button">
          <td colspan="2">
            <div>
              <PromotionDialog />
            <FindUser/>
            <AddmemberDialog />
              <v-btn>Menu</v-btn>
            </div>

          </td>

        </tr>
        </td>
        </tr>
      </table>

    </main>
  </v-app>

</template>
<style scoped>
.layout {
  height: 100vh;
  width: 100%;
  max-width: 1440px;
}

tr,
td {
  border: 1px solid rgb(211, 211, 211);

}

.title-page {
  height: 20%;
  background-color: rgba(170, 113, 72, 0.5);
}

.contain-main-page {
  height: 80%;
}

.menu-right,
.menu-left {
  width: 50%;
  background-color: rgb(212, 203, 168);
}

.list {
  height: 50%;
  width: 100%;
}

.cal-member {
  height: 70%;
  width: 100vw;

}

.cal {
  width: 100%;
}

.find-member {
  width: 30%;
  width: 100vw;


}

.group-button {

  height: 20%;
}
</style>