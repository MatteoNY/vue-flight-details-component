import Vue from 'vue'
import Vuex from 'vuex'

import flightData1 from '@/data/flightData1'
import AllFlightsData from '@/data/allFlights'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flightData: flightData1,
    allData: AllFlightsData
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    flightData: (state, getters) => {
      return state.flightData
    },
    allData: (state, getters) => {
      return state.allData
    }
   
  }
})
