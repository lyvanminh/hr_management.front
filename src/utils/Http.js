import axios from 'axios'
import {API_URL} from './../config'
import store from './../store/';

const DEFAULT_CONFIG = {
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
};

export default class Http {
    constructor(config = {}) {
        this.config = Object.assign({}, DEFAULT_CONFIG, config)
    }

    authenticated() {
        const storedData = localStorage.getItem('token');
        if (storedData) {
            this.config.headers.Authorization = `Bearer ${storedData}`;
        }

        return this;
    }

    get(url, params, config = {}) {
        return this.executeRequest(url, { ...config, params })
    }

    post(url, data, config = {}) {
        return this.executeRequest(url, { method: 'post',...config, data })
    }

    put(url, data, config = {}) {
        return this.executeRequest(url, { method: 'put',...config, data })
    }

    patch(url, data, config = {}) {
        return this.executeRequest(url, { method: 'patch', ...config, data })
    }

    delete(url, data, config = {}) {
        return this.executeRequest(url, { method: 'delete', ...config, data })
    }

    executeRequest(url, config) {
        let urlNotLoading = [
            '/teacher/question/form_types',
            '/teacher/question/specific_knowledges',
            '/teacher/question',
        ];

        const finalHeaderConfig = { ...this.config.headers, ...config.headers, ... {
        }};

        const finalConfig = { ...this.config, url, ...config, headers: { ...finalHeaderConfig } }
        if (urlNotLoading.indexOf(url) === -1) {
            store.commit('loading/setLoading', true, {root: true});
        }

        return axios.request(finalConfig)
            .then(response => {
                if (response.headers.authorization) {
                    let token = response.headers.authorization;
                    localStorage.setItem('token', token)
                }

                store.commit('loading/setLoading', false, {root: true});
                store.commit('message/setNull', '', {root: true});
                return Promise.resolve(response)
            })
            .catch(error => {
                if (error.response.status === 401) {
                    localStorage.clear();
                     if (url.indexOf('login') == -1) {
                        window.location.href = '/login'
                     }
                }

                store.commit('loading/setLoading', false, {root: true});
                return Promise.reject(error)
            })
    }
}

