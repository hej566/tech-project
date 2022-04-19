import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            selected: false
        }
    },
    mutations: {
        toggle (state) {
            state.selected = !state.selected;
        }
    }
});

export default store;