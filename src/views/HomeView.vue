<script setup lang="ts">
import { mdiHome, mdiAccountMultiple, mdiBasketOutline, mdiLogoutVariant, mdiAccountCircle, mdiArchivePlus, mdiClipboardList, mdiAccountTie } from "@mdi/js"
import PromotionDialog from '@/components/PromotionDialog.vue';
import AddmemberDialog from "@/components/AddmemberDialog.vue";
import { useLoginStore } from "@/stores/login";
import MenuCard from "@/components/MenuCard.vue";
import { useCartStore } from "@/stores/cart"
import FindUser from "@/components/FindUser.vue";
import ListComponent from "@/components/ListComponent.vue";
import { ref } from "vue";
import { useMenuStore } from "@/stores/menu";
const loginStore = useLoginStore();
const cartStore = useCartStore();
const drawer = ref(false);
const menuStore = useMenuStore();
const framList = menuStore.frameList;

</script>

<template>
  <v-app>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Point Of Sale</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn variant="text" icon="mdi-magnify"></v-btn>

      <v-btn variant="text" icon="mdi-filter"></v-btn>

      <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary location="left" permanent>
      <v-list>


        <v-list-item :prepend-avatar="loginStore.profile" :title="loginStore.loginName + ` (` + loginStore.position + `)`"
          :subtitle="loginStore.loginName + `@gmail.com`">


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
        <v-list-item :prepend-icon="mdiAccountCircle" title="User" value="User"></v-list-item>
        <v-list-item :prepend-icon="mdiLogoutVariant" title="Logout" value="Logout"
          @click="loginStore.logout"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div class="content-area">
      <div class="sidebar"></div>
      <div class="topbar"></div>
      <div class="content">
        <div class="row">
          <div class="col-md-6 item-side">
            <div class="row-md-6">
              <v-tabs fixed-tabs background-color="indigo" dark>
                <v-tab @click="menuStore.menuFilter('drink')">
                  เครื่องดื่ม
                </v-tab>
                <v-tab @click="menuStore.menuFilter('food')">
                 อาหาร
                </v-tab>
                <v-tab @click="menuStore.menuFilter('snack')">
                  ของหวาน
                </v-tab>
              </v-tabs>
            </div>
            <div class="row">
              <div class="col-md-3 mb-2 mt-4" v-for="item in menuStore.menuSelected" :key="item.img">
                <MenuCard :name="item.name" :cost="item.cost" :type="'Hello'" :img="item.img" :price="item.price"
                  @click="cartStore.addToCard(item)"></MenuCard>
              </div>
            </div>
          </div>

          <div class="col-md-6 mt-2">
            <div class="table-responsive cart-table">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="text-center">รายการ</th>
                    <th scope="col" class="text-center">ราคา</th>
                    <th scope="col" class="text-center">จำนวน</th>
                    <th scope="col" class="text-center">รวม</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartStore.carts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td class="text-center">{{ item.price }}</td>
                    <td class="text-center">1</td>
                    <td class="text-center">{{ item.price * 1 }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="summary">
              <div class="row">
                <div class="col-md-7">
                  <div class="d-flex justify-content-between">
                    <p class="fw-bold mb-0">ราคารวม :</p>
                    <p class="fw-bold mb-0">2261 บาท</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="fw-bold mb-0">ส่วนลด :</p>
                    <p class="fw-bold mb-0">2261 บาท</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="fw-bold mb-0">ยอดที่ต้องชำระ :</p>
                    <p class="fw-bold mb-0">2261 บาท</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="fw-bold mb-0">ยอดรับชำระ :</p>
                    <p class="fw-bold mb-0">2261 บาท</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="fw-bold mb-0">จำนวนเงินที่ทอน :</p>
                    <p class="fw-bold mb-0">2261 บาท</p>
                  </div>
                </div>
                
                <div class="col-md-5">
                  <span class="fw-bold mt-2">ระบุจำนวนเงินที่ได้รับ</span>
                  <input class="form-control" id="amount" type="text" placeholder="Amount" />
                  <a class="btn btn-primary mt-2 btn-block">จ่ายด้วย PromptPay</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </v-app>

</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: "prompt", sans-serif;
}

.cart-table {
  max-height: 300px;
}

.content-area {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 70px;
}

.layout {
  height: 100vh;
  width: 100%;
  max-width: 1440px;
}

.item-side {
  max-height: 90vh;
  overflow: scroll;
}

.item-side::-webkit-scrollbar,
.cart-table::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.item-side::-webkit-scrollbar-thumb,
.cart-table::-webkit-scrollbar-thumb {
  background-color: #ddd;
  border-radius: 999px;
}

.item-side .row {
  overflow: hidden;
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