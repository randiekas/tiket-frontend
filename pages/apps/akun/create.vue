<template>
    <div class="grey lighten-4 fill-height mb-16" v-if="access.create">
		<div class="primary pb-16">
			<v-container>
				<Head
					title="Create"
					subtitle="Create your Content data">
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
                            to="/content">
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
                <v-col md="6">
                    <v-card>
                        <v-card-title>
                            Content
                        </v-card-title>
                        <v-divider/>
                        <v-card-text>
                            <my-form
                                :fields="fieldsContent"
                                :model="detail"/>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col md="6">
                    <v-card>
                        <v-card-title>
                            Product Recomendation
                        </v-card-title>
                        <v-divider/>
                        <v-card-text>
                            <v-menu
                                offset-y
                                :close-on-content-click="false">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        outlined
                                        block
                                        v-bind="attrs"
                                        v-on="on">
                                        Select Product
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item-group
                                        v-model="productSelected"
                                        multiple
                                        color="primary">
                                        <template
                                            v-for="(item, index) in product">
                                            <v-list-item
                                                :key="`list-${index}`">
                                                <template v-slot:default="{ active }">
                                                <v-list-item-icon>
                                                    <v-checkbox
                                                        :input-value="active"
                                                        color="primary"
                                                        hide-details=""/>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                                                    <v-list-item-subtitle>{{ item.product_type.description }}</v-list-item-subtitle>
                                                </v-list-item-content>
                                                <v-list-item-avatar>
                                                    <v-avatar
                                                        class="grey">
                                                        <img
                                                            v-if="item.img_path"
                                                            :src="item.img_path"
                                                            alt="John">
                                                    </v-avatar>
                                                </v-list-item-avatar>
                                                </template>
                                            </v-list-item>
                                            <v-divider
                                                v-if="index<product.length-1"
                                                :key="`divider-${index}`"/>
                                        </template>
                                    </v-list-item-group>
                                </v-list>
                            </v-menu>
                            <v-card class="grey lighten-3 mt-4" flat rounded="md">
                                <v-card-text>
                                    <v-img
                                        v-if="productSelected.length==0"
                                        src="/images/no-product-recomendation.svg"/>
                                    <my-list-product
                                        :product="product.filter((item, index)=>productSelected.includes(index))">
                                        <template v-slot:[`action-header`]="{ index }">
                                            <!-- {{ item }} -->
                                            <v-btn
                                                @click="handelDeleteProductSelected(index)" outlined rounded icon>
                                                <v-icon>mdi-delete</v-icon>
                                            </v-btn>
                                        </template>
                                    </my-list-product>
                                </v-card-text>
                            </v-card>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

		</v-container>
	</div>
</template>
<script>
export default {
	props: [ 'setConfirmation', 'setSnackbar', 'setFetching', 'access' ],
    data: function(){
        return {
            productSelected: [],
            fieldsContent: [
                { text:'Title', value: 'title'},
                { text:'Description', value: 'description', type: 'textarea'},
                { text:'Start Period', value: 'start_date', type:'date', col:6},
                { text:'End Period', value: 'end_date', type:'date', col:6},
                { text:'Url/Reference', value: 'url_reference'},
                { text:'Images', value: 'img_path', type: 'file'},
                { text:'Categori', value: 'content_category_id', type:'select', options: []},
            ],

            detail:{
                title: '',
                description: '',
                start_date: '',
                end_date: '',
                url_reference: '',
                content_category_id: '',
                img_path: '',
                product_id: [],
                product_id_delete: [],
            },

            product: [],
            category: [],
        }
    },
    mounted: function(){
        this.handelLoadData()
    },
    methods: {
        handelLoadData: async function(){
            this.product    = (await this.$api.$get('admin/product/product?page=0&size=10000&query=status:1')).data.content
            this.category   = (await this.$api.$get('admin/foundation/lookup-line?page=0&size=1000&query=lookup_header_id:98,lookup_line.status:1')).data.content.map((item)=>{
                return {
                    label: item.name,
                    value: item.id,
                }
            })
            this.fieldsContent[6].options   = this.category

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
                    payload.product_id  = this.productSelected.map((item)=>this.product[item].id)


                    this.$api.$post('admin/content/content', payload).then((resp)=>{

                        this.setFetching(false)
                        if(resp.status){
                            this.setSnackbar('data hasben saved')
                            this.$router.push('/content')
                        }else{
                            this.setSnackbar(resp.message)
                        }
                    })
                }
            })
        },
        handelDeleteProductSelected: function(index){

            this.productSelected.splice(index,1)
            // console.log(this.productSelected)
        }
    }
}
</script>
