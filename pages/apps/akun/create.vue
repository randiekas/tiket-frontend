<template>
    <div class="grey lighten-4 fill-height mb-16">
		<div class="primary pb-16">
			<v-container>
				<Head
					title="Create"
					subtitle="Create akun">
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
                            exact
                            small
                            class="white"
                            to="/apps/akun">
                            <v-icon left>
                                mdi-chevron-left
                            </v-icon>
                            Back
                        </v-btn>
                    </div>
				</Head>
				<v-row class="mt-2">

				</v-row>
			</v-container>
		</div>
		<v-container class="mt-n16">
            <v-row>
                <v-col class="mx-auto my-auto" xs="12" md="5" style="justify-content:center">
                    <v-card>
                        <v-card-text>
                            <my-form
                                :fields="fieldsContent"
                                :model="detail"/>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

		</v-container>
	</div>
</template>
<script>
export default {
    layout: 'apps',
	props: [ 'setConfirmation', 'setSnackbar', 'setFetching', 'access' ],
    data: function(){
        return {
            fieldsContent: [
                { value: 'email', text: 'Email'},
                { value: 'password', text: 'Password'},
                { value: 'nama', text: 'Nama'},
                { value: 'gambar', text: 'Avatar', type: 'file'},
                { value: 'tipe', text: 'Tipe', type:'select', options: this.akunTipe},
                { value: 'ttd', text: 'TTD', type: 'file'},
            ],

            detail:{
                email: '',
                password: '',
                nama: '',
                gambar: '',
                ttd: '',
                tipe: ''
            },
        }
    },
    mounted: function(){
        this.handelLoadData()
    },
    methods: {
        handelLoadData: async function(){

        },
        handelConfirmation: function( item ){
            this.setConfirmation({
                status: true,
                title: 'Continue',
                message: `Are you sure you want to save this item ?`,
                handelOk: async ()=>{
                    this.setConfirmation({ status: false })

                    this.setFetching(true)
                    let payload         = Object.assign({}, this.detail)

                    this.$api.$post('/v1/api/tambah/akun', payload).then((resp)=>{

                        this.setFetching(false)
                        if(resp.status){
                            this.setSnackbar('data hasben saved')
                            this.$router.push('/apps/akun')
                        }else{
                            this.setSnackbar(resp.message)
                        }
                    })
                }
            })
        },
    }
}
</script>
