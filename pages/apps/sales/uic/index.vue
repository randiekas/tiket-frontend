<template>
	<div class="grey lighten-4 fill-height mb-16">
		<div class="primary pb-16">
		<v-container>
			<Head
				title="UIC"
				subtitle="Import UIC"
				color="white--text">
				<div>
					<v-btn
						exact
						small
						class="white"
						@click="handelConfirmation">
						<v-icon left>
							mdi-content-save-check-outline
						</v-icon>
						Save
					</v-btn>
					<v-btn 
						target="_blank"
						href="/format_import_uic.xlsx"
						small 
						class="mr-2">
						<v-icon left>
							mdi-microsoft-excel
						</v-icon>
						Download Format Import
					</v-btn>
					<v-btn 
						@click="handelPilihFile"
						small>
						<v-icon left>
							mdi-upload
						</v-icon>
						Piilih file
					</v-btn>
					<input 
						type="file" 
						id="input-file"
						class="d-none"
						v-on:change="handelPilihFileProses"/>
					<v-btn
						exact
						small
						class="white"
						to="/apps/sales">
						<v-icon left>
							mdi-chevron-left
						</v-icon>
						Back
					</v-btn>
				</div>
			</Head>

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
						<v-simple-table dense style="width:1500px;">
							<thead>
								<tr>
									<th width="10px">No</th>
									<th width="150px">Nomor Polisi</th>
									<th>Tipe Kendaraan</th>
									<th>No. Notif</th>
									<th>No. Customer</th>
									<th>Nama Customer</th>
									<th>Nomor Kontrak</th>
									<th>Mulai</th>
									<th>Selesai</th>
									<th>BCO</th>
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="(item, index) in data"
									:key="index">
									<td>{{index+1}}</td>
									<td>{{ item.no_polisi }}</td>
									<td>{{ item.tipe_kendaraan }}</td>
									<td>{{ item.no_notif }}</td>
									<td>{{ item.no_customer }}</td>
									<td>{{ item.nama_customer }}</td>
									<td>{{ item.no_kontrak }}</td>
									<td>{{ item.mulai }}</td>
									<td>{{ item.selesai }}</td>
									<td>{{ item.bco }}</td>
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
import readXlsxFile from 'read-excel-file'
export default {
	layout:'apps',
	props: [ 'apps', 'tipe', 'handelKeluar', 'setConfirmation', 'setFetching', 'setSnackbar' ],
	async asyncData({ }) {
		return {
			isFetching:false,
		}
	},
	data: () => ({
		data: []
    }),
	mounted: function(){
		
	},
	methods:{
		handelConfirmation: function( item ){

            this.setConfirmation({
                status: true,
                title: 'Continue',
                message: `Are you sure you want to save this item ?`,
                handelOk: async ()=>{
                    this.setConfirmation({ status: false })

                    this.setFetching(true)
                    let payload         = Object.assign([], this.data)

                    this.$api.$post('/v1/api/tambah_uic', payload).then((resp)=>{

                        this.setFetching(false)
                        if(resp.status){
                            this.setSnackbar('data hasben saved')
                            this.$router.push('/apps/sales')
                        }else{
                            this.setSnackbar(resp.message)
                        }
                    })
                }
            })
        },
		handelPilihFile(){

            document.getElementById("input-file").click()
        },
		handelPilihFileProses(event){

            let xlsxfile 	= event.target.files ? event.target.files[0] : null;

            const map 		= {
                'no polisi': 'no_polisi',
                'tipe kendaraan': 'tipe_kendaraan',
                'no notif': 'no_notif',
                'no customer': 'no_customer',
                'nama customer': 'nama_customer',
                'no kontrak': 'no_kontrak',
                'mulai': 'mulai',
                'selesai': 'selesai',
                'bco': 'bco',
            }

            event.target.value 			= ''
			const akun					= this.$auth.$storage.getUniversal("akun")
			const dibuat				= this.$moment().format('YYYY-MM-DD HH:mm:ss')
            readXlsxFile(xlsxfile, { sheet: "Sheet1", map }).then((rows) => {
				
                const error 			= false; 
                const data   			= rows.rows.map((item)=>{
					item.akun_id		= akun.id
					item.mulai			= this.$moment(item.mulai).format('YYYY-MM-DD')
					item.selesai		= this.$moment(item.selesai).format('YYYY-MM-DD')
					item.dibuat			= dibuat
                    return item
                })

				this.data				= data
                this.error          	= error
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
