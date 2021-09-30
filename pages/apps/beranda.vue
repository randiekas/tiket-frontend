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
						Buat Tiket
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
						Verifikasi Driver
					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="8">
						Verifikasi FS
					</v-stepper-step>

				</v-stepper-header>
			</v-stepper>
			<!-- <v-row v-if="isFetching" class="mb-8">
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
				
			</v-row> -->
			
		</v-container>
		</div>
		<v-container class="mt-n16">
			<v-row class="mt-2 mt-n8">
				<v-col v-if="isFetching" sm="12" md="6" cols="12">
					<v-card>
						<v-skeleton-loader
							class="mx-auto"
							type="article, table-heading"/>
					</v-card>
				</v-col>
				<v-col v-else cols="12" md="9">
					<v-card>
						<v-card-title class="pb-0">
							<v-icon left></v-icon>
							Tiket hari ini
							<v-spacer/>
							<v-chip>
								<v-icon left>
									mdi-calendar
								</v-icon>
								20 juni 2021
							</v-chip>
						</v-card-title>
						<v-card-text>
							<v-alert
								v-if="dasbor.ganda.length===0"
								class="mt-2"
								border="left"
								type="success">
								Belum ada tiket yang dibuat hari ini
							</v-alert>
							<v-alert
								v-else
								class="mt-2"
								border="left"
								type="info">
								Ada {{ dasbor.ganda.length }} penduduk yang terdaftar di desa lain
							</v-alert>
							
							<div>
								<v-list-item 
									dense 
									to="/apps/tiket">
									<v-list-item-content>
										<v-list-item-title>
											Nama Pemesan
										</v-list-item-title>
										<v-list-item-subtitle>
											082126833236 / Jl Karang tineung indah 1 no 12 a
										</v-list-item-subtitle>
									</v-list-item-content>
									<v-list-item-icon>
										<v-chip
											small
											color="red"
											dark>
											Driver
										</v-chip>										
										<v-icon>
											mdi-chevron-right
										</v-icon>
									</v-list-item-icon>
									
								</v-list-item>
								<v-divider/>
								<v-list-item 
									dense 
									to="/apps/tiket">
									<v-list-item-content>
										<v-list-item-title>
											Nama Pemesan
										</v-list-item-title>
										<v-list-item-subtitle>
											082126833236 / Jl Karang tineung indah 1 no 12 a
										</v-list-item-subtitle>
									</v-list-item-content>
									<v-list-item-icon>
										<v-chip
											small
											color="orange"
											dark>
											fleet
										</v-chip>										
										<v-icon>
											mdi-chevron-right
										</v-icon>
									</v-list-item-icon>
									
								</v-list-item>
								<v-divider/>
								<v-list-item 
									dense 
									to="/apps/tiket/123">
									<v-list-item-content>
										<v-list-item-title>
											Nama Pemesan
										</v-list-item-title>
										<v-list-item-subtitle>
											082126833236 / Jl Karang tineung indah 1 no 12 a
										</v-list-item-subtitle>
									</v-list-item-content>
									<v-list-item-icon>
										<v-chip
											small
											color="blue"
											dark>
											Admin
										</v-chip>										
										<v-icon>
											mdi-chevron-right
										</v-icon>
									</v-list-item-icon>
									
								</v-list-item>
								<v-divider/>
								<v-list-item 
									dense 
									to="/apps/tiket/123">
									<v-list-item-content>
										<v-list-item-title>
											Nama Pemesan
										</v-list-item-title>
										<v-list-item-subtitle>
											082126833236 / Jl Karang tineung indah 1 no 12 a
										</v-list-item-subtitle>
									</v-list-item-content>
									<v-list-item-icon>
										<v-chip
											small
											color="green"
											dark>
											Selesai
										</v-chip>										
										<v-icon>
											mdi-chevron-right
										</v-icon>
									</v-list-item-icon>
									
								</v-list-item>
								<v-divider/>
							</div>
							
						</v-card-text>
					</v-card>
				</v-col>
				<v-col cols="12" md="3">
					<v-row>
						<v-col v-for="(item, index) in apps" :key="index" sm="12" md="12" cols="12">
							<v-card class="border--primary" elevation="1">
								<v-card-title class="pb-0">
									<v-icon left>{{item.ikon}}</v-icon>
									{{item.nama}}
								</v-card-title>
								<v-card-text>
									<div>{{item.deskripsi}}</div>
								</v-card-text>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="primary" :to="item.link" text dark>
										Buka
										<v-icon right>mdi-launch</v-icon>
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-col>
					</v-row>
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
