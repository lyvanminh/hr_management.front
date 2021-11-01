import Vue from 'vue';
import Vuex from 'vuex';
import loading from './modules/loading';
import user from './modules/user';
import auth from './modules/auth';
import message from './modules/message';
// import ads from './modules/ads';
import state from "./state";
import * as getters from './getters';
import * as mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

    modules: {
        loading,
        auth,
        message,
        user,
        // ads
    },
    strict: false
});

export default store;