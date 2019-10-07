<template>
	<div class="flex">
		<div class="mx-auto">
			<input class="border-red-400 border-2" type="text" v-model="inData">
			<button @click="moreTasks(inData)">Archive</button>
		</div>
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