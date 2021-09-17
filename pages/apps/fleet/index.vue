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
						
							Import SKPK
						
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="2">
						
							Data/buat tiket
						
						
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
						<v-btn to="/apps/fleet" color="primary" small>
							Verifikasi FS
						</v-btn>
					</v-stepper-step>

				</v-stepper-header>
			</v-stepper>
			
		</v-container>
		</div>
		<v-container class="mt-n16">
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
							Data yang harus kamu verifikasi dokumen
							<v-spacer/>
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
                                    <td></td>
									<td>
										<v-btn 
											small 
											color="primary"
											v-on:click="dialog=true">
											ISI FORM
										</v-btn>
									</td>
								</tr>
								 
							</tbody>
						</v-simple-table>
					</v-card>
				</v-col>
				
			</v-row>
		</v-container>
		 <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
            >
            <v-card class="mt-6">
                <v-card-title>Verifikasi Catatan</v-card-title>
				<v-card-subtitle>Diisi oleh Fleet</v-card-subtitle>
				<v-card-text>
					<v-row>
						<v-col md="12">
                            <v-text-field
                                dense
                                outlined
                                label="No. Claim SIS"
                                value="1202144183"
                                hide-details=""/>
                        </v-col>
						<v-col md="12">
                            <v-file-input
                                dense
                                outlined
                                label="Lampiran Bukti Pembayaran"
                                value="1202144183"
                                hide-details=""/>
                        </v-col>
						<v-col md="12">
							<v-textarea
								dense
								outlined
								label="Catatan"
								hide-details=""/>
						</v-col>
					</v-row>
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
	</div>
</template>
<script>
export default {
	layout:'apps',
	props: ['apps', 'tipe', 'handelKeluar'],
	async asyncData({ }) {
		return {
			dialog:false,
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
                "ganda": [],
            }

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