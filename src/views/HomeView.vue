<script setup lang="ts">
import { mdiHome, mdiAccountMultiple, mdiBasketOutline, mdiLogoutVariant, mdiAccountCircle, mdiArchivePlus, mdiClipboardList, mdiAccountTie } from "@mdi/js"
import PromotionDialog from '@/components/PromotionDialog.vue';
import AddmemberDialog from "@/components/AddmemberDialog.vue";
import { useLoginStore } from "@/stores/login";
import MenuCard from "@/components/MenuCard.vue";
import { useMenuStore } from "@/stores/menu";
const menuStore = useMenuStore();
const framList = menuStore.frameList;
const loginStore = useLoginStore();

</script>

<template>
  <v-app>
    <v-navigation-drawer expand-on-hover rail permanent>
      <v-list>

        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          :title="loginStore.loginName + ` (` + loginStore.position + `)`"
          :subtitle="loginStore.loginName + `@gmail.com`"></v-list-item>

      </v-list>

      <v-divider></v-divider>


      <v-list density="compact" nav>
        <v-list-item :prepend-icon="mdiHome" title="Main Menu" value="myfiles"></v-list-item>
        <v-list-item :prepend-icon="mdiBasketOutline" title="Point of Sale" value="point of sale"></v-list-item>
        <v-list-item :prepend-icon="mdiArchivePlus" title="stock" value="stock"></v-list-item>
        <v-list-item :prepend-icon="mdiAccountMultiple" title="Customer" value="Customer"></v-list-item>
        <v-list-item :prepend-icon="mdiClipboardList" title="List" value="List"></v-list-item>
        <v-list-item :prepend-icon="mdiAccountTie" title="Employee" value="Employee"></v-list-item>
        <v-list-item :prepend-icon="mdiAccountCircle" title="User" value="User"></v-list-item>
        <v-list-item :prepend-icon="mdiLogoutVariant" title="Logout" value="Logout"
          @click="loginStore.logout"></v-list-item>

      </v-list>
    </v-navigation-drawer>




      <v-app-bar absolute color="#6A76AB" dark shrink-on-scroll prominent fade-img-on-scroll
        scroll-target="#scrolling-techniques-3">
        <template v-slot:img="{ props }">
          <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title>Point of sell</v-app-bar-title>

      </v-app-bar>

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

      <!-- <table>
        <tr>
          <td colspan="2">

          </td>
        </tr>
        <tr class="contain-main-page">
          <td class="menu-left">
            <div>
        <tr>

          <td class="col-lg-6">
            <div class="col-md-4 mb-2 mt-4" v-for="item in framList" :key="item.img">
              <MenuCard :name="item.name" :cost="item.cost" type="" :img="item.img"></MenuCard>
            </div>
          </td>

        </tr>
        </div>

        </td>
        <td class="menu-right">
          <tr class="list">
            <h1>list</h1>
            <h1>list</h1>
            <h1>list</h1>

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
              <div class="col-md-12">
                <PromotionDialog />
                <AddmemberDialog />
                <v-btn>Menu</v-btn>
                <v-btn>Menu</v-btn>
              </div>

            </td>

          </tr>
        </td>
        </tr>
      </table> -->

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
  margin-left: 4vw;
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