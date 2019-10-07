<template>
	<div class="w-8/12 h-8 mx-auto flex items-center">
		<input class="border-red-400 border w-8/12 outline-none h-full" type="text" v-model="inData">
		<button class="w-4/12 bg-red-400 hover:bg-red-600 border border-red-400 h-full text-white font-bold" @click="moreTasks(inData)">Archive</button>
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