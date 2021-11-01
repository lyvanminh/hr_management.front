import Http from './../../utils/Http';
import {API_URL} from "../../config";

const getDefaultState = () => {
    return {
        subjects: [],
        userTypes: [],
    };
};

const state = getDefaultState();

const getters = {
    getSubjects: (state) => state.subjects,
    getUserTypes: (state) => state.userTypes
};

const actions = {
    actLogin(context, params) {
        context.commit('message/setNull', null, {root: true});
        let url = '/users/login';

        return new Http().post(url, params.form)
        .then(res => {
            if (res.data.status === 1) {
                let user = res.data.data;
                localStorage.setItem('token', user.access_token);
                localStorage.setItem('user_id', user.id);
                localStorage.setItem('user_type', user.role.toLowerCase());
                context.commit('user/setUser', user, {root: true});
                //
                // if (user.role === 'ADMIN') {
                //     localStorage.setItem('user_type', 'admin');
                //     params.router.push({name: 'Dashboard', params: {user_type: 'admin'}});
                // } else {
                //     localStorage.setItem('user_type', 'employee');
                //     params.router.push({name: 'Dashboard', params: {user_type: 'employee'}});
                // }
            } else {
                context.commit('message/setError', res.data.error_description, {root: true});
            }
        })
        .catch(error => {
            if (error.response.status === 401) {
                context.commit('message/setErrorDescription', error.response.data.error_description, {root: true});
            }
        });
    },

    actLogout(context, params) {
        context.commit('message/setNull', null, {root: true});
        // let url = '/user/logout';
        //
        // return new Http().authenticated().post(url)
        // .then(res => {
        //     localStorage.clear();
        //     context.commit('user/setUser', null, {root: true});
        //     // params.router.push({name: 'login'})
        //     window.location.href = '/login';
        // })
        // .catch(error => {
        //     if (error.response.status === 401) {
        //         context.commit('message/setErrorDescription', error.response.data.error_description, {root: true});
        //     }
        // });

        localStorage.setItem('token', '');
        localStorage.setItem('user_id', 0);
        localStorage.setItem('user_type', '');
        context.commit('user/setUser', null, {root: true});
        window.location.href = '/login';
    },

    actForgot(context, params) {
        context.commit('message/setNull', null, {root: true});
        let url = API_URL + '/oauth/me/forgot';

        return new Http().post(url, params.form)
        .then(res => {
            if (res.data.success === true) {
                context.commit('user/setUser', null, {root: true});
            } else {
                context.commit('message/setError', res.data.error_description, {root: true});
            }
        })
        .catch(error => {
            if (error.response.status === 401) {
                context.commit('message/setErrorDescription', error.response.data.error_description, {root: true});
            }
        });
    },

    actResetPassword(context, params) {
        context.commit('message/setNull', null, {root: true});
        let url = API_URL + '/oauth/me/reset';

        return new Http().post(url, params.form)
        .then(res => {
            if (res.data.success === true) {
                context.commit('user/setUser', null, {root: true});
                window.location.href = '/login';
            } else {
                context.commit('message/setError', res.data.error_description, {root: true});
            }
        })
        .catch(error => {
            if (error.response.status === 401) {
                context.commit('message/setErrorDescription', error.response.data.error_description, {root: true});
            }
        });
    },

    actConfirmSignup(context, params) {
        context.commit('message/setNull', null, {root: true});
        let url = API_URL + '/oauth/me/confirm_email';

        return new Http().get(url, params)
        .then(res => {
            if (res.data.success === true) {
                context.commit('user/setUser', null, {root: true});
                window.location.href = '/login';
            } else {
                context.commit('message/setError', res.data.error_description, {root: true});
            }
        })
        .catch(error => {
            if (error.response.status === 401) {
                context.commit('message/setErrorDescription', error.response.data.error_description, {root: true});
            }
        });
    }
};

const mutations = {
    reset(state) {
        Object.assign(state, getDefaultState());
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
