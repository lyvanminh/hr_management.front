import axios from "axios";
import {API_URL} from "../config";

export const getChanels = ({ commit }) => {
    axios.get(API_URL + '/chanels')
    .then(response => {
        commit('CHANELS', response.data.items);
    })
}

export const getLanguages = ({ commit }) => {
    axios.get(API_URL + '/languages')
    .then(response => {
        commit('LANGUAGES', response.data.items);
    })
}

export const getLevels = ({ commit }) => {
    axios.get(API_URL + '/levels')
    .then(response => {
        commit('LEVELS', response.data.items);
    })
}

export const getPositions = ({ commit }) => {
    axios.get(API_URL + '/positions')
    .then(response => {
        commit('POSITIONS', response.data.items);
    })
}

export const getUserRefferals = ({ commit }) => {
    axios.get(API_URL + '/users')
    .then(response => {
        commit('USERS', response.data.items);
    })
}

