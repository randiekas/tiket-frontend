<template>
<v-stepper alt-labels class="mb-8">
    <v-stepper-header>
        <template
            v-for="(item, index) in alur[tipe]">

            <v-divider v-if="index"></v-divider>
            <v-stepper-step :step="index+1">
                
                <v-btn 
                    v-if="item.link"
                    :to="item.link" 
                    color="primary" 
                    small 
                    exact>
                    {{ item.nama }}
                </v-btn>
                <div v-else>{{ item.nama }}</div>
            </v-stepper-step>

        </template>

        
    </v-stepper-header>
    </v-stepper>
</template>
<script>
export default {
    props: [ 'tipe' ],
    data: function(){
        return {
            alur:{
                cr: [
                    { nama: 'Data UIC', link: '/apps/cr' },
                    { nama: 'Approval BM' },
                    { nama: 'Approval ADH' },
                    { nama: 'Approval FDH' },
                    { nama: 'Driver/PDI' },
                    { nama: 'Verifikasi FS' },
                ],
                sales: [
                    { nama: 'Data Tiket', link: '/apps/sales' },
                    { nama: 'Approval BM' },
                    { nama: 'Approval ADH' },
                    { nama: 'Approval FDH' },
                    { nama: 'Driver/PDI' },
                    { nama: 'Verifikasi FS' },
                ]
            }
        }
    }
}
</script>