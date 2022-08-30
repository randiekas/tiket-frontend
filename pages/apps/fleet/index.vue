<template>
	<div class="grey lighten-4 fill-height mb-16">
		<v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
            >
            <v-card>
                <v-card-title>
                <span class="text-h5">Detail Tiket</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-text-field
                        label="NOMOR CUSTOMER (CMD)"
                        required
						persistent-placeholder
						outlined
						dense
						hint="Enter untuk mengambil data"
						persistent-hint
                        />
					<p class="mb-0">Nomor Polisi / Nomor Notif </p>
					<v-radio-group
						class="mt-0">
						<v-radio
							label="B 154 IUX - Toyota Avanza"/>
						<v-radio
							label="B 1234 XYZ - Daihatsu Xenia"/>
					</v-radio-group>
					<v-text-field
                        label="NOMOR KONTRAK "
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
						disabled
                        />
					<v-text-field
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
                        label="PIC / User"
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
                        />

					<v-text-field
                        label="Jabatan / Bagian"
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
                        />

					<v-text-field
						type="number"
                        label="No Telepon / hp"
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
                        />

					<v-text-field
                        label="Alamat penarikan kendaraan"
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
                        />

					<p>Jadwal Penarikan</p>
					<v-text-field
                        label="Tanggal Penarikan"
						type="date"
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
                        />
					<v-text-field
                        label="Waktu Penarikan"
						type="time"
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
                        />

					<p class="mb-0">Alasan Penarikan</p>
					<v-radio-group class="mt-0">
						<v-radio
							label="Kontrak selesai"/>
						<v-radio
							label="AR Bermasalah"/>
						<v-radio
							label="Early Termination"/>
						<v-radio
							label="Pass Maintenance Check"/>
						<v-radio
							label="Late unit return"/>
						<v-radio
							label="GT"/>
					</v-radio-group>
					<v-text-field
                        label="Lain-lain"
                        required
						persistent-placeholder
						dense
						placeholder="Tulis disini ..."
                        />

                    <v-text-field
                        label="Alasan Keterlambatan"
                        required
						persistent-placeholder
						dense
						placeholder="Tulis disini ..."
                        />

                    <p>Actual penarikan/Serah Terima</p>
                    <v-text-field
                        label="Tanggal Notif Back Sewa"
						type="date"
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
                        />
					<v-text-field
                        label="Nama Driver/PDI"
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
                        />
					<v-text-field
                        label="Nomor WhatsApp Driver/PDI"
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
						type="number"
                        />
					<v-text-field
                        label="Tanggal Penarikan/Serah Terima"
						type="date"
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
                        />
					<v-text-field
                        label="Waktu Penarikan/Serah Terima"
						type="time"
                        required
						persistent-placeholder
						outlined
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
                    @click="dialog = false"
                >
                    Submit
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

	
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
			<v-stepper alt-labels class="mb-8">
				<v-stepper-header>

					<v-stepper-step step="1">

							Buat tiket


					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="2">
						Approval Ah
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="3">
						Approval ADH
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="4">
						Approval BM
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="5">
						Approval FDH
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="6">
						<v-btn to="/apps/fleet" color="primary" small>
							Dispatch Driver
						</v-btn>
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="7">

							Driver/PDI

					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="8">
						<v-btn to="/apps/fleet/verifikasi" color="primary" small>
							Verifikasi FS
						</v-btn>
					</v-stepper-step>

				</v-stepper-header>
			</v-stepper>

		</v-container>
		</div>
		<v-container class="mt-n16">
			<v-row class="mt-2 mt-n8">

				<v-col md="12">
					<v-card>
						<v-card-title class="pb-0">
							<v-icon left></v-icon>
							Data Tiket yang perlu di approve
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
							<v-col md="6" class="d-flex">
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
							<template v-slot:[`item.action`]="{ item }">
								<v-btn @click="dialog=true" small primary dark color="primary" rounded>
									Detail
								</v-btn>
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
			dialog: false,
			isFetching:false,
            
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
					{ value: 'action', text: '' },

                ],
                data:[]
            },

		}
	},
	data: () => ({

    }),
	mounted: function(){
		if(this.tipe==='desa'){
			// this.handleUpdateDataDesa()
		}else if(this.tipe==='kecamatan'){
			// this.handleUpdateDataKecamatan()
		}

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
			query.push(`approval_fdh is not null:null`)
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

		handelConfirmation: function( item ){

            this.setConfirmation({
                status: true,
                title: 'Continue',
                message: `Are you sure you want to approve this ticket ?`,
                handelOk: async ()=>{
                    this.setConfirmation({ status: false })

                    this.setFetching(true)

					const payload      	= {
						approval_fdh: 1,
					}

                    this.$api.$post('/v1/api/ubah/tiket/'+item.id, payload).then((resp)=>{

                        this.setFetching(false)
                        if(resp.status){
                            this.setSnackbar('Tikett berhasil di approve')
							this.handelLoadData()
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
