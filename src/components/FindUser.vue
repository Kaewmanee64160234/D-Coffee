<script setup lang="ts">
import { ref } from 'vue';
import { mdiAccountSearch } from '@mdi/js';
import { useMemberStore } from '@/stores/member';
const memberStore = useMemberStore();
const dialog = ref(false);
const phonInput = ref("");
</script>

<template>
    <v-row justify="center">
        <v-btn color="primary" class="ma-2" @click="dialog = true">
            Open Dialog 1
        </v-btn>
        <v-dialog v-model="dialog" width="50%">
            <v-card height="500px">
                <v-card-title>
                    Find Member
                </v-card-title>
                <v-card-text>

                    <v-text-field label="Phone Number" height="20px" hide-details="auto" v-model="phonInput">
                        <template v-slot:append>
                            <v-btn variant="outlined" color="secondary" style="margin-bottom: 10px;"
                                @click="memberStore.findPhoneNmber(phonInput)">Find</v-btn>
                        </template>

                    </v-text-field>
                    <v-card class="mx-auto" style="margin-top: 10px;">
                        <v-list lines="two" >
                            <div v-for="member in memberStore.members" :key="member.id">
                                <v-list-item v-if="!memberStore.IsSerarch" :value="member.name" :key="member.name" :title="member.name"
                                    style="font-size: 15px;">{{ member.Point }} Point<v-btn variant="tonal"
                                        color="secondary" style="width: 100px;margin-left: 450px;" @click="memberStore.addPointMember(member.Tel)">Add
                                        Point</v-btn></v-list-item>
                                <div v-if="member.id === memberStore.thisMember.id && memberStore.IsSerarch">

                                    <v-list-item v-for="member in memberStore.members" :value="member.name"
                                        :key="member.id" :title="member.name" style="font-size: 15px;">{{
                                            member.Point
                                        }} Point<v-btn variant="tonal" color="secondary"
                                            style="width: 100px;margin-left: 450px;" @click="memberStore.addPointMember(member.Tel)">Add Point</v-btn></v-list-item>
                                </div>

                            </div>
                        </v-list>




                    </v-card>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" variant="text" @click="dialog = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


    </v-row>
</template>