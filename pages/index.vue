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
					Gunakan akun google anda masuk ke aplikasi.
					
					<v-radio-group v-model="roleDipilih">
						<v-radio
							v-for="(item, index) in role"
							:key="index"
							:label="item.toUpperCase()"
							:value="item"
						></v-radio>
					</v-radio-group>

					<v-form ref="form">
						<div class="text-right">
							<v-btn 
								v-on:click="handleSubmit"
								color="primary">
								<v-icon left>mdi-google</v-icon>
								Masuk
							</v-btn>
						</div>
					</v-form>
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
			role: ['akun', 'sales', 'adh', 'bm', 'fdh', 'fleet', 'driver', 'admin'],
			roleDipilih: 'sales',
		}
	},
	methods:{
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
