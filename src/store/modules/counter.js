const state = {
    counter: 0
};
const getters = {
    
};
const mutations = {
    incrementCounter: state => state.counter++,
    decrementCounter: state => state.counter--
};
const actions = {
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
    asyncDecrementCounter: ({ commit }) => {
        setTimeout(() => {
            commit('decrementCounter')
        },1000);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}