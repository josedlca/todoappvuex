<template>
	<div>
		<ul>
			<li v-for="(item, index) of showStore" :key="item.id">
				{{item.task}} - {{index}}
				<input type="checkbox" v-model="item.taskState">
				<button @click="deleteTask(index)">X</button>
				<span>{{item.taskState}}</span>
			</li>
			<button @click="groupalDelete">delete</button>
		</ul>
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