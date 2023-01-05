<script setup lang="ts">
import { ref } from "vue";
import { useMenuStore } from "../stores/menu";
const menuStore = useMenuStore();

const open = () => {
  menuStore.dialogPromo1 = true;
  menuStore.dialogPromo2 = false;
};
const close = () => {
  menuStore.dialogPromo1 = false;
  menuStore.dialogPromo2 = false;
};
const open2 = () => {
  menuStore.dialogPromo1 = false;
  menuStore.dialogPromo2 = true
};
const finishCode = () => {
  menuStore.dialogPromo2 = false;
}
const backToDi1 = () => {
  menuStore.dialogPromo2 = false;
  menuStore.dialogPromo1 = true;
}
</script>
<template>
  <v-row justify="center">
    <v-dialog v-model="menuStore.dialogPromo1" persistent>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props" @click="open">
          Promotions
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Promotions</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <h1>AIS</h1>
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Advanced_Info_Service_logo.svg/2560px-Advanced_Info_Service_logo.svg.png"></v-img>
              </v-col>
              <v-col>
                <h1>TRUE</h1>
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/True_Corporation_%28Thailand%29.svg/1200px-True_Corporation_%28Thailand%29.svg.png"></v-img>
              </v-col>
              <v-col>
                <h1>DTAC</h1>
                <v-img
                  src="https://storage.googleapis.com/techsauce-prod/ugc/uploads/2020/4/Propeller_BLUE+dtac_Black_(002).PNG"></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn color="black" variant="text" @click="open2">code</v-btn>
              </v-col>
              <v-col>
                <v-btn color="black" variant="text" @click="open2">code</v-btn>
              </v-col>
              <v-col>
                <v-btn color="black" variant="text" @click="open2">code</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" variant="text" @click="close">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-row>
  <v-row>
    <v-dialog v-model="menuStore.dialogPromo2" persistent class="promo2">
      <template v-slot:activator="{ props2 }">
        <v-btn v-bind="props2" color="black" variant="text"></v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Code</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-text-field label="กรุณากรอก Code" required
              :rules="[
                      (v) => !!v || 'Code จะต้องไม่เป็นช่องว่าง',
                      (v) =>
                        v.length >= 8 ||
                        'Code จะต้องมีขนาดมากกว่าหรือเท่ากับ 8 ตัวอักษร',
                        (v) =>
                        /^(?=.*[0-9])/.test(v)  ||
                        'Code จะต้องมีตัวเลขอย่างน้อยหนึ่งตัว']"></v-text-field>
            </v-row>
            <v-row>
              <v-btn color="error" variant="text" @click="backToDi1">
                Close </v-btn>
              <v-btn color="secondary" variant="text" @click="finishCode">
                Save
              </v-btn>
            </v-row>
          </v-container>
        </v-card-text>

      </v-card>
    </v-dialog>

  </v-row>

</template>
<style scoped>
.promo2 { width: 50%;}
</style>