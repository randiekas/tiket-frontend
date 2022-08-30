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
			<my-alur/>

		</v-container>
		</div>
		<v-container class="mt-n16">
            <v-dialog
				v-model="dialog"
				persistent
				max-width="600px">
				<v-card>
					<v-card-title>
					<span class="text-h5">Buat Tiket</span>
					</v-card-title>
					<v-card-text>
					<v-container>
						<v-row>
							<v-col md="5">
								<v-text-field
									v-model="uic.no_polisi"
									label="Nomor Polisi"
									required
									persistent-placeholder
									outlined
									dense
									hint="Enter untuk mengambil data"
									:error-messages="nopolMessage"
									persistent-hint
									v-on:keyup.enter="handelCari"
									/>
							</v-col>

							<v-col md="7">
								<v-text-field
									v-model="uic.tipe_kendaraan"
									label="Tipe kendaraan"
									required
									persistent-placeholder
									outlined
									dense
									persistent-hint
									disabled
									/>
							</v-col>
							<!--
							<v-col md="12" class="text-right">
								<v-btn small>
									Tambah Nopol
								</v-btn>
							</v-col>
							!-->
						</v-row>

						<v-text-field
							v-model="form.customer_nama"
							class="mt-2"
							label="Nama Customer"
							required
							persistent-placeholder
							outlined
							dense
							persistent-hint
							disabled
							/>
						<v-text-field
							v-model="uic.no_kontrak"
							label="NOMOR KONTRAK "
							required
							persistent-placeholder
							outlined
							dense
							placeholder="Tulis disini ..."
							disabled
							/>
						<v-text-field
							v-model="form.kontrak_selesai"
							label="Tanggal Akhir Kontrak "
							type="date"
							required
							persistent-placeholder
							outlined
							dense
							placeholder="Tulis disini ..."
							disabled
							append-icon="mdi-calendar"
							/>

						<v-text-field
							v-model="form.pic_nama"
							label="PIC / User"
							required
							persistent-placeholder
							outlined
							dense
							placeholder="Tulis disini ..."
							/>

						<v-text-field
							v-model="form.pic_jabatan"
							label="Jabatan / Bagian"
							required
							persistent-placeholder
							outlined
							dense
							placeholder="Tulis disini ..."
							/>

						<v-text-field
							v-model="form.pic_telepon"
							type="number"
							label="No Telepon / hp"
							required
							persistent-placeholder
							outlined
							dense
							placeholder="Tulis disini ..."
							/>

						<p class="mb-0">Status Penarikan</p>
						<v-radio-group 
							v-model="form.penarikan_status"
							class="mt-0">
							<v-radio
								label="Unit diambil"/>
							<v-radio
								label="Customer antar ke pool"/>
						</v-radio-group>

						<v-text-field
							v-model="form.penarikan_alamat"
							label="Alamat penarikan/serahterima kendaraan"
							required
							persistent-placeholder
							outlined
							dense
							placeholder="Tulis disini ..."
							/>

						<p>Jadwal Penarikan</p>
						<v-text-field
							v-model="form.penarikan_tanggal"
							label="Tanggal penarikan/serahterima kendaraan"
							type="date"
							required
							persistent-placeholder
							outlined
							dense
							placeholder="Tulis disini ..."
							/>
						<v-text-field
							v-model="form.penarikan_waktu"
							label="Waktu penarikan/serahterima kendaraan"
							type="time"
							required
							persistent-placeholder
							outlined
							dense
							placeholder="Tulis disini ..."
							/>

						<p class="mb-0">Alasan Penarikan</p>
						<v-radio-group 
							v-model="form.penarikan_alasan"
							class="mt-0">
							<v-radio
								v-for="(item, index) in alasanPenarikan"
								:key="index"
								:label="item"/>
						</v-radio-group>
						<v-text-field
							v-model="form.lain_lain"
							label="Lain-lain"
							required
							persistent-placeholder
							dense
							placeholder="Tulis disini ..."
							/>

						<v-text-field
							v-model="form.terlambat_alasan"
							label="Alasan Keterlambatan"
							required
							persistent-placeholder
							dense
							placeholder="Tulis disini ..."
							/>


					</v-container>
					<small>*indicates required field</small>
					</v-card-text>
					<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						color="blue darken-1"
						text
						@click="dialog = false"
					>
						Close
					</v-btn>
					<v-btn
						color="blue darken-1"
						text
						@click="handelConfirmation"
					>
						Submit
					</v-btn>
					</v-card-actions>
				</v-card>
            </v-dialog>
			<v-row class="mt-2 mt-n8">
				<v-col md="12">
					<v-card>
						<v-card-title class="pb-0">
							<v-icon left></v-icon>
							Data Tiket
							<v-spacer/>
							<v-btn small color="primary" v-on:click="dialog=true" class="mr-2" rounded>
								<v-icon left>
									mdi-plus
								</v-icon>
								Buat Tiket
							</v-btn>
							<v-btn small color="primary" rounded>
								<v-icon left>
									mdi-microsoft-excel
								</v-icon>
								Download tiket list
							</v-btn>
						</v-card-title>
						<v-container class="pb-0">
						<v-row>
							<v-col md="3">
								<v-text-field
									v-model="filterCustomerNama"
									v-on:keyup.enter="handelLoadData"
									label="Nama Customer"
									outlined
									hide-details=""
									dense/>
							</v-col>
							<v-col md="3">
								<v-text-field
									v-model="filterNoPolisi"
									v-on:keyup.enter="handelLoadData"
									label="Nomor Polisi"
									outlined
									hide-details=""
									dense/>
							</v-col>
							<v-col md="4">
								<v-chip-group>
									<v-chip small dark color="deep-purple lighten-1">
										Open
									</v-chip>
									<v-chip small dark color="cyan accent-4">
										Inprogress
									</v-chip>
									<v-chip small dark color="green">
										Complete
									</v-chip>
									<v-chip small>
										Close
									</v-chip>
								</v-chip-group>
							</v-col>
							<v-col md="2" class="d-flex">
								<v-spacer/>
								<v-btn
									@click="handelLoadData"
									class="primary"
									large
									rounded>
									<v-icon>
										mdi-archive-search-outline
									</v-icon>
								</v-btn>
							</v-col>
						</v-row>
						</v-container>
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
					<v-card>
						<v-data-table
							dense
							:headers="table.header"
							:items="table.data"
							item-key="id"
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
							<template v-slot:[`item.penarikan_alasan`]="{ item }">
								{{ alasanPenarikan[item.penarikan_alasan] }}
							</template>
							<template v-slot:[`item.penarikan_tanggal`]="{ item }">
								{{ $moment(item.penarikan_tanggal).format('DD/MM/YYYY') }}
							</template>
							<template v-slot:[`item.kontrak_selesai`]="{ item }">
								{{ $moment(item.kontrak_selesai).format('DD/MM/YYYY') }}
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
	props: [ 'apps', 'tipe', 'handelKeluar', 'setConfirmation', 'setFetching', 'setSnackbar' ],
	async asyncData({ }) {
		return {
			isFetching:false,
			uic:{},
			form:{},
			nopolMessage: '',
            dialog: false,

			filterCustomerNama: '',
            filterNoPolisi: '',
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
					{ value: 'no_notif', text: 'No Notif' },
					{ value: 'customer_nama', text: 'Nama Customer' },
					{ value: 'no_polisi', text: 'Nopol' },
					{ value: 'pic_nama', text: 'PIC User' },
					{ value: 'pic_telepon', text: 'PIC Telepon' },
					{ value: 'kontrak_selesai', text: 'Kontrak Berakhir' },
					{ value: 'penarikan_tanggal', text: 'Jadwal Penarikan' },
					{ value: 'penarikan_alasan', text: 'Alasan Penarikan' },
					{ value: 'bco', text: 'BCO' },

                ],
                data:[]
            },

		}
	},
	data: () => ({
		
    }),
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
	methods:{

		handelLoadData: async function(){

            this.isFetching     = true

            let query           = []
            if(this.filterCustomerNama){
                query.push(`customer_nama:like.${this.filterCustomerNama}`)
            }
            if(this.filterNoPolisi){
				query.push(`no_polisi:like.${this.filterNoPolisi}`)
            }
            if(query.length>0){
                query           = `&query=${query.join(',')}`
            }
            const data          = (await this.$api.$get(`v1/api/data/tiket?page=${this.options.page-1}&size=${this.options.itemsPerPage}${query}`)).data
            this.table.data     = data.content
            this.table.count    = eval(data.count)
            this.isFetching     = false
        },
		
		handelWarnaStatus: function(x){
			let warna = "green"
			if(x%2==0){
				warna = "deep-purple lighten-1"
			}
			else if(x%3==0){
				warna = "cyan accent-4"
			}

			return warna
		},

		handelCari: async function(){
			this.nopolMessage		= ''

			let query           	= []

            query.push(`no_polisi:like.${this.uic.no_polisi}`)
            
            if(query.length>0){
                query           	= `&query=${query.join(',')}`
            }

			const { content }		= (await this.$api.$get(`v1/api/data/uic?page=0&size=1${query}`)).data
			

			// const skpk 			= await this.$content('skpk').where({ nopol: this.form.nopol }).fetch()
			if(content.length==0){
				this.nopolMessage	= 'nopol tidak temukan'
			}else{
				this.uic					= content[0]
				this.form.uic_id			= this.uic.id
				this.form.no_notif			= this.uic.no_notif
				this.form.customer_nama		= this.uic.nama_customer
				this.form.no_polisi			= this.uic.no_polisi
				this.form.kontrak_selesai	= this.uic.selesai
				this.form.bco				= this.uic.bco
			}
			
		},

		handelConfirmation: function( item ){

            this.setConfirmation({
                status: true,
                title: 'Continue',
                message: `Are you sure you want to save this ticket ?`,
                handelOk: async ()=>{
                    this.setConfirmation({ status: false })

                    this.setFetching(true)

					this.form.terlambat	= this.form.terlambat_alasan?1:0

                    let payload         = this.form

                    this.$api.$post('/v1/api/tambah/tiket', payload).then((resp)=>{

                        this.setFetching(false)
                        if(resp.status){
                            this.setSnackbar('data hasben saved')
                            this.dialog	= false
							this.handelLoadData()
							this.form	= {}
                        }else{
                            this.setSnackbar(resp.message)
                        }
                    })
                }
            })
        },

	}
}
</script>
<style>
table{
	width: 1470px!important;
}
</style>
