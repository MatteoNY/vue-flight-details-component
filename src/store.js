import Vue from 'vue'
import Vuex from 'vuex'


import AllFlightsData from '@/data/allFlights'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    allData: AllFlightsData,
    showModalFlightDetails: false,
  },
  mutations: {
    setModalFlightDetails(state, payload) {
     // console.log('~~~~~ @STORE::: setmodal-taxesFees payload: ', payload)
      state.showModalFlightDetails = payload
    }

  },
  actions: {

    setModalFlightDetails({ commit }, payload) {
      const $ref = payload.ref;
      const showModal = payload.show;
     // console.log('~~~~~~~~~~ setModaltaxfees', payload)
      commit('setModalFlightDetails', { show: showModal, refFocusAfterClose: $ref })
    }
  },
  getters: {

    allData: state => {
      return state.allData
    },
    getModalFlightDetails: state => {
      return state.showModalFlightDetails
    }

  }
})
