<script setup lang="ts">
import { mdiHome, mdiAccountMultiple, mdiBasketOutline, mdiLogoutVariant, mdiAccountCircle, mdiArchivePlus, mdiClipboardList, mdiAccountTie } from "@mdi/js"
import PromotionDialog from '@/components/PromotionDialog.vue';
import AddmemberDialog from "@/components/AddmemberDialog.vue";
import { useLoginStore } from "@/stores/login";
import MenuCard from "@/components/MenuCard.vue";
import {useCartStore } from "@/stores/cart"
import FindUser from "@/components/FindUser.vue";
import ListComponent from "@/components/ListComponent.vue";
import { ref } from "vue";
import { useMenuStore } from "@/stores/menu";
const loginStore = useLoginStore();
const cartStore = useCartStore();
const drawer  = ref(false);
const menuStore = useMenuStore();
const framList = menuStore.frameList;

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


      <v-list density="compact" nav>
        <v-list-item :prepend-icon="mdiHome" title="Main Menu" value="myfiles"></v-list-item>
        <v-list-item :prepend-icon="mdiBasketOutline" title="Point of Sale" value="point of sale"></v-list-item>
        <v-list-item :prepend-icon="mdiArchivePlus" title="stock" value="stock"></v-list-item>
        <v-list-item :prepend-icon="mdiAccountMultiple" title="Customer" value="Customer"></v-list-item>
        <v-list-item :prepend-icon="mdiClipboardList" title="List" value="List"></v-list-item>
        <v-list-item :prepend-icon="mdiAccountTie" title="Employee" value="Employee"></v-list-item>
        <v-list-item :prepend-icon="mdiAccountCircle " title="User" value="User"></v-list-item>
        <v-list-item :prepend-icon="mdiLogoutVariant " title="Logout" value="Logout" @click="loginStore.logout"></v-list-item>
      </v-list>
    </v-navigation-drawer>

      <div class="content-area">
        <div class="sidebar"></div>
        <div class="topbar"></div>
        <div class="content">
          <div class="row">
            <div class="col-md-6 item-side">
              <div class="row">
                <div class="col-md-4 mb-2 mt-4" v-for="item in framList" :key="item.img">
                  <MenuCard :name="item.name" :cost="item.cost" type="" :img="item.img"></MenuCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  </v-app>

</template>
<style scoped>
.content-area{
  margin-left: 70px;
  margin-top: 70px;
}
.layout {
  height: 100vh;
  width: 100%;
  max-width: 1440px;
}
.item-side{
  max-height: 660px;
  overflow: scroll;
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