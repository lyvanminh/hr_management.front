import Http from './../../utils/Http';

const getDefaultState = () => {
    return {
        user: null,
    };
};

const state = getDefaultState();

const getters = {
    getUser: (state) => state.user
};

const actions = {
    actGetUser(context, params) {
        let url = '/users/me';

        return new Http().authenticated().get(url)
            .then(res => {
                if (res.data.status === 1) {
                    context.commit('setUser', res.data.data);
                } else {
                    console.log('actGetUser', res.data);
                }
            })
            .catch(error => {
                if (error.response.status === 401) {
                    context.dispatch('auth/actLogout', null, {root: true});
                }
            });
    },
    // actAddUser(context, params) {
    //     let url = 'users';
    //
    //     return new Http().authenticated().post(url, params.body)
    //         .then(res => {
    //             if (res.data.status === 1) {
    //                 context.commit('message/setSuccess', 'Thêm Account thành công', {root: true});
    //                 if (params.callback) {
    //                     params.callback();
    //                 }
    //             } else {
    //                 context.commit('message/setErrorDescription', res.data.error_description, {root: true});
    //             }
    //         })
    //         .catch(error => {
    //             if (error.response) {
    //                 if (error.response.status === 401) {
    //                     context.dispatch('auth/actLogout', null, {root: true});
    //                 }
    //
    //                 if (error.response.data && error.response.data.error_description) {
    //                     context.commit('message/setErrorDescription', error.response.data.error_description, {root: true});
    //                 }
    //             }
    //         });
    // },
    // actUpdateUser(context, params) {
    //     let url = 'users/' + params.id;
    //
    //     return new Http().authenticated().put(url, params.body)
    //         .then(res => {
    //             if (res.data.status === 1) {
    //                 context.commit('message/setSuccess', 'Cập nhật Account thành công', {root: true});
    //                 if (params.callback) {
    //                     params.callback();
    //                 }
    //             } else {
    //                 context.commit('message/setErrorDescription', res.data.error_description, {root: true});
    //             }
    //         })
    //         .catch(error => {
    //             if (error.response) {
    //                 if (error.response.status === 401) {
    //                     context.dispatch('auth/actLogout', null, {root: true});
    //                 }
    //
    //                 if (error.response.data && error.response.data.error_description) {
    //                     context.commit('message/setErrorDescription', error.response.data.error_description, {root: true});
    //                 }
    //             }
    //         });
    // },
    // actChangePermissions(context, params) {
    //     let url = 'admin/users/change-permissions';
    //
    //     return new Http().authenticated().post(url, {
    //         user_id: params.user_id,
    //         permission_ids: params.permission_ids
    //     })
    //         .then(res => {
    //             if (res.data.code === 0) {
    //                 params.callback();
    //                 for (let i in context.rootGetters['user/getUsers']) {
    //                     if (context.rootGetters['user/getUsers'][i].id === params.user_id) {
    //                         context.rootGetters['user/getUsers'][i].permissions = params.permission_ids;
    //                         break;
    //                     }
    //                 }
    //             }
    //         })
    //         .catch(error => {
    //             if (error.response.status === 422) {
    //                 context.commit('message/setErrors', error.response.data.errors, {root: true});
    //             }
    //         });
    // },
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    reset(state) {
        Object.assign(state, getDefaultState());
    },

};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};
