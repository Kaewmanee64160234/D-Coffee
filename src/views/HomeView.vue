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

        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" :title="loginStore.loginName + ` (`+loginStore.position+`)`"
          :subtitle="loginStore.loginName+`@gmail.com`"></v-list-item>

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
<!-- Topmenu bar -->
<!-- <div class="container layout">
  <div class="row">
  <div class="header">Point of sell</div>
  </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="col-md-4 mb-2 mt-4" v-for="item in framList" :key="item.img">
    <MenuCard
      :name="item.name"
      :cost="item.cost"
      type=""
      :img="item.img"
    ></MenuCard>
  </div>
        </div>

        <div class="col-lg-6">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            
          </div>
          <div class="row">
            <div class="col-md-8">
              <p>Summary</p>
              <p>Summary</p>
              <p>Summary</p>
              <p>Summary</p>
              <p>Summary</p>
              <p>Summary</p>
            </div>
            <div class="col-md-4">
              <p>Calculator zone</p>
            </div>
            <div class="col-md-12">
              <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
            </div>
          </div>
        </div>


      </div>
    </div> -->


    <main>

      <table class="layout">
        <tr class="title-page">
          <td colspan="2">
            <h1>Point of sale</h1>

          </td>
        </tr>
        <tr class="contain-main-page">
          <td class="menu-left">
            <div class="col-md-4 mb-2 mt-4 sm-3 " v-for="item in framList" :key="item.img">
              <MenuCard :name="item.name" :cost="item.cost" type="" :img="item.img"></MenuCard>
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
      </table>

    </main>
  </v-app>

</template>
<style scoped>
.layout {
  height: 100vh;
  width: 100%;
  margin-left: 4vw;
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