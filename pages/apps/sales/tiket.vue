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
			<v-stepper alt-labels class="mb-8">
				<v-stepper-header>
					<v-stepper-step step="1">
						<v-btn to="/apps/sales" color="primary" small>
							Import SKPK
						</v-btn>
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="2">
						<v-btn to="/apps/sales/tiket" color="primary" small>
							Buat tiket
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

		</v-container>
		</div>
		<v-container class="mt-n16">
            <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
            >
            <v-card>
                <v-card-title>
                <span class="text-h5">Buat Tiket</span>
                </v-card-title>
                <v-card-text>
                <v-container>
					<v-row>
						<v-col md="5">
							<v-text-field
								v-model="form.nopol"
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
								v-model="form.tipe_kendaraan"
								label="Tipe kendaraan"
								required
								persistent-placeholder
								outlined
								dense
								persistent-hint
								disabled
								/>
						</v-col>
                        <v-col md="12" class="text-right">
                            <v-btn small>
                                Tambah Nopol
                            </v-btn>
						</v-col>
					</v-row>

					<v-text-field
						v-model="form.customer_name"
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
						v-model="form.contract_no"
                        label="NOMOR KONTRAK "
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
						disabled
                        />
					<v-text-field
						v-model="form.contract_end"
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

                    <p class="mb-0">Status Penarikan</p>
					<v-radio-group class="mt-0">
						<v-radio
							label="Unit diambil"/>
						<v-radio
							label="Customer antar ke pool"/>
					</v-radio-group>

					<v-text-field
                        label="Alamat penarikan/serahterima kendaraan"
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
                        />

					<p>Jadwal Penarikan</p>
					<v-text-field
                        label="Tanggal penarikan/serahterima kendaraan"
						type="date"
                        required
						persistent-placeholder
						outlined
						dense
						placeholder="Tulis disini ..."
                        />
					<v-text-field
                        label="Waktu penarikan/serahterima kendaraan"
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
			<v-row class="mt-2 mt-n8">
				<v-col v-if="isFetching" sm="12" md="12" cols="12">
					<v-card>
						<v-skeleton-loader
							class="mx-auto"
							type="article, table-heading"/>
					</v-card>
				</v-col>
				<v-col v-else cols="12" md="12">
					<v-card>
						<v-card-title class="pb-0">
							<v-icon left></v-icon>
							Data Tiket
							<v-spacer/>
							<v-btn small color="primary" v-on:click="dialog=true" class="mr-2">
								<v-icon left>
									mdi-plus
								</v-icon>
								Buat Tiket
							</v-btn>
							<v-btn small color="primary" v-on:click="dialog=true">
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
									label="Nama Customer"
									outlined
									hide-details=""
									dense/>
							</v-col>
							<v-col md="3">
								<v-text-field
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
							<v-col md="2">
								<v-btn block>
									<v-icon left>mdi-feature-search</v-icon>
									Cari
								</v-btn>
							</v-col>
						</v-row>
						</v-container>
						<v-divider class="mt-4"/>
						<v-simple-table dense style="width:1500px;">
							<thead>
								<tr>
									<th width="10px">No</th>
									<th>Nomor Notif</th>
									<th>Nama Customer</th>
									<th>Nopol</th>
									<th>PIC / User</th>
									<th>Telepon</th>

									<th>Kontrak Berakhir</th>
                                    <th>Jadwal Penarikan</th>
                                    <th>Alasan Penarikan</th>
									<th>BCO</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
							<!-- 
								<tr
									v-for="(item, index) in 10"
									:key="index">
									<td>{{index+1}}</td>
									<td>
										<v-chip small dark :color="handelWarnaStatus(index)">
											810000210343
										</v-chip>
									</td>
									<td>C2MFG INDONESIA</td>
									<td>B1541UIZ</td>
                                    <td>IBU FIRA</td>
									<td>081298179643</td>
									<td>30/04/2022</td>
									<td>30/04/2022</td>
                                    <td>Kontrak Berakhir</td>
									<td>CICI</td>
									<td>
										<v-btn small primary color="primary">
											Detail
										</v-btn>
									</td>
								</tr>
							!-->
							</tbody>
						</v-simple-table>
					</v-card>
				</v-col>

			</v-row>
		</v-container>
	</div>
</template>
<script>
export default {
	layout:'apps',
	props: ['apps', 'tipe', 'handelKeluar'],
	async asyncData({ }) {
		return {
			isFetching:false,
			form:{},
			nopolMessage: '',
            dasbor: {
                "lahir": 0,
                "mati": 0,
                "keluar": 0,
                "datang": 0,
                "kk": 0,
                "penduduk": 0,
                "islam": 0,
                "kristen": 0,
                "khatolik": 0,
                "hindu": 0,
                "budha": 0,
                "belum_kawin": 0,
                "kawin_tercatat": 0,
                "kawin_belum_tercatat": 0,
                "cerai_mati": 0,
                "dusun": 0,
                "desa": 0,
                "ganda": []
            },
            dialog: false
		}
	},
	data: () => ({
		itemsCari: [
			'Nama Customer',
			'Nomor Polisi',
		]
    }),
	mounted: async function(){
		if(this.tipe==='desa'){
			// this.handleUpdateDataDesa()
		}else if(this.tipe==='kecamatan'){
			// this.handleUpdateDataKecamatan()
		}

	},
	methods:{
		handleUpdateDataDesa: async function(){
			this.isFetching	= true
			this.dasbor		= (await this.$api.$get(`/v1/api/dasborDesa`)).data
			if(this.dasbor.belum_kawin===null){
				this.dasbor	= {
						"lahir": 0,
						"mati": 0,
						"keluar": 0,
						"datang": 0,
						"kk": 0,
						"penduduk": 0,
						"islam": 0,
						"kristen": 0,
						"khatolik": 0,
						"hindu": 0,
						"budha": 0,
						"belum_kawin": 0,
						"kawin_tercatat": 0,
						"kawin_belum_tercatat": 0,
						"cerai_mati": 0,
						"dusun": this.dasbor.dusun,
						"desa": this.dasbor.desa,
						"ganda": []
					}
			}
			this.isFetching	= false
		},
		handleUpdateDataKecamatan: async function(){
			this.isFetching	= true
			this.dasbor		= (await this.$api.$get(`/v1/api/dasborKecamatan`)).data
			if(this.dasbor.belum_kawin===null){
				this.dasbor	= {
						"lahir": 0,
						"mati": 0,
						"keluar": 0,
						"datang": 0,
						"kk": 0,
						"penduduk": 0,
						"islam": 0,
						"kristen": 0,
						"khatolik": 0,
						"hindu": 0,
						"budha": 0,
						"belum_kawin": 0,
						"kawin_tercatat": 0,
						"kawin_belum_tercatat": 0,
						"cerai_mati": 0,
						"dusun": this.dasbor.dusun,
						"desa": this.dasbor.desa,
						"ganda": []
					}
			}
			this.isFetching	= false
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
			this.nopolMessage	= ''
			const skpk 			= await this.$content('skpk').where({ nopol: this.form.nopol }).fetch()
			if(skpk.length==0){
				this.nopolMessage	= 'nopol tidak temukan'
			}else{
				this.form		= skpk[0]
			}
			console.log(skpk)
		}
	}
}
</script>
<style>
table{
	width: 1470px!important;
}
</style>
