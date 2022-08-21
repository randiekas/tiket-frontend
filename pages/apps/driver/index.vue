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

							Buat tiket


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
						<v-btn to="/apps/driver" color="primary" small>
							Driver/PDI
						</v-btn>
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
									v-for="(item, index) in skpk"
									:key="index">
									<td>{{index+1}}</td>
									<td>
										<v-chip small dark color="green">
											{{ item.notif }}
										</v-chip>
									</td>
									<td>{{ item.customer_name }}</td>
									<td>{{ item.nopol }}</td>
                                    <td>IBU FIRA</td>
									<td>081298179643</td>
									<td>{{ item.contract_end }}</td>
									<td>30/09/2022</td>
                                    <td>Kontrak Berakhir</td>
									<td>{{ item.bo }}</td>
									<td>
										<v-btn
											v-on:click="dialog=true"
											small primary color="primary">
											Detail
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

                    <v-row>
                        <v-col md="12">
                            <v-radio-group
								hide-details=""
								column
								label="Pembebanan"
                                v-model="pembebanan">

								<v-radio
									label="Ditagihkan"
                                    value="ditagihkan"/>
								<v-radio
									label="Tidak Ditagihkan"
                                    value="tidakditagihkan"/>

							</v-radio-group>
                        </v-col>

						<v-col md="6">
                            <v-radio-group
								hide-details=""
								column
								label="Mekanisme Pembayaran">

								<v-radio
									label="Free OR (DriverTRAC)"/>
								<v-radio
									label="OR Invoice"/>
                                <v-radio
									label="OR Bayar Langsung"/>

							</v-radio-group>
                        </v-col>

						<v-col md="6">
                            <v-radio-group
								hide-details=""
								column
								label="Pembayaran">

								<v-card outlined flat>
                                    <v-card-text>
                                        BCA <br/>
                                        4373041001 <br/>
                                        a.n PT. SERASI AUTO RAYA <br/>
                                    </v-card-text>
                                </v-card>
							</v-radio-group>
                        </v-col>

						<v-col md="12">
							<v-textarea
                                rows="2"
								dense
								outlined
								label="Catatan"
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

						<v-col
                            md="12">
                            <v-card outlined>
                                <v-card-text>
                                    <v-checkbox
                                        dense
                                        :label="`Body Bagian Depan`"/>
                                    <v-text-field
                                        dense
                                        label="Keterangan"
                                        hide-details=""/>
                                    <v-file-input
                                        dense
                                        label="Pilih File"
                                        hide-details=""/>
                                </v-card-text>
                            </v-card>
						</v-col>
                        <v-col
                            md="12">
                            <v-card outlined>
                                <v-card-text>
                                    <v-checkbox
                                        dense
                                        :label="`Body Bagian Kiri`"/>
                                    <v-text-field
                                        dense
                                        label="Keterangan"
                                        hide-details=""/>
                                    <v-file-input
                                        dense
                                        label="Pilih File"
                                        hide-details=""/>
                                </v-card-text>
                            </v-card>
						</v-col>
                        <v-col
                            md="12">
                            <v-card outlined>
                                <v-card-text>
                                    <v-checkbox
                                        dense
                                        :label="`Body Bagian Kanan`"/>
                                    <v-text-field
                                        dense
                                        label="Keterangan"
                                        hide-details=""/>
                                    <v-file-input
                                        dense
                                        label="Pilih File"
                                        hide-details=""/>
                                </v-card-text>
                            </v-card>
						</v-col>
                        <v-col
                            md="12">
                            <v-card outlined>
                                <v-card-text>
                                    <v-checkbox
                                        dense
                                        :label="`Body Bagian Belakang`"/>
                                    <v-text-field
                                        dense
                                        label="Keterangan"
                                        hide-details=""/>
                                    <v-file-input
                                        dense
                                        label="Pilih File"
                                        hide-details=""/>
                                </v-card-text>
                            </v-card>
						</v-col>
                        <v-col
                            md="12">
                            <v-card outlined>
                                <v-card-text>
                                    <v-checkbox
                                        dense
                                        :label="`Body Bagian Atas`"/>
                                    <v-text-field
                                        dense
                                        label="Keterangan"
                                        hide-details=""/>
                                    <v-file-input
                                        dense
                                        label="Pilih File"
                                        hide-details=""/>
                                </v-card-text>
                            </v-card>
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
                        <v-col md="12">
                            <v-file-input
                                dense
                                outlined
                                label="Lampirkan Bukti Pembayaran"
                                hide-details=""/>
                        </v-col>
                        <v-col md="12">
                            <p class="text-overline mb-0 pb-0">
                                Add Charge
                            </p>
                        </v-col>
                        <v-col md="12">
							<v-text-field
								class="mt-4"
								dense
								outlined
								label="Bagian Komponen yang hilang"
								value="lampu depan pecah"
								hide-details="lampumerah al azhar..."
								append-icon="mdi-delete-circle"/>
						</v-col>
                        <v-col md="12">
							<v-file-input
                                dense
                                outlined
                                label="Pilih File"
                                hide-details=""/>
						</v-col>
						<v-col md="12" class="text-right">
							<v-btn small>
								Tambah
							</v-btn>
						</v-col>

                        <v-col md="6">
                            <v-text-field
                                dense
                                outlined
                                label="Jumlah Add Charge"
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
                        <v-col md="12">
                            <v-file-input
                                dense
                                outlined
                                label="Lampirkan Bukti Pembayaran"
                                hide-details=""/>
                        </v-col>

                    </v-row>


					<p class="text-overline mt-4">
                        Lampiran Kelengkapan Dokumen
                    </p>

					<v-file-input
						dense
						outlined
						label="Foto SIM"/>
                    <v-text-field
                        dense
                        outlined
                        label="Keterangan"
                        />
					<v-file-input
						dense
						outlined
						label="Foto Form BAK"/>
                    <v-text-field
                        dense
                        outlined
                        label="Keterangan"
                        />
					<v-file-input
						dense
						outlined
						label="Foto Form Konfirmasi OR"/>
                    <v-text-field
                        dense
                        outlined
                        label="Keterangan"
                        />
					<v-file-input
						dense
						outlined
						label="Foto Form Checklist"/>
                    <v-text-field
                        dense
                        outlined
                        label="Keterangan"
                        />
					<v-file-input
						dense
						outlined
						label="Foto Serah Terima"/>
                    <v-text-field
                        dense
                        outlined
                        label="Keterangan"
                        hide-details=""/>
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
	</div>
</template>
<script>
export default {
	layout:'apps',
	props: ['apps', 'tipe', 'handelKeluar'],
	async asyncData({ $content }) {
		const skpk = await $content('skpk').fetch()
		return {
			skpk,
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
