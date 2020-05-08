import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        clicks: 0
    },
    getters: {
        stringCounter: state => `${state.clicks} clicks`
    },
    mutations: {
        incrementClicks: state => state.clicks++
    },
    actions: {
        incrementClicks: ({ commit }) => {
            commit('incrementClicks')
        }
    },
    modules: {
        counter
    }
})