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
						Approval ADH
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="5">
						Approval BM
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="6">
						Approval FDH
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="7">
						<v-btn to="/apps/driver" color="primary" small>
							Verifikasi Driver
						</v-btn>
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
							Data yang harus kamu isi BAK & OR
							<v-spacer/>
						</v-card-title>
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
								<tr 
									v-for="(item, index) in 10"
									:key="index">
									<td>{{index+1}}</td>
									<td>
										<v-chip small dark color="green">
											810000210343
										</v-chip>
									</td>
									<td>IBU FIRA</td>
									<td>B1541UIZ</td>
                                    <td>C2MFG INDONESIA</td>
									<td>081298179643</td>
									<td>30/04/2022</td>
									<td>30/04/2022</td>
                                    <td>Kontrak Berakhir</td>
									<td>CICI</td>
									<td>
										<v-btn 
											v-on:click="dialog=true"
											small primary color="primary">
											Detil
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
                <v-card-title>Detail Penarikan</v-card-title>
				<v-card-subtitle>Diisi oleh Driver</v-card-subtitle>
				<v-card-text>
                    <v-row>
                        <v-col md="12">
                            <v-text-field
                                dense
                                outlined
                                label="Nama Pengemudi/User/PIC"
                                value="Randi Eka Setiawan"
                                hide-details=""/>
                        </v-col>
                        <v-col md="12">
                            <v-text-field
                                dense
                                outlined
                                label="Telepon Pengemudi/User/PIC"
                                value="082126833236"
                                hide-details=""/>
                        </v-col>
                        <v-col md="12">
                            <v-textarea
                                dense
                                outlined
                                label="Alamat Pengemudi/User/PIC"
                                value="Jl. Ciuyah No.50, Padaasih, Kec. Cisarua, Kabupaten Bandung Barat, Jawa Barat 40551"
                                hide-details=""/>
                        </v-col>
                        
                    </v-row>
                    <p class="text-overline mt-4">
                        Detail Kejadian
                    </p>
					<v-row>
						<v-col md="6">
                            <v-text-field
                                dense
                                outlined
                                label="Tanggal kejadian"
                                type="date"
                                value="2021-06-16"
                                hide-details=""/>
                        </v-col>
						<v-col md="6">
                            <v-text-field
                                dense
                                outlined
                                label="Lokasi Kejadian"
                                value="lampumerah al azhar..."
								hide-details=""/>
                        </v-col>
						<v-col md="12">
                            <v-textarea
                                dense
                                outlined
                                label="Uraian Kejadian"
                                value="Mobil depan di lampu merah ngerem mendadak Posisi lampu hijau,mobil depan ragu ragu buat melewati Lampu merah ,ingin melewati mobil depan tibatiba mobil depan ngerem mendadak"
                                hide-details=""/>
                        </v-col>
						<v-col md="12">
							<p class="mb-0">
								Bagian komponen yang rusak / hilang
							</p>
						</v-col>
						<v-col md="6">
							<v-checkbox
								dense
								hide-details=""
								label="Komponen 1"/>
							<v-checkbox
								dense
								hide-details=""
								label="Komponen 2"/>
							<v-checkbox
								dense
								hide-details=""
								label="Komponen 3"/>
						</v-col>
						<v-col md="6">
							<v-checkbox
								dense	
								hide-details=""
								label="Komponen 4"/>
							<v-checkbox
								dense
								hide-details=""
								label="Komponen 5"/>
						</v-col>
						<v-col md="12">
							<v-text-field
								class="mt-4"
								dense
								outlined
								label="Bagian komponen yang rusak/hilang lainnya"
								value="lampu depan pecah"
								hide-details="lampumerah al azhar..."
								append-icon="mdi-delete-circle"/>
						</v-col>
						<v-col md="12" class="text-right">
							<v-btn small>
								Tambah
							</v-btn>
						</v-col>
					</v-row>
	
					<p class="text-overline mt-4">
                        Own Risk
                    </p>

					<v-row>
						<v-col md="6">
                            <v-text-field
                                dense
                                outlined
                                label="Jumlah BAK X OR"
                                prefix="Rp. "
                                value="10000"
                                hide-details=""/>
                        </v-col>
						<v-col md="6">
							<v-text-field
                                dense
                                outlined
                                label="Rencana Tanggal Pembayaran"
								type="date"
                                value="2021-06-06"
                                hide-details=""/>
                        </v-col>
						<v-col md="6">
                            <v-radio-group
								hide-details=""
								column
								label="Pembebanan">
								
								<v-radio
									label="Pengemudi/User/PIC"/>
								<v-radio
									label="Perusahaan"/>
								
							</v-radio-group>
                        </v-col>

						<v-col md="6">
                            <v-radio-group
								hide-details=""
								column
								label="Mekanisme Pembayaran">
								
								<v-radio
									label="Billing/Transfer"/>
								
							</v-radio-group>
                        </v-col>

						<v-col md="12">
							<v-textarea
								dense
								outlined
								label="Catatan"
								hide-details=""/>
						</v-col>

					</v-row>

					<p class="text-overline mt-4">
                        Lampiran
                    </p>

					<v-file-input
						dense
						outlined
						label="Pilih Foto SIM"/>
					<v-file-input
						dense
						outlined
						label="Pilih Foto Form BAK"/>
					<v-file-input
						dense
						outlined
						label="Pilih Foto Form Konfirmasi OR"/>
					<v-file-input
						dense
						outlined
						label="Pilih Foto Form Checklist"/>
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