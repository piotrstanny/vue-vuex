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
    }
})