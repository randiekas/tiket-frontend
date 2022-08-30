<template>
    <div class="grey lighten-4 fill-height mb-16">
		<div class="primary pb-16">
			<v-container>
				<Head
					title="Admin"
					subtitle="Kelola data akun user">
                    <v-btn
                        exact
                        small
                        class="white"
                        to="/apps/akun/create">
                        <v-icon left>
                            mdi-image-plus
                        </v-icon>
                        Create
                    </v-btn>
				</Head>
				<v-row class="mt-2">

				</v-row>
			</v-container>
		</div>
		<v-container class="mt-n16">
            <v-card class="mb-8">
                <v-card-text>
                    <v-row dense>
                        <v-col>
                            <v-text-field
                                label="Email"
                                v-model="filterEmail"
                                v-on:keyup.enter="handelLoadData"
                                placeholder="Type Email"
                                persistent-placeholder
                                hide-details=""/>
                        </v-col>
						<v-col>
                            <v-text-field
<<<<<<< HEAD
<<<<<<< HEAD
                                label="filterNama"
=======
                                label="Nama"
>>>>>>> update lagi
=======
                                label="Nama"
>>>>>>> 8ef8a0dcf63d1b2463e789ea5e187ad855c7e64b
                                v-model="filterNama"
                                v-on:keyup.enter="handelLoadData"
                                placeholder="Type Nama"
                                persistent-placeholder
                                hide-details=""/>
                        </v-col>
                        <v-col>
                            <v-select
<<<<<<< HEAD
<<<<<<< HEAD
                                :items="dataTipe"
                                item-value='value'
                                item-text='label'
                                v-model="filterTipe"
                                label="Status"
=======
                                :items="akunTipe"
                                item-value='value'
                                item-text='label'
                                v-model="filterTipe"
                                label="Tipe Akun"
>>>>>>> update lagi
=======
                                :items="akunTipe"
                                item-value='value'
                                item-text='label'
                                v-model="filterTipe"
                                label="Tipe Akun"
>>>>>>> 8ef8a0dcf63d1b2463e789ea5e187ad855c7e64b
                                hide-details=""/>
                        </v-col>
                        <v-col md="1">
                            <v-btn
                                @click="handelLoadData"
                                class="primary"
                                large
                                block
                                rounded>
                                <v-icon>
                                    mdi-archive-search-outline
                                </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>

            <v-card outlined>
                <v-data-table
                    dense
                    :headers="table.header"
                    :items="table.data"
                    item-key="id"
                    @click:row="handelClickDetail"
                    disable-sort
                    :loading="isFetching"
                    :options.sync="options"
                    :server-items-length="table.count"
                    hide-default-footer="">
                    <template v-slot:[`item.no`]="{ index }">
                        {{ numbering(index, options) }}
                    </template>
<<<<<<< HEAD
<<<<<<< HEAD
                    <template v-slot:[`item.ttd`]="{ item }">
                        <v-img :src="item.ttd" max-width="31"/>
=======
                    <template v-slot:[`item.gambar`]="{ item }">
                        <v-img :src="`${apiurl}/${item.gambar}`" max-width="31"/>
                    </template>
                    <template v-slot:[`item.ttd`]="{ item }">
                        <v-img :src="`${apiurl}${item.ttd}`" max-width="31"/>
>>>>>>> update lagi
=======
                    <template v-slot:[`item.gambar`]="{ item }">
                        <v-img :src="`${apiurl}/${item.gambar}`" max-width="31"/>
                    </template>
                    <template v-slot:[`item.ttd`]="{ item }">
                        <v-img :src="`${apiurl}${item.ttd}`" max-width="31"/>
>>>>>>> 8ef8a0dcf63d1b2463e789ea5e187ad855c7e64b
                    </template>
                    <template v-slot:[`item.terakhir_masuk`]="{ item }">
                        {{ $moment(item.end_date).format('DD/MM/YYYY') }}
                    </template>
                    <template v-slot:[`item.tipe`]="{ item }">
                        <v-chip v-if="item.status" small class="success">{{ item.tipe}}</v-chip>
                    </template>
                    <template v-slot:footer="{props}">
                        <my-dt-pagination
                            :options="options"
                            :pagination="props.pagination"/>
                    </template>
                </v-data-table>
            </v-card>
		</v-container>
	</div>
