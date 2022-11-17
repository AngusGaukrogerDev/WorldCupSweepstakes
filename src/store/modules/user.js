export default {
    state: () => ({
        name: '',
        email: ''
    }),

    getters: {},
    mutations: {
        SET_NAME(state, payload){
            state.name = payload
        },
        SET_EMAIL(state, payload){
            state.email = payload
        }
    },
    actions: {
        saveName({commit}, data) {
            commit('SET_NAME', data)
        }
    },
}