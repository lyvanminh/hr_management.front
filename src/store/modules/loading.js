const state = {
    loading: false,
    loadingData: false
};

const getters = {
    getLoading: (state) => state.loading,
    getLoadingData: (state) => state.loadingData
};

const actions = {};

const mutations = {
    setLoading(state, loading) {
        state.loading = loading;
    },
    setLoadingData(state, loading) {
        state.loadingData = loading;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
