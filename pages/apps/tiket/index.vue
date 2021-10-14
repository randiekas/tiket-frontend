<template>
	<div class="grey lighten-4 fill-height mb-16">
		<div class="primary pb-16">
		<v-container>
			<Head
				title="Tiket"
				subtitle="Kelola data tiket"
				color="white--text">
				<v-btn
					small
					class="white"
					v-on:click="dialogFormTambah=true">
					<v-icon left>
						mdi-ticket-account
					</v-icon>
					Tambah tiket
				</v-btn>
			</Head>
			<v-row v-if="isFetching" class="mb-8">
				<v-col sm="12" md="3" cols="12">
					<v-card>
						<v-skeleton-loader
							class="mx-auto"
							type="article, table-heading"/>
					</v-card>
				</v-col>
				<v-col sm="12" md="3" cols="12">
					<v-card>
						<v-skeleton-loader
							class="mx-auto"
							type="article, table-heading"/>
					</v-card>
				</v-col>
				<v-col sm="12" md="3" cols="12">
					<v-card>
						<v-skeleton-loader
							class="mx-auto"
							type="article, table-heading"/>
					</v-card>
				</v-col>
				<v-col sm="12" md="3" cols="12">
					<v-card>
						<v-skeleton-loader
							class="mx-auto"
							type="article, table-heading"/>
					</v-card>
				</v-col>
			</v-row>
			<v-row v-else class="mb-8">
				<v-col sm="12" md="3" cols="12">
					<v-card class="border--white blue darken-4" elevation="1" dark>
						<v-card-title class="pb-0">
							<v-icon left></v-icon>
							Tiket Open : 120
						</v-card-title>
						<v-card-text>
							<v-list-item dense>
								<v-list-item-content>
									<v-list-item-title>
										Proses Driver
									</v-list-item-title>
								</v-list-item-content>
								<v-list-item-icon>
									<v-chip
										small
										color="red"
										dark>
										{{ dasbor.penduduk }}
									</v-chip>
								</v-list-item-icon>
							</v-list-item>
							<v-divider/>
							<v-list-item dense>
								<v-list-item-content>
									<v-list-item-title>
										Proses Fleet
									</v-list-item-title>
								</v-list-item-content>
								<v-list-item-icon>
									<v-chip
										small
										color="orange"
										dark>
										{{ dasbor.penduduk }}
									</v-chip>
								</v-list-item-icon>
							</v-list-item>
							<v-divider/>
							<v-list-item dense>
								<v-list-item-content>
									<v-list-item-title>
										Proses Departemen
									</v-list-item-title>
								</v-list-item-content>
								<v-list-item-icon>
									<v-chip
										small
										color="blue"
										dark>
										{{ dasbor.penduduk }}
									</v-chip>
								</v-list-item-icon>
							</v-list-item>
							<v-btn
								small
								block
								class="white black--text mt-3"
								to="/apps/tiket">
								Laporan Selengkapnya
								<v-icon right>
									mdi-chevron-right
								</v-icon>
							</v-btn>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col sm="12" md="3" cols="12">
					<v-card class="border--primary" elevation="1">
						<v-card-title class="pb-0">
							<v-icon left></v-icon>
							Berdasarkan Waktu
						</v-card-title>
						<v-card-text>
							<v-list-item dense>
								<v-list-item-content>
									<v-list-item-title>
										Total
									</v-list-item-title>
								</v-list-item-content>
								<v-list-item-icon>
									{{ dasbor.belum_kawin }} jam
								</v-list-item-icon>
							</v-list-item>
							<v-divider/>
							<v-list-item dense>
								<v-list-item-content>
									<v-list-item-title>
										Driver
									</v-list-item-title>
								</v-list-item-content>
								<v-list-item-icon>
									{{ dasbor.kawin_tercatat }} jam
								</v-list-item-icon>
							</v-list-item>
							<v-divider/>
							<v-list-item dense>
								<v-list-item-content>
									<v-list-item-title>
										Fleet
									</v-list-item-title>
								</v-list-item-content>
								<v-list-item-icon>
									{{ dasbor.kawin_belum_tercatat }} jam
								</v-list-item-icon>
							</v-list-item>
							<v-divider/>
							<v-list-item dense>
								<v-list-item-content>
									<v-list-item-title>
										Admin Departemen
									</v-list-item-title>
								</v-list-item-content>
								<v-list-item-icon>
									{{ dasbor.cerai_mati }} jam
								</v-list-item-icon>
							</v-list-item>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col sm="12" md="3" cols="12">
					<v-card class="border--primary" elevation="1">
						<v-card-title class="pb-0">
							<v-icon left></v-icon>
							Berdasarkan Merk
						</v-card-title>
						<v-card-text>
								<v-list-item dense>
									<v-list-item-content>
										<v-list-item-title>
											Honda
										</v-list-item-title>
									</v-list-item-content>
									<v-list-item-icon>
										{{ dasbor.lahir }}
									</v-list-item-icon>
								</v-list-item>
								<v-divider/>
								<v-list-item dense>
									<v-list-item-content>
										<v-list-item-title>
											Suzuki
										</v-list-item-title>
									</v-list-item-content>
									<v-list-item-icon>
										{{ dasbor.mati }}
									</v-list-item-icon>
								</v-list-item>
								<v-divider/>
								<v-list-item dense>
									<v-list-item-content>
										<v-list-item-title>
											Toyota
										</v-list-item-title>
									</v-list-item-content>
									<v-list-item-icon>
										{{ dasbor.keluar }}
									</v-list-item-icon>
								</v-list-item>
								<v-divider/>
								<v-list-item dense>
									<v-list-item-content>
										<v-list-item-title>
											Daihatsu
										</v-list-item-title>
									</v-list-item-content>
									<v-list-item-icon>
										{{ dasbor.datang }}
									</v-list-item-icon>
								</v-list-item>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col sm="12" md="3" cols="12">
					<v-card class="border--primary" elevation="1">
						<v-card-title class="pb-0">
							<v-icon left></v-icon>
							Berdasarkan Kerusakan
						</v-card-title>
						<v-card-text>
							<v-list-item dense>
								<v-list-item-content>
									<v-list-item-title>
										Lecet
									</v-list-item-title>
								</v-list-item-content>
								<v-list-item-icon>
									{{ dasbor.islam }}
								</v-list-item-icon>
							</v-list-item>
							<v-divider/>
							<v-list-item dense>
								<v-list-item-content>
									<v-list-item-title>
										Penyok
									</v-list-item-title>
								</v-list-item-content>
								<v-list-item-icon>
									{{ dasbor.kristen }}
								</v-list-item-icon>
							</v-list-item>
							<v-divider/>
							<v-list-item dense>
								<v-list-item-content>
									<v-list-item-title>
										Bocor
									</v-list-item-title>
								</v-list-item-content>
								<v-list-item-icon>
									{{ dasbor.khatolik }}
								</v-list-item-icon>
							</v-list-item>
							<v-divider/>
							<v-list-item dense>
								<v-list-item-content>
									<v-list-item-title>
										Pecah
									</v-list-item-title>
								</v-list-item-content>
								<v-list-item-icon>
									{{ dasbor.hindu }}
								</v-list-item-icon>
							</v-list-item>
						</v-card-text>
					</v-card>
				</v-col>

			</v-row>

		</v-container>
		</div>
		<v-container class="mt-n16">
			<v-card>
				<v-simple-table dense>
				<template v-slot:default>
				<thead>
					<tr>
					<th class="text-left">
						#
					</th>
					<th class="text-left">
						No polisi
					</th>
					<th class="text-left">
						Pemesan
					</th>
					<th class="text-left">
						Driver
					</th>
					<th class="text-left">
						Mulai Kontrak
					</th>
					<th class="text-left">
						Selesai Kontrak
					</th>
					<th class="text-left">
						Status
					</th>
					<th class="text-left">
						Aksi
					</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>B1204EC</td>
						<td>Randi Eka</td>
						<td>Agus Setiawan</td>
						<td>2 juni</td>
						<td>4 juni</td>
						<td>
							<v-chip
								small
								color="red"
								dark>
								Driver
							</v-chip>
						</td>
						<td>
							<v-btn
								small
								icon
								to="/apps/tiket/123">
								<v-icon>
									mdi-information
								</v-icon>
							</v-btn>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>B1204EC</td>
						<td>Randi Eka</td>
						<td>Agus Setiawan</td>
						<td>2 juni</td>
						<td>4 juni</td>
						<td>
							<v-chip
								small
								color="red"
								dark>
								Driver
							</v-chip>
						</td>
						<td>
							<v-btn
								small
								icon
								to="/apps/tiket/123">
								<v-icon>
									mdi-information
								</v-icon>
							</v-btn>
						</td>
					</tr>
					<tr>
						<td>3</td>
						<td>B1204EC</td>
						<td>Randi Eka</td>
						<td>Agus Setiawan</td>
						<td>2 juni</td>
						<td>4 juni</td>
						<td>
							<v-chip
								small
								color="primary"
								dark>
								Departemen
							</v-chip>
						</td>
						<td>
							<v-btn
								small
								icon
								to="/apps/tiket/123">
								<v-icon>
									mdi-information
								</v-icon>
							</v-btn>
						</td>
					</tr>
				</tbody>
				</template>
				</v-simple-table>
			</v-card>
		</v-container>

		<v-dialog
			v-model="dialogFormTambah"
			persistent
			max-width="600px">
			<v-card>
				<v-card-title>
					<span class="text-h5">Tambah Tiket</span>
				</v-card-title>
				<v-card-text>
					<v-row>
                        <v-col md="6">
                            <v-text-field
                                dense
                                outlined
                                label="Pemesan"
                                value="Randi Eka Setiawan"
                                hide-details=""/>
                        </v-col>
                        <v-col md="6">
                            <v-text-field
                                dense
                                outlined
                                label="Telepon Pemesan"
                                value="082126833236"
                                hide-details=""/>
                        </v-col>
                        <v-col md="6">
                            <v-text-field
                                dense
                                outlined
                                label="Mulai kontrak"
                                type="date"
                                value="2021-06-16"
                                hide-details=""/>
                        </v-col>
                        <v-col md="6">
                            <v-text-field
                                dense
                                outlined
                                label="Selesai kontrak"
                                value="2021-06-16"
                                hide-details=""/>
                        </v-col>
						<v-col md="12">
                            <v-text-field
                                dense
                                outlined
                                label="Nomor Polisi Kendaraan"
                                value="B3045"
                                hide-details=""/>
                        </v-col>
                    </v-row>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						color="blue darken-1"
						text
						@click="dialogFormTambah = false">
						Close
					</v-btn>
					<v-btn
						color="blue darken-1"
						text
						@click="dialogFormTambah = false">
						Submit
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
			dialogFormTambah: false,
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
