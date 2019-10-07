<template>
	<div class="w-8/12 mx-auto">
		<div class="py-2" v-for="(item, index) of showStore" :key="item.id">
			<span class="text-red-600">{{index}}</span> 
			<p class="inline">{{item.task}}</p>  
			<input type="checkbox" v-model="item.taskState">
			<button @click="deleteTask(index)">X</button>
		</div>
		<button @click="groupalDelete">delete</button>
	</div>
</template>

<script>
	import {mapMutations} from 'vuex';

	export default {
		name:"ShowInpData",

		data(){
			return{
				showStore: this.$store.state.tasksList
			}
		},

		methods:{
			...mapMutations(['deleteTask', 'groupalDelete'])
		}
		
	}
</script>