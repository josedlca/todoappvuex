import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	tasksList:[
		{task: "cocinar" , taskState: false},
		{task: "limpiar" , taskState: false},
		{task: "trabajar" , taskState: false}
	]
  },
  mutations: {
	moreTasks(state, newTask){
		state.tasksList.push({task: newTask , taskState: false})
	},
	deleteTask(state, index){
		state.tasksList.splice(index, 1)
	}
  },
  actions: {

  }
})
