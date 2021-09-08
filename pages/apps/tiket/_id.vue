<template>
	<div class="grey lighten-4 fill-height mb-16">
		<div class="primary pb-16">
		<v-container>
			<Head
				title="B3045"
				subtitle="Honda Brio - Randi Eka Setiawan"
				color="white--text">
				<v-btn 
					small 
					class="white"
					to="/apps/tiket">
					<v-icon left>
						mdi-chevron-left
					</v-icon>
					Kembali
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
							Status
						</v-card-title>
						<v-card-text class="text-center">
                            <v-icon size="60" class="mt-4 mb-4">
                                mdi-timer-sand
                            </v-icon>
                            <br/>
							Menunggu di approve driver
						</v-card-text>
					</v-card>
				</v-col>
				<v-col sm="12" md="3" cols="12">
					<v-card class="border--primary" elevation="1">
						<v-card-title class="pb-0">
							<v-icon left></v-icon>
							Approval Driver
						</v-card-title>
						<v-card-text class="text-center">
                            <v-icon size="60" class="mt-4 mb-10" color="primary">
                                mdi-account-check
                            </v-icon>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col sm="12" md="3" cols="12">
					<v-card class="border--primary" elevation="1">
						<v-card-title class="pb-0">
							<v-icon left></v-icon>
							Approval Fleet
						</v-card-title>
						<v-card-text class="text-center">
                            <v-icon size="60" class="mt-4 mb-10">
                                mdi-account-clock
                            </v-icon>
                        </v-card-text>
					</v-card>
				</v-col>
				<v-col sm="12" md="3" cols="12">
					<v-card class="border--primary" elevation="1">
						<v-card-title class="pb-0">
							<v-icon left></v-icon>
							Approval Admin
						</v-card-title>
						<v-card-text class="text-center">
                            <v-icon size="60" class="mt-4 mb-10">
                                mdi-account-clock
                            </v-icon>
                        </v-card-text>
					</v-card>
				</v-col>
				
			</v-row>
			
		</v-container>
		</div>
		<v-container class="mt-n16">
            <v-row>
                <v-col md="8">
                    <v-card>
                <v-card-title>
                    Detail Order
                </v-card-title>
				<v-card-subtitle>Diisi oleh Sales</v-card-subtitle>
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
			</v-card>
			<v-card class="mt-6">
                <v-card-title>Detail Penarikan</v-card-title>
				<v-card-subtitle>Diisi oleh Driver</v-card-subtitle>
				<v-card-text>
                    <v-row>
                        <v-col md="12">
                            <v-text-field
                                dense
                                outlined
                                label="Nama Pengemudi"
                                value="Randi Eka Setiawan"
                                hide-details=""/>
                        </v-col>
                        <v-col md="12">
                            <v-text-field
                                dense
                                outlined
                                label="Telepon Pemesan"
                                value="082126833236"
                                hide-details=""/>
                        </v-col>
                        <v-col md="12">
                            <v-textarea
                                dense
                                outlined
                                label="Alamat Pengemudi"
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
							<v-text-field
								dense
								outlined
								label="Bagian komponen yang rusak"
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
									label="Pemesan"/>
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
									label="Tunai / Kasir"/>
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
                </v-card-text>
			</v-card>
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
			</v-card>
            
                </v-col>

                <v-col md="4">
                    <v-card>
                        <v-card hover dark color="green" class="text-center py-16">
                            <v-icon
                                size="80">
                                mdi-check-all
                            </v-icon> <br/>
                            Approve
                        </v-card>
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
