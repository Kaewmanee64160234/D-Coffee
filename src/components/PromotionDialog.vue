<script setup lang="ts">
import { ref } from "vue";
import { useMenuStore } from "../stores/menu";
const menuStore = useMenuStore();
const listPromotion = menuStore.promo;
let namePromotion = ref("");
let tempId = ref();
const CodeInput = ref("");
const open = () => {
  menuStore.dialogPromo1 = true;
  menuStore.dialogPromo2 = false;
};
const close = () => {
  menuStore.dialogPromo1 = false;
  menuStore.dialogPromo2 = false;
};
const open2 = (namePromo:string,id:number) => {
  menuStore.dialogPromo1 = false;
  menuStore.dialogPromo2 = true
  namePromotion.value = namePromo;
  tempId.value = id;

};
const finishCode = () => {
  menuStore.checkCode(tempId.value);
  if(menuStore.realCode===  CodeInput.value ){
    menuStore.dialogPromo2 = false;
    tempId.value = "";
    CodeInput.value = "";


  }
  else{
    menuStore.dialogPromo2 = true;

  }
 
}
const backToDi1 = () => {
  menuStore.dialogPromo2 = false;
  menuStore.dialogPromo1 = true;
}
</script>
<template>
  <v-row justify="center">
    <v-dialog v-model="menuStore.dialogPromo1" persistent width="80%" >
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
              <v-col v-for="item in listPromotion" :key="item.point">
                <h3>{{item.name}}</h3>
                <v-img
                  :src="item.img"></v-img>
                  <v-btn color="black" variant="text" @click="open2(item.name,item.id)">code</v-btn>
             
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
          <span class="text-h5">{{namePromotion}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-text-field label="กรุณากรอก Code" required v-model="CodeInput"
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