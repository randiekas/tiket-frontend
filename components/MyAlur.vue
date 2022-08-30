<template>
<v-stepper alt-labels class="mb-8">
    <v-stepper-header>
        <v-stepper-step step="1">
            <v-btn to="/apps/sales" color="primary" small exact>
                Data UIC
            </v-btn>
        </v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step step="2">
            <v-btn to="/apps/sales/tiket" color="primary" small exact>
                Data tiket
            </v-btn>

        </v-stepper-step>

        <v-divider></v-divider>


        <v-stepper-step step="3">
            Approval BM
        </v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step step="4">
            Approval ADH
        </v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step step="5">
            Approval FDH
        </v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step step="6">
            Driver/PDI
        </v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step step="7">
            Verifikasi FS
        </v-stepper-step>

    </v-stepper-header>
    </v-stepper>
</template>