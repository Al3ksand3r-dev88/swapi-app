import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: null,
    totalCount: 0,
    isLoading: false,
    toggleFilter: false,
    keyword: "",
  },
  mutations: {
    SET_CHARACTERS(state, result) {
      state.characters = result;
      console.log(state.characters);
      localStorage.setItem("result", JSON.stringify(result));
    },
    SET_TOTAL_COUNT(state, total) {
      state.totalCount = total;
    },
    SET_LOADING(state) {
      state.isLoading = !state.isLoading;
    },
    TOGGLE_FILTER(state) {
      state.toggleFilter = !state.toggleFilter;
    },
    SET_FILTER(state, keyword) {
      state.keyword = keyword;
    },
  },
  actions: {
    GET_ALL({ commit }, page) {
      commit("SET_LOADING");
      return axios
        .get(`https://swapi.dev/api/people?page=${page}`)
        .then(({ data }) => {
          commit("SET_LOADING");
          commit("SET_CHARACTERS", data.results);
          commit("SET_TOTAL_COUNT", data.count);
        });
    },
  },
  getters: {
    hasCharacters() {
      return !!JSON.parse(localStorage.getItem("result"));
    },
    hasNextButton(state) {
      return state.totalCount / 10;
    },

    filteredList(state) {
      return state.characters.filter((character) => {
        return character.name
          .toLowerCase()
          .includes(state.keyword.toLowerCase());
      });
    },
  },
});
