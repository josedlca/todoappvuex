<template>
	<div>
		<input type="text" v-model="inData">
	</div>
</template>

<script>
	export default {
		name: "InputData",
		
		data(){
			return{
				inData: ""
			}
		}
	}
</script>