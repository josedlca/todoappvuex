<template>
	<div class="w-8/12 h-10 mx-auto">
		<div class="py-1 h-full border border-red-400 rounded-lg flex items-center justify-between mb-3" v-for="(item, index) of showStore" :key="item.id">
			<p class="inline pl-2 ">{{item.task}}</p>  
			<div class="">
				<input  type="checkbox" v-model="item.taskState">
				<button class="outline-none"  @click="deleteTask(index)">
					<svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/>
					</svg>
				</button>
			</div>
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