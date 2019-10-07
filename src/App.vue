<template>
  <div id="app" class="container mx-auto bg-blue-200">
	  <InputData inputData />
	  <ShowInpData :passmsg="msg" />
  </div>
</template>

<script>
	import InputData from './components/InputData'
	import ShowInpData from './components/ShowInpData'
	import './assets/css/style.css'

	export default {
		name: 'app',
		data(){
			return{
				msg: "creo"
			}
		},
		components: {
			InputData,
			ShowInpData	
		}
	}
</script>