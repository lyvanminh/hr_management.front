import axios from "axios";
import {API_URL} from "../config";

export const getChanels = ({ commit }) => {
    axios.get(API_URL + '/chanels', { headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }})
    .then(response => {
        commit('CHANELS', response.data.items);
    })
}

export const getLanguages = ({ commit }) => {
    axios.get(API_URL + '/languages', { headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }})
    .then(response => {
        commit('LANGUAGES', response.data.items);
    })
}

export const getLevels = ({ commit }) => {
    axios.get(API_URL + '/levels', { headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }})
    .then(response => {
        commit('LEVELS', response.data.items);
    })
}

export const getPositions = ({ commit }) => {
    axios.get(API_URL + '/positions', { headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }})
    .then(response => {
        commit('POSITIONS', response.data.items);
    })
}

export const getUserRefferals = ({ commit }) => {
    axios.get(API_URL + '/users', { headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }})
    .then(response => {
        commit('USERS', response.data.items);
    })
}

export const getListCandidate = ({ commit }) => {
    axios.get(API_URL + '/candidates', { headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }})
    .then(response => {
        commit('CANDIDATES', response.data.items);
    })
}
