import Vue from 'vue'
import Vuex from 'vuex'
import colors from '../../colors.json';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colors: []
    },
    mutations: {
        setColors(state, colors) {

            state.colors = Object.entries(colors)
        },

    },
    actions: {
        //Obtener los colores del archivo json
        loadColors(context) {

            context.commit('setColors', colors)

        },

    },

})