<template>
	<v-app>
		<v-dialog
			v-model="isFetching"
			persistent
			width="300">
			<v-card
				color="primary"
				dark>
				<v-card-text>
					Sedang diproses ...
					<v-progress-linear
						indeterminate
						color="white"
						class="mb-0"
					></v-progress-linear>
				</v-card-text>
			</v-card>
		</v-dialog>

		<v-snackbar
			top
			right
			v-if="snackbar!==false"
			v-model="snackbar.status"
			timeout="2000">
			{{ snackbar.message }}
			<template v-slot:action="{ attrs }">
				<v-btn
				color="red"
				text
				v-bind="attrs"
				@click="snackbar = false">
				Close
				</v-btn>
			</template>

		</v-snackbar>

		<v-dialog
			v-model="confirmation.status"
			persistent
			width="450">
			<v-card
				color="primary"
				dark>
				<v-card-title>{{ confirmation.title }}</v-card-title>
				<v-card-text>
					{{ confirmation.message }}
				</v-card-text>
				<v-card-actions>
					<v-spacer/>
					<v-btn
						text
						@click="confirmation.status=false">
						Cancel
					</v-btn>
					<v-btn
						outlined
						@click="confirmation.handelOk(); confirmation.status=false">
						Continue
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>


		<v-navigation-drawer
			permanent
			expand-on-hover
			app>

			<v-list>
				<v-list-item class="px-2">
					<v-list-item-avatar>
					<v-img :src="user.picture"></v-img>
					</v-list-item-avatar>
				</v-list-item>

				<v-list-item link>
					<v-list-item-content>
					<v-list-item-title class="title">
						{{ user.name }}
					</v-list-item-title>
					<v-list-item-subtitle>{{ tipe }}</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-list>

			<v-divider></v-divider>

			<v-list>
				<v-list-item
					color="primary"
					to="/apps/beranda">
					<v-list-item-action>
						<v-icon>mdi-apps</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="'Beranda'" />
					</v-list-item-content>
				</v-list-item>
				<v-list-item
					v-for="(item, i) in apps[tipe]"
					:key="i"
					:to="item.link"
					color="primary">
					<v-list-item-action>
						<v-icon>{{ item.ikon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.nama" />
					</v-list-item-content>
				</v-list-item>
				<v-list-item
					color="primary"
					v-on:click="handelKeluar">
					<v-list-item-action>
						<v-icon>mdi-logout</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="'Keluar'" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-main>
			
			<nuxt-child
                :apps="apps[tipe]"
				:tipe="tipe"
				:setSnackbar="setSnackbar"
				:setFetching="setFetching"
				:setConfirmation="setConfirmation"
				:handelKeluar="handelKeluar"
				:apiurl="apiurl"/>
			
		</v-main>
	</v-app>
</template>

<script>
export default {
	data () {
		let user 		= this.$auth.$storage.getUniversal("akun")
		user.picture	= `${process.env.API_URL}${user.gambar}`
		let tipe 		= user.tipe
		if(!user){
			this.$router.push(`/`) 
		}
		return {
			user,
			tipe,
			apiurl:process.env.API_URL,
			isFetching: false,
            snackbar: {
                status: false,
                message: ''
            },
			confirmation: {
                status: false,
                title: '',
                message: '',
                handelOk: ()=>{},
            },
			apps:{
				'sales': [
					{
						"ikon": "mdi-table-large",
						"nama":"Data SKPK",
						"deskripsi":"Kelola lengkap data SKPK",
						"link":"/apps/skpk"
					},
					{
						"ikon": "mdi-car-arrow-left",
						"nama":"Tiket SKPK",
						"deskripsi":"Kelola lengkap tiket SKPK",
						"link":"/apps/tiket"
					},
				],
				'desa': [
                    {
						"ikon": "mdi-home-group",
						"nama":"Dusun",
						"deskripsi":"Kelola data master Dusun",
						"link":"/apps/dusun"
					},
					{
						"ikon": "mdi-account-group-outline",
						"nama":"Penduduk",
						"deskripsi":"Kelola data penduduk",
						"link":"/apps/penduduk"
					},
					{
						"ikon": "mdi-account-box-multiple-outline",
						"nama":"K. Keluarga",
						"deskripsi":"Kelola data kartu keluarga",
						"link":"/apps/kk"
					},
                    {
						"ikon": "mdi-file-chart",
						"nama":"Laporan",
						"deskripsi":"Informasi laporan",
						"link":"/apps/laporan"
					},
					{
						"ikon": "mdi-home-city",
						"nama":"Desa",
						"deskripsi":"Kelola data master Desa/Kelurahan",
						"link":"/apps/desa"
					},
				],
				'kecamatan': [
                    {
						"ikon": "mdi-file-chart",
						"nama":"Laporan",
						"deskripsi":"Informasi laporan",
						"link":"/apps/laporan"
					},
				],
			},
		}
	},
	methods:{
		setSnackbar: function (message){this.snackbar={status: true, message}},
		setFetching: function (status){this.isFetching=status},
		setConfirmation: function (item){this.confirmation=item},
		handelKeluar: function(){
			const redirect	= redirect
			this.setConfirmation({
                status: true,
                title: 'Continue',
                message: `Are you sure you want to logut?`,
                handelOk: async ()=>{
                    this.setConfirmation({ status: false })

                    this.setFetching(true)
                    this.$api.$post(`foundation/logout`).then(async (resp)=>{

                        this.setFetching(false)
                        if(resp.status){
                            await localStorage.removeItem("access_token")
                            await localStorage.removeItem("name")
                            await localStorage.removeItem("email")
							window.location.reload()
                        }else{
                            this.setSnackbar(resp.message)
                        }
                    })
                }
            })
		},
		handelKeluar: async function(){
            await this.$auth.logout()
        }
	}
}
</script>
<style>
.border--primary{
	border: 1px solid #4268F6!important
}
.border--white{
	border: 1px solid white!important
}
</style>