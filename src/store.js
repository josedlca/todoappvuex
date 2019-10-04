import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	tasksList:[
	]
  },
  mutations: {
	moreTasks(state, newTask){
		state.tasksList.push({task: newTask , taskState: false})
	},
	deleteTask(state, index){
		state.tasksList.splice(index, 1)
	},
	groupalDelete(state){
		state.tasksList.forEach((taskItem, key) =>{
			if(taskItem.taskState != false ){
				state.tasksList.splice(key, 1)
				console.log(taskItem)
			}
		})
	}
  },
  actions: {

  }
})
