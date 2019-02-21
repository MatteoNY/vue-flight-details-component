import Vue from 'vue'
import Vuex from 'vuex'

 
import AllFlightsData from '@/data/allFlights'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  
    allData: AllFlightsData
  },
  mutations: {

  },
  actions: {

  },
  getters: {
   
    allData: (state, getters) => {
      return state.allData
    }
   
  }
})
