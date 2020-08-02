import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  restaurants: []
}

const mutations = {
  SET_MAP: (state, map) => {
    state.map = map
  },
  SET_GOOGLE: (state, google) => {
    state.google = google
  },
  UPDATE_RESTAU: (state, restaurants) => {
    state.restaurants = restaurants
  }
}

const actions = {
  setMapAndGoogle({
    commit
  }, data) {
    commit("SET_MAP", data.map)
    commit("SET_GOOGLE", data.google)
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: {}
});