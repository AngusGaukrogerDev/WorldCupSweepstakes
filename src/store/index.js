import {createStore} from 'vuex';
import teams from './modules/teams';

const store = createStore({
    modules: {
        teams,
    },
})

export default store;