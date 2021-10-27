import Http from './../../utils/Http';

const getDefaultState = () => {
    return {
        adsData: {
            content: [],
            totalElements: 0,
            numberOfElements: 0,
            size: 0,
            empty: true,
            totalPages: 0,
            last: false,
            first: true,
            pageable: {
                pageNumber: 0,
                pageSize: 10
            }
        }
    };
};

const state = getDefaultState();


const actions = {
    actGetAdsData(context, params) {
        let url =
            `/ads?page=${params.page}&size=${params.size}&query=${params.form.query}&accountStatus=${params.form.account_status}&userId=${params.form.user_id}`;

        if (params.form.created_at_from && params.form.created_at_from !== '') {
            url += `&createdAtFrom=${params.form.created_at_from}`;
        }

        if (params.form.created_at_to && params.form.created_at_to !== '') {
            url += `&createdAtTo=${params.form.created_at_to}`;
        }

        return new Http().authenticated().get(url)
            .then(res => {
                if (res.data.status === 1) {
                    context.commit('setAdsData', res.data.data);
                } else {
                    console.debug('setAdsData', res.data);
                }
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 401) {
                        context.dispatch('auth/actLogout', null, {root: true});
                    }
                }
            })
            .finally(() => {
                if (params.callback) {
                    params.callback();
                }
            });
    },
};

const mutations = {
    setAdsData(state, adsData) {
        state.adsData = adsData;
    },
    reset(state) {
        Object.assign(state, getDefaultState());
    }
};

const getters = {
    getAdsData: (state) => state.adsData
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};