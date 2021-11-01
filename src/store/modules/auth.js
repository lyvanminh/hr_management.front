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
        console.log(context)
        context.commit('message/setNull', null, {root: true});
        let url = '/oauth/token';
  
        return new Http().post(url, params.form)
        .then(res => {
            console.log(res)
            if (res.status == 200) {
                let info = res.data.result;
                localStorage.setItem('token', info.token_information.access_token);
                localStorage.setItem('user_id', info.user.id);
                localStorage.setItem('user_type', info.user.role.toLowerCase());
                localStorage.setItem('user', JSON.stringify(info.user));
                context.commit('user/setUser', info, {root: true});
                window.location.href = '/';
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
        let url = '/oauth/revoke';
        
        return new Http().authenticated().post(url)
        .then(res => {
            localStorage.clear();
            context.commit('user/setUser', null, {root: true});
            params.router.push({name: 'login'})
            window.location.href = '/login';
        })
        .catch(error => {
            if (error.response.status === 401) {
                context.commit('message/setErrorDescription', error.response.data.error_description, {root: true});
            }
        });
    },

    actSignup(context, params) {
        context.commit('message/setNull', null, {root: true});
        let url = '/users';
 
        return new Http().post(url, params.form)
        .then(res => {
            if (res.data.status === 1) {
                context.commit('message/getSuccess', 'Success', {root: true});
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
