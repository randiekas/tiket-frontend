<template>
	<div class="grey lighten-4 fill-height mb-16">
		<div class="primary pb-16">
		<v-container>
			<Head
				title="Ticketing"
				subtitle="Seluruh Alur proses SKPK"
				color="white--text">
				<v-btn
					small
					class="white"
					v-on:click="handelKeluar">
					<v-icon left>
						mdi-logout
					</v-icon>
					Keluar Aplikasi
				</v-btn>
			</Head>
			<my-alur tipe="cr"/>
		</v-container>
		</div>
		<v-container class="mt-n16">
			<v-row class="mt-2 mt-n8">
				<v-col md="12">
				<v-card>
						<v-card-title>Data UIC</v-card-title>
						<v-card-text>
							<v-row dense>
								<v-col>
									<v-text-field
										label="Nopol"
										v-model="filterNopol"
										v-on:keyup.enter="handelLoadData"
										placeholder="Type here ..."
										persistent-placeholder
										hide-details=""/>
								</v-col>
								<v-col>
									<v-text-field
										label="Notif"
										v-model="filterNotif"
										v-on:keyup.enter="handelLoadData"
										placeholder="Type here ..."
										persistent-placeholder
										hide-details=""/>
								</v-col>
								<v-col>
									<v-text-field
										label="No Cus"
										v-model="filterNoCustomer"
										v-on:keyup.enter="handelLoadData"
										placeholder="Type here ..."
										persistent-placeholder
										hide-details=""/>
								</v-col>
								<v-col>
									<v-text-field
										label="Nama Cus"
										v-model="filterNamaCustomer"
										v-on:keyup.enter="handelLoadData"
										placeholder="Type here ..."
										persistent-placeholder
										hide-details=""/>
								</v-col>
								<v-col>
									<v-text-field
										label="Selesai Kontrak"
										v-model="filterSelesaiKontrak"
										v-on:keyup.enter="handelLoadData"
										type="date"
										persistent-placeholder
										hide-details=""/>
								</v-col>
								<v-col md="3" class="text-right">
									<v-btn
										@click="handelLoadData"
										class="primary"
										large
										rounded>
										<v-icon>
											mdi-archive-search-outline
										</v-icon>
									</v-btn>
									<v-btn 
										large
										rounded
										to="/apps/cr/uic"
										small color="primary">
										<v-icon left>
											mdi-upload
										</v-icon>
										Import Data
									</v-btn>
								</v-col>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col v-if="isFetching" sm="12" md="12" cols="12">
					<v-card>
						<v-skeleton-loader
							class="mx-auto"
							type="article, table-heading"/>
					</v-card>
				</v-col>
				<v-col v-else cols="12" md="12">
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
							<template v-slot:[`item.gambar`]="{ item }">
								<v-img :src="`${apiurl}/${item.gambar}`" max-width="31"/>
							</template>
							<template v-slot:[`item.ttd`]="{ item }">
								<v-img :src="`${apiurl}${item.ttd}`" max-width="31"/>
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
				</v-col>

			</v-row>
		</v-container>
	</div>
</template>
<script>
export default {
	layout:'apps',
	props: ['apps', 'handelKeluar' , 'apiurl'],
	data: function(){
        return {
            filterNopol: '',
            filterNotif: '',
            filterNoCustomer: '',
            filterNamaCustomer: '',
            filterSelesaiKontrak: '',
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
					{ value: 'no_polisi', text: 'No Pol' },
					{ value: 'tipe_kendaraan', text: 'Tipe' },
					{ value: 'no_notif', text: 'No Notif' },
					{ value: 'no_customer', text: 'No Cust' },
					{ value: 'nama_customer', text: 'Nama Cust' },
					{ value: 'no_kontrak', text: 'No Kontrak' },
					{ value: 'mulai', text: 'Mulai' },
					{ value: 'selesai', text: 'Selesai' },
					{ value: 'bco', text: 'BCO' },

                ],
                data:[]
            },
        }
    },
	mounted: function(){
		
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
            if(this.filterNopol){
                query.push(`no_polisi:like.${this.filterNopol}`)
            }
            if(this.filterNotif){
				query.push(`no_notif:like.${this.filterNotif}`)
            }
			if(this.filterNoCustomer){
                query.push(`no_customer:like.${this.filterNoCustomer}`)
            }
			if(this.filterNamaCustomer){
                query.push(`nama_customer:like.${this.filterNamaCustomer}`)
            }
			if(this.filterSelesaiKontrak){
                query.push(`selesai:date.${this.filterSelesaiKontrak}`)
            }
            if(query.length>0){
                query           = `&query=${query.join(',')}`
            }
            const data          = (await this.$api.$get(`v1/api/data/uic?page=${this.options.page-1}&size=${this.options.itemsPerPage}${query}`)).data
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
<style>
table{
	width: 1470px!important;
}
</style>
