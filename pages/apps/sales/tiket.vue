<template>
	<div class="grey lighten-4 fill-height mb-16">
		<div class="primary pb-16">
		<v-container>
			<Head
				title="Tiketing"
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
							Data/buat tiket
						</v-btn>
						
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="3">
						Approval Ah
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="4">
						Approval Adh
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="5">
						Approval BM
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="6">
						Approval FH
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="7">
						Verifikasi Driver
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="8">
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
                    <v-text-field
                        
                        label="NOMOR CUSTOMER (CMD)"
                        required
                        />
                    <v-text-field
                        label="NAMA CUSTOMER"
                        required
                        />
                    <v-text-field
                        label="PIC / USER"
                        required
                        />
                    <v-text-field
                        label="JABATAN / BAGIAN"
                        required
                        />
                    <v-text-field
                        label="NOMOR TELPON / HP"
                        required
                        />
                    <v-text-field
                        label="ALAMAT PENARIKAN KENDARAAN"
                        required
                        />
                    <v-text-field
                        label="NOMOR KONTRAK "
                        required
                        />
                    <v-text-field
                        label="TANGGAL AKHIR KONTRAK"
                        required
                        />
                    <v-text-field
                        label="BILLING CONTROL OFFICER"
                        required
                        />
                    <v-text-field
                        label="NOMOR POLISI / NOMOR NOTIF"
                        required
                        />
                    <v-text-field
                        label="NAMA DRIVER / NOTIF"
                        required
                        />
                    <v-subheader>
                        JADWAL PENARIKAN 
                    </v-subheader>
                    <v-text-field
                        label="TANGGAL PENARIKAN"
                        required
                        />
                    <v-text-field
                        label="WAKTU PENARIKAN"
                        required
                        />
                    <v-text-field
                        label="*ALASAN PENARIKAN"
                        required
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
                    Save
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
							<v-btn small color="primary" v-on:click="dialog=true">
								<v-icon left>
									mdi-plus
								</v-icon>
								Buat Tiket
							</v-btn>
						</v-card-title>
						<v-divider class="mt-4"/>
						<v-simple-table dense style="width:1500px;">
							<thead>
								<tr>
									<th width="10px">No</th>
									<th width="150px">CMD</th>
									<th>Nama Customer</th>
									<th>PIC / User</th>
									<th>Jabatan / Bagian</th>
									<th>Telepon</th>
									
									<th>Nomor Kontrak</th>
									<th>Berakhir</th>
									<th>BCO</th>
                                    <th>Nomor Polisi</th>
                                    <th>Nomor Notif</th>
                                    <th>Nama Driver</th>
                                    <th>Jadwal Penarikan</th>
                                    <th>Alasan Penarikan</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr 
									v-for="(item, index) in 10"
									:key="index">
									<td>{{index+1}}</td>
									<td>21081359</td>
									<td>IBU FIRA</td>
                                    <td>C2MFG INDONESIA</td>
									<td>SEKRETARIS</td>
									<td>081298179643</td>
									
									<td>2200050707</td>
									<td>30/04/2022</td>
									<td>CICI</td>
									<td>B1541UIZ</td>
									<td>810000210343</td>
									<td>Agus</td>
                                    <td>30/04/2022</td>
                                    <td>Kontrak Berakhir</td>
									<td>
										<v-btn small primary color="primary">
											cetak
										</v-btn>
									</td>
								</tr>
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
		
    }),
	mounted: function(){
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
		}
	}
}
</script>
<style>
table{
	width: 1470px!important;
}
</style>