import Vue from 'vue';
import Vuex from 'vuex';
import loading from './modules/loading';
import user from './modules/user';
import auth from './modules/auth';
import message from './modules/message';
// import ads from './modules/ads';

Vue.use(Vuex);

const store = new Vuex.Store({
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