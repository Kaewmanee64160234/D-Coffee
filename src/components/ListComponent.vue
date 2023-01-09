<script setup lang="ts">
import { useEditStore } from "@/stores/edit"
import { useCartStore } from "@/stores/cart"
import { useCancelStore } from "@/stores/cancel"
const editStore = useEditStore();
const cartStore = useCartStore();
const cancelStore = useCancelStore();
const editedMenu = () => {
    editStore.dialog1 = true;

} 
const cancel = () => {
    cancelStore.dialog1 = true;
}
</script>
<template>
    <v-alert color="white">
        <table class="table">
                <thead>
                  <tr>
                    <th scope="col" class="text-center">รายการ</th>
                    <th scope="col" class="text-center">ราคา</th>
                    <th scope="col" class="text-center">จำนวน</th>
                    <th scope="col" class="text-center">รวม</th>
                    <th></th>
                    <th></th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartStore.carts" :key="item.id">
                    <td style="text-align: center;">{{ item.name }}</td>
                    <td scope="col" class="text-center">{{ item.price }}</td>
                    <td class="text-center">1</td>
                    <td class="text-center">{{ item.price * 1 }}</td>
                    <td class="text-center"><v-btn color="error" style="margin-left: 30px;" @click="cartStore.deleteList(item.id)">ยกเลิก</v-btn></td>
                    <td class="text-center"><v-btn color="secondary" style="margin-left: 10px;"
                        @click="editedMenu">แก้ไข</v-btn> </td>
                  </tr>
                </tbody>
              </table>
    </v-alert>
    <div>
        <v-row justify="center">
            <v-dialog v-model="editStore.dialog1">
                <v-card>
                    <v-card-title>
                        ระดับความหวาน
                        <v-divider></v-divider>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-btn height="150px" width="20%" class="text-h5" style="margin-left: 15px;">Sugar
                                        0</v-btn>

                                    <v-btn height="150px" width="20%" class="text-h5" style="margin-left: 100px ;">Sugar
                                        25</v-btn>

                                    <v-btn height="150px" width="20%" class="text-h5" style="margin-left: 100px ;">Sugar
                                        50</v-btn>
                                </v-col>
                            </v-row>
                            <br>
                            <br>
                            <v-row>
                                <v-col cols="12">
                                    <v-btn height="150px" width="20%" class="text-h5" style="margin-left: 15px;">Sugar
                                        100</v-btn>

                                    <v-btn height="150px" width="20%" class="text-h5" style="margin-left: 100px ;">Sugar
                                        120</v-btn>

                                    <v-btn height="150px" width="20%" class="text-h5" style="margin-left: 100px ;">Sugar
                                        125</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-divider></v-divider>
                    </v-card-title>
                    
                    <v-card-actions>
                        <v-btn color="primary" variant="text" @click="editStore.dialog1 = false">
                            Close
                        </v-btn><v-btn color="primary" class="ma-2" @click="editStore.dialog2 = true,editStore.dialog1 = false ">
                            Next
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="editStore.dialog2">
                <v-card>
                    <v-card-title>
                        ท๊อปปิ้ง
                        <v-divider></v-divider>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-btn height="150px" width="20%" class="text-h5" >Syrup</v-btn>

                                    <v-btn height="150px" width="20%" class="text-h5" style="margin-left: 100px ;">Honey</v-btn>

                                    <v-btn height="150px" width="20%" class="text-h5" style="margin-left: 100px ;">Bubble</v-btn>

                                    <v-btn height="150px" width="20%" class="text-h5" style="margin-left: 100px ;">Konjac Jelly</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-divider></v-divider>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn color="primary" variant="text" @click="editStore.dialog2 = false">
                            Close
                        </v-btn> <v-btn color="primary" @click="editStore.dialog3 = !editStore.dialog3, editStore.dialog2 = false">
                            Next
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="editStore.dialog3">
                <v-card>
                    <v-card-title>
                        อื่นๆ
                        <v-divider></v-divider>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-btn height="150px" width="20%" class="text-h5" >Add Shot</v-btn>

                                    <v-btn height="150px" width="20%" class="text-h5" style="margin-left: 100px ;">Mix</v-btn>

                                    <v-btn height="150px" width="20%" class="text-h5" style="margin-left: 100px ;">Cold</v-btn>

                                    <v-btn height="150px" width="20%" class="text-h5" style="margin-left: 100px ;">Hot</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                        <v-divider></v-divider>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn color="primary" variant="text" @click="editStore.dialog3 = false">
                            Close
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

        </v-row>
    </div>
</template>
<style scoped>

</style>
