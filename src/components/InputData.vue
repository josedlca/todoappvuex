<template>
	<div class="w-8/12 h-10 mx-auto flex items-center mb-6">
		<input class="outline-none border border-red-400 p-2 rounded-l-lg w-9/12 h-full" type="text" v-model="inData">
		<button class="w-3/12 bg-red-400 rounded-r-lg focus:outline-none  border border-red-400 h-full text-white font-bold outline-none" @click="moreTasks(inData)">Archive</button>
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