const state = {
    success: '',
    error: '',
    error_description: '',
    errors: null
};

const getters = {
    getSuccess: (state) => state.success,
    getError: (state) => state.error,
    getErrorDescription: (state) => state.error_description,
    getErrors: (state) => state.errors
};

const actions = {};

const mutations = {
    setSuccess(state, success) {
        state.success = success;
    },
    setError(state, error) {
        state.error = error;
    },
    setErrorDescription(state, error) {
        state.error_description = error;
    },
    setErrors(state, errors) {
        state.errors = errors;
    },
    setNull(state, data) {
        state.success = '';
        state.error = '';
        state.errors = null;
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
}
