<script setup lang="ts">
import { ref } from "vue";
import type { VForm } from "vuetify/components";
import { useLoginStore } from "@/stores/login";
const loginStore = useLoginStore();
const loginName = ref("");
const password = ref("");
const valid = ref(true);
const form = ref<InstanceType<typeof VForm> | null>(null);
const login = async () => {
    const { valid } = await form.value!.validate();
    if (valid) {
        loginStore.login(loginName.value);
    }
};

const reset = () => {
    form.value?.reset();
}

</script>

<template>
    <v-app>
        <v-main class="bg-blue-grey-darken-2 pa-16">
            <v-card width="400px" class="mx-auto">
                <v-card-title primary-title class="text-center text-h6 font-weight-bold"> Login </v-card-title>
                <v-card-text>
                    <v-form ref="form" v-model="valid">
                        <v-text-field label="Login Name" v-model="loginName" :rules="[
                            (v) => !!v || 'Login Name is required',
                            (v) =>
                                v.length >= 4 ||
                                'Name must be more than or equal 4 characters',
                        ]" required></v-text-field>
                        <v-text-field label="Password" type="password" v-model="password" :rules="[
                            (v) => !!v || 'Password is required',
                            (v) =>
                                v.length >= 8 ||
                                'Password must be more than or equal 8 characters',
                        ]" required></v-text-field>
                    </v-form>

                </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn color="success" @click="login">Login</v-btn>
                    <v-btn color="error" @click="reset">Clear</v-btn>
                </v-card-actions>
                <v-card-actions class="justify-center">

                    <v-row justify="center">
                        <v-dialog v-model="loginStore.dialog" persistent width=" 50%">
                            <template v-slot:activator="{ props }">
                                <v-btn color="secondary" v-bind="props">
                                    Forget Password
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">Forget Password</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>

                                            <v-text-field label="User name" required v-model="loginName"></v-text-field>

                                        </v-row>
                                    </v-container>

                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue-darken-1" variant="text" @click="loginStore.dialog = false">
                                        Close
                                    </v-btn>
                                    <v-btn color="blue-darken-1" variant="text"
                                        @click="loginStore.forgetPassword(loginName)">
                                        Submit
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>

                        <v-dialog v-if="loginStore.dialog2" v-model="loginStore.dialog2" persistent width=" 50%">
                          
                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">Forget Password</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>

                                           <h1>{{loginStore.tempPassword}}</h1>

                                        </v-row>
                                    </v-container>

                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue-darken-1" variant="text" @click="loginStore.dialog2 = false">
                                        Close
                                    </v-btn>
                                   
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>
                </v-card-actions>
            </v-card>

            

        </v-main>

    </v-app>
</template>