</template>
<script>
export default {
	layout: 'apps',
<<<<<<< HEAD
<<<<<<< HEAD
	props: ['apps', 'handelKeluar' ,'access'],
=======
	props: ['apps', 'handelKeluar' , 'apiurl'],
>>>>>>> update lagi
=======
	props: ['apps', 'handelKeluar' , 'apiurl'],
>>>>>>> 8ef8a0dcf63d1b2463e789ea5e187ad855c7e64b
    data: function(){
        return {
            filterEmail: '',
            filterNama: '',
            filterTipe: '',
<<<<<<< HEAD
<<<<<<< HEAD
			dataTipe: [
				{ value:'akun', label: 'akun' }, 
				{ value:'sales', label: 'sales' }, 
				{ value:'adh', label: 'adh' }, 
				{ value:'bm', label: 'bm' }, 
				{ value:'fdh', label: 'fdh' }, 
				{ value:'fleet', label: 'fleet' }, 
				{ value:'driver', label: 'driver' }, 
				{ value:'admin', label: 'admin' }, 
			],
=======
>>>>>>> update lagi
=======
>>>>>>> 8ef8a0dcf63d1b2463e789ea5e187ad855c7e64b
            options: {page:1},
            isFetching: false,
            table:{
                count: 0,
                header:[
                    {
                        text: 'No',
                        align: 'center',
                        sortable: false,
                        value: 'no',
                    },
<<<<<<< HEAD
<<<<<<< HEAD
                    { value: 'email', text: 'email' },
                    { value: 'password', text: 'password' },
                    { value: 'nama', text: 'nama' },
                    { value: 'tipe', text: 'tipe' },
=======
=======
>>>>>>> 8ef8a0dcf63d1b2463e789ea5e187ad855c7e64b
                    { value: 'gambar', text: 'Avatar' },
                    { value: 'email', text: 'Email' },
                    { value: 'nama', text: 'Nama' },
                    { value: 'tipe', text: 'Tipe' },
<<<<<<< HEAD
>>>>>>> update lagi
=======
>>>>>>> 8ef8a0dcf63d1b2463e789ea5e187ad855c7e64b
                    { value: 'ttd', text: 'ttd' },
                    { value: 'terakhir_masuk', text: 'terakhir_masuk' },
                ],
                data:[]
            },
<<<<<<< HEAD
<<<<<<< HEAD
            category: [],
=======
>>>>>>> update lagi
=======
>>>>>>> 8ef8a0dcf63d1b2463e789ea5e187ad855c7e64b
        }
    },
    mounted: async function(){
    },
    watch:{
        'options.page': function(){
            this.handelLoadData()
        },
        'options.itemsPerPage': function(){
            this.handelLoadData()
        },
    },
    methods: {
        handelLoadData: async function(){

            this.isFetching     = true

            let query           = []
            if(this.filterEmail){
                query.push(`email:like.${this.filterEmail}`)
            }
            if(this.filterNama){
<<<<<<< HEAD
<<<<<<< HEAD
                query.push(`nama:date.${this.filterNama}`)
=======
                query.push(`nama:like.${this.filterNama}`)
>>>>>>> update lagi
=======
                query.push(`nama:like.${this.filterNama}`)
>>>>>>> 8ef8a0dcf63d1b2463e789ea5e187ad855c7e64b
            }
            if(this.filterTipe){
                query.push(`tipe:${this.filterTipe}`)
            }
            if(query.length>0){
                query           = `&query=${query.join(',')}`
            }
            const data          = (await this.$api.$get(`v1/api/data/akun?page=${this.options.page-1}&size=${this.options.itemsPerPage}${query}`)).data
            this.table.data     = data.content
            this.table.count    = eval(data.count)
            this.isFetching     = false
        },
        handelClickDetail: function( item ){
            // console.log(item)
            // this.$router.push(`/content/${item.id}`);
        }
    }
}
</script>
