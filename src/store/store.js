import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0,
        clicks: 0
    },
    getters: {
        stringCounter: state => `${state.clicks} clicks`
    },
    mutations: {
        incrementCounter: state => state.counter++,
        decrementCounter: state => state.counter--,
        incrementClicks: state => state.clicks++
    },
    actions: {
        incrementCounter: ({ commit }) => {
            commit('incrementCounter')
        },
        decrementCounter: ({ commit }) => {
            commit('decrementCounter')
        },
        asyncIncrementCounter: ({ commit }) => {
            setTimeout(() => {
                commit('incrementCounter')
            },1000);
        },
        asyncdecrementCounter: ({ commit }) => {
            setTimeout(() => {
                commit('decrementCounter')
            },1000);
        },
        incrementClicks: ({ commit }) => {
            commit('incrementClicks')
        }
    }
})