<template>
	<div>
		<input type="text" v-model="inData">
		<button @click="moreTasks(inData)">Archive</button>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex';

	export default {
		name: "InputData",
		
		data(){
			return{
				inData: ""
			}
		},

		methods:{
			...mapMutations(['moreTasks'])
		}
	}
</script>