<script setup lang="ts">
import {useEditStore} from "@/stores/edit"
const editStore = useEditStore();
const editedMenu  = () => {
    editStore.dialog1= true;
    
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
                <td><v-btn color="error" style = "margin-left: 50px;">ยกเลิก</v-btn><v-btn color="secondary" style="margin-left: 10px;" @click = "editedMenu">แก้ไข</v-btn></td>
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
                <td><v-btn color="error" style = "margin-left: 30px;">ยกเลิก</v-btn><v-btn color="secondary" style="margin-left: 10px;" @click = "editedMenu">แก้ไข</v-btn></td>
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
                <td><v-btn color="error" style = "margin-left: 30px;">ยกเลิก</v-btn><v-btn color="secondary" style="margin-left: 10px;">แก้ไข</v-btn></td>
            </tr>
          
          </tbody>
     
        </v-table>
    </v-alert>
    <div>
    <v-row
      justify="center"
    >
      <v-dialog
        v-model="editStore.dialog1"
      >
        <v-card>
          <v-card-title>
            ระดับความหวาน
            <v-divider></v-divider>
            <v-card-text style="height: 300px;">
            <v-radio-group
            v-model="editStore.dialog1"
            column
          >
            <v-radio
              label="Sugar 0"
              value="sugar0"
            ></v-radio>
            <v-radio
              label="Sugar 25"
              value="sugar25"
            ></v-radio>
            <v-radio
              label="Sugar 50"
              value="sugar50"
            ></v-radio>
            <v-radio
              label="Sugar 100"
              value="sugar100"
            ></v-radio>
            <v-radio
              label="Sugar 120"
              value="sugar120"
            ></v-radio>
            <v-radio
              label="Sugar125"
              value="sugar125"
            ></v-radio>
            </v-radio-group>
        </v-card-text>
            <v-divider></v-divider>
          </v-card-title>
          <v-card-text>
            <v-btn
              color="primary"
              class="ma-2"
              @click="editStore.dialog2 = true"
            >
              Open Dialog 2
            </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              variant="text"
              @click="editStore.dialog1 = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="editStore.dialog2"
      >
        <v-card>
          <v-card-title>
            Dialog 2
          </v-card-title>
          <v-card-text>
            <v-btn
              color="primary"
              @click="editStore.dialog3 = !editStore.dialog3"
            >
              Open Dialog 3
            </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              variant="text"
              @click="editStore.dialog2 = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="editStore.dialog3"
      >
        <v-card>
          <v-card-title>
            <span>Dialog 3</span>
          </v-card-title>
          <v-card-actions>
            <v-btn
              color="primary"
              variant="text"
              @click="editStore.dialog3 = false"
            >
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
