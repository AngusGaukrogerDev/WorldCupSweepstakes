export default {
    state: () => ({
    availableTeams:[

    ],
    }),
    getters: {},
    mutations: {
        SET_TEAMS(state, payload){
            state.availableTeams = payload;
        },
    },
    actions: {
        updateTeams({commit}, data){
            commit('SET_STOCK', data);
        }
    },

}