<template>
  <div id="app">
	  <InputData inputData />
	  <ShowInpData :passmsg="msg" />
  </div>
</template>

<script>
	import InputData from './components/InputData'
	import ShowInpData from './components/ShowInpData'

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