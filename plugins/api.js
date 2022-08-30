import Vue from 'vue';

export default function ({ $axios }, inject) {
	// Create a custom axios instance
	// $auth.$storage.getUniversal("authToken")
	const api = $axios.create({
		headers: {"Authorization": localStorage.getItem("auth.authToken")}
	})
    
	// Set baseURL to something different
	api.setBaseURL(process.env.API_URL)
	// Inject to context as $api
	inject('api', api)
}

Vue.prototype.numbering = (index, options)=>{
    return (options.itemsPerPage*(options.page-1))+index+1
}

Vue.prototype.currency = numberValue =>{
	numberValue = Math.ceil(numberValue)
	let rupiahValue = ''
	let angkaRev = numberValue.toString().split('').reverse().join('')
	for (let i = 0; i < angkaRev.length; i++) if (i % 3 === 0) rupiahValue += angkaRev.substr(i, 3) + '.'
	return rupiahValue.split('', rupiahValue.length - 1).reverse().join('') + ''
}