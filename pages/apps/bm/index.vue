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

							Approval ADH

					</v-stepper-step>

					<v-divider></v-divider>
					<v-stepper-step step="4">
						<v-btn to="/apps/bm" color="primary" small>
						Approval BM
						</v-btn>
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
							Data tiket yang perlu di approval
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
										<v-btn small primary color="primary">
											Detail
										</v-btn>
										<v-btn small primary dark color="green">
											Approve
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
	async asyncData({ $content }) {
		const skpk = await $content('skpk').fetch()
		return {
			skpk,
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
<style>
table{
	width: 1470px!important;
}
</style>
