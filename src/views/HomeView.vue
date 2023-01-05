<script setup lang="ts">
import { mdiHome  ,mdiAccountMultiple ,mdiBasketOutline,mdiLogoutVariant  ,mdiAccountCircle ,mdiArchivePlus ,mdiClipboardList ,mdiAccountTie } from  "@mdi/js"

</script>

<template>
  <v-app>
    <v-navigation-drawer expand-on-hover rail permanent>
      <v-list>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"></v-list-item>
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
        <v-list-item :prepend-icon="mdiLogoutVariant " title="Logout" value="Logout"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <main >

      <table class="layout">
        <tr class="title-page">
          <td colspan="2">
            <h1>POint of sale</h1>

          </td>
        </tr>
        <tr class="contain-main-page">
          <td class="menu-left">
            <h1>Menu</h1>

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

          <v-btn>Menu</v-btn>
          <v-btn>Menu</v-btn>
          <v-btn>Menu</v-btn>
          <v-btn>Menu</v-btn>
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
}

tr,
td {
  border: 1px solid rgb(211, 211, 211);

}

.title-page {
  height: 15%;
  background-color: rgba(170, 113, 72, 0.5);
}

.contain-main-page {
  height: 70%;
}

.menu-right,
.menu-left {
  width: 50%;
  background-color: rgb(212, 203, 168);
}

.list {
  height: 50%;
}

.cal-member {
  height: 50%;
}

.cal {
  width: 60%;
}

.find-member {
  width: 30%;

}

.group-button {
  height: 20%;
}
</style>