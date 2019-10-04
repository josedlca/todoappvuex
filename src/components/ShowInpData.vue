<template>
	<div>
		
		<p>{{passmsg}} - {{showStore}}</p>
	</div>
</template>

<script>
	export default {
		props:[
			'passmsg'
		],
		name:"ShowInpData",

		data(){
			return{
				showStore: this.$store.state.tasksList
			}
		}
		
	}
</script>