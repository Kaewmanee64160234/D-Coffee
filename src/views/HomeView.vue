<script setup lang="ts">
import { mdiHome, mdiAccountMultiple, mdiBasketOutline, mdiLogoutVariant, mdiAccountCircle, mdiArchivePlus, mdiClipboardList, mdiAccountTie } from "@mdi/js"
import PromotionDialog from '@/components/PromotionDialog.vue';
import AddmemberDialog from "@/components/AddmemberDialog.vue";
import { useLoginStore } from "@/stores/login";
import MenuCard from "@/components/MenuCard.vue";
import { useCartStore } from "@/stores/cart";
import FindUser from "@/components/FindUser.vue";
import ListComponent from "@/components/ListComponent.vue";
import { computed, onMounted, ref } from "vue";
import { useMenuStore } from "@/stores/menu";
import SearchMember from "@/components/SearchMember.vue";
import { useOrderStore } from "@/stores/order";
import { useMemberStore } from "@/stores/member";

const loginStore = useLoginStore();
const cartStore = useCartStore();
const drawer = ref(false);
const menuStore = useMenuStore();
const orderStore = useOrderStore();
const memberStore = useMemberStore();

// const framList = menuStore.frameList;

onMounted(() => {
  menuStore.menuFilter("drink");
});
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


        <v-list-item :prepend-avatar="loginStore.profile"
          :title="loginStore.loginName + ` (` + loginStore.position + `)`"
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
                  ?????????????????????????????????
                </v-tab>
                <v-tab @click="menuStore.menuFilter('food')">
                  ???????????????
                </v-tab>
                <v-tab @click="menuStore.menuFilter('snack')">
                  ?????????????????????
                </v-tab>
              </v-tabs>
            </div>
            <div class="row">
              <div class="col-md-3 mb-2 mt-4" v-for="item in menuStore.menuSelected" :key="item.img">
                <MenuCard :name="item.name" :cost="item.cost" :type="'Hello'" :img="item.img" :price="item.price"
                  @click="cartStore.addToCard(item), orderStore.CaltotalPrice()"></MenuCard>
              </div>
            </div>
          </div>

          <div class="col-md-6 mt-2">
            <div class="table-responsive cart-table">
              <ListComponent />
          
            </div>

            <div class="summary mt-2">
              <div class="row">
                <div class="col-md-7">
                  <div class="d-flex justify-content-between">
                    <p class="fw-bold mb-0">????????????????????? :</p>
                    <p class="fw-bold mb-0">{{ orderStore.total_ }} ?????????</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="fw-bold mb-0">?????????????????? :</p>
                    <p class="fw-bold mb-0">{{ orderStore.total_dicount }} ?????????</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="fw-bold mb-0">?????????????????????????????????????????? :</p>
                    <p class="fw-bold mb-0">{{ orderStore.totalAndDicount }} ?????????</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="fw-bold mb-0">?????????????????????????????? :</p>
                    <p class="fw-bold mb-0">{{ orderStore.recive_mon }} ?????????</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="fw-bold mb-0">????????????????????????????????????????????? :</p>
                    <p class="fw-bold mb-0">{{ orderStore.change_money }} ?????????</p>
                  </div>
                </div>

                <div class="col-md-5">
                  <span class="fw-bold mt-2">??????????????????????????????????????????????????????????????????</span>
                  <input class="form-control" id="amount" type="text" placeholder="Amount"
                    v-model="orderStore.recive_mon" />
                  <a class="btn btn-primary mt-2 btn-block" @click="orderStore.calMonAndDiscount">Calculate</a>
                </div>
              </div>

            </div>

            <div class="col-md-12 content-area">
              <v-row align="center" justify="space-around">
                <div class="row-md-3">
                  <div class="col">
                    <PromotionDialog></PromotionDialog>
                  </div>
                  <div class="col">
                    <FindUser></FindUser>
                  </div>
                   
                </div>

                <div class="row-md-3">
                  <div class="col" style="padding-bottom: 40px;">
                    <v-dialog v-model="loginStore.dialog" persistent width="80%">
                      <template v-slot:activator="{ props }">
                        <v-btn class="mt-2" color="red" v-bind="props" width="120px">
                          Clear
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title class="text-h5">
                          ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                        </v-card-title>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="green-darken-1" variant="text" @click="cartStore.clear">
                            ?????????
                          </v-btn>
                          <v-btn color="green-darken-1" variant="text" @click="loginStore.dialog = false">
                            ?????????
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                  <div class="col" >
                    <v-btn width="120px" color="secondary">Save</v-btn>
                  </div>
                </div>
              </v-row>
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

.table,
table tr td {
  border: 0px;
}
</style>