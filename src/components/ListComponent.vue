<script setup lang="ts">
import { useEditStore } from "@/stores/edit"
const editStore = useEditStore();
const editedMenu = () => {
    editStore.dialog1 = true;

} 
</script>
<template>
    <v-alert color="white">
        <v-table>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Late</td>
                    <td>35</td>
                    <td>1</td>
                    <td>35</td>
                    <td><v-btn color="error" style="margin-left: 50px;">ยกเลิก</v-btn><v-btn color="secondary"
                            style="margin-left: 10px;" @click="editedMenu">แก้ไข</v-btn></td>
                </tr>

            </tbody>

        </v-table>
    </v-alert>
    <br>
    <v-alert color="white">
        <v-table>
            <tbody>
                <tr>
                    <td>2</td>
                    <td>Coffee</td>
                    <td>35</td>
                    <td>1</td>
                    <td>35</td>
                    <td><v-btn color="error" style="margin-left: 30px;">ยกเลิก</v-btn><v-btn color="secondary"
                            style="margin-left: 10px;" @click="editedMenu">แก้ไข</v-btn></td>
                </tr>

            </tbody>

        </v-table>
    </v-alert>
    <br>

    <v-alert color="white">
        <v-table>
            <tbody>
                <tr>
                    <td>3</td>
                    <td>Milk Tea</td>
                    <td>35</td>
                    <td>1</td>
                    <td>35</td>
                    <td><v-btn color="error" style="margin-left: 30px;">ยกเลิก</v-btn><v-btn color="secondary"
                            style="margin-left: 10px;">แก้ไข</v-btn></td>
                </tr>

            </tbody>

        </v-table>
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
