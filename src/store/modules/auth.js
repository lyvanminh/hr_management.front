import Http from './../../utils/Http';

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
