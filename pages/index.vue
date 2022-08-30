<template>
	<div class="d-flex" style="height:100vh;">
	<v-col class="mx-auto my-auto" xs="12" md="8" style="justify-content:center">
		<v-card elevation="4">
			<v-card-text>
			<v-row no-gutters>
			<v-col xs="12" md="5" class="primary d-flex" cols="12">
				<div class="mx-auto my-auto text-center">
					<v-icon color="white" size="128">
						mdi-account-group-outline
					</v-icon>
				</div>
			</v-col>

			<v-col xs="12" md="7">
				<v-card-title>TRAC Ls jabar</v-card-title>
				<v-card-subtitle>Ticket Management - Unit Selesai Order</v-card-subtitle>
				<v-card-text>
					<v-alert v-if="pesan" type="error">{{ pesan }}</v-alert>
					<form @submit.prevent="handelMasuk">
						<v-text-field
							v-model="form.email"
							label="Email"
							placeholder="user@gmail.com"
							type="email"
							required
							persistent-placeholder/>
						<v-text-field
							v-model="form.password"
							label="Password"
							placeholder="xxxxxx"
							type="password"
							required
							persistent-placeholder/>
						<v-btn
							:disabled="isFetching"
							class="mb-4"
							color="primary"
							type="submit"
							block>
							{{ isFetching?'Memproses ...': 'Masuk'}}
						</v-btn>
						<v-btn
							type="button"
							v-on:click="handleSubmit"
							block>
							<v-icon left>mdi-google</v-icon>
							Driver, Masuk dengan google
						</v-btn>
					</form>
				</v-card-text>
			</v-col>
			</v-row>
			</v-card-text>
		</v-card>
	</v-col>
	</div>
</template>
<script>
export default {
	layout:'blank',
	data () {
		let user = this.$auth.user
		if(user){
			this.$router.push(`/apps/beranda`)
		}
		return {
			pesan: '',
			isFetching: false,
			form: {
				email: '',
				password: '',
			},
			role: ['akun', 'sales', 'adh', 'bm', 'fdh', 'fleet', 'driver', 'admin'],
			roleDipilih: 'fleet',
		}
	},
	methods:{
		handelMasuk: function(){
			this.pesan			= ""
			this.isFetching		= true
			this.$api.$post('/v1/akun/masuk', this.form).then((resp)=>{
				
				if(resp.status){

					const token 		= `Bearer ${resp.data.token}`
					const tipe			= resp.data.akun.tipe
					this.$auth.$storage.setUniversal("authToken", token)
					this.$auth.$storage.setUniversal("akun", resp.data.akun)
        			window.location.href='/apps/'+tipe
				}else{
					this.pesan	= resp.message
					this.isFetching	= false
				}
			})
			return false
		},
		handleSubmit:function(){
			this.error = null
			this.$auth.$storage.setUniversal("loginType", this.roleDipilih)
			return this.$auth
				.loginWith('google')
				.catch((err) => {
					// eslint-disable-next-line no-console
					console.error(err)
					this.error = err.response?.data
				})
		}
	}
}
</script>