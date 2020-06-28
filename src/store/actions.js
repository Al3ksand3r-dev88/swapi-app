import axios from "axios";

export default {
  GET_ALL({ commit }, page) {
    commit("SET_LOADING");
    return axios
      .get(`https://swapi.dev/api/people?page=${page}`)
      .then(({ data }) => {
        commit("SET_CHARACTERS", data.results);
        commit("SET_TOTAL_COUNT", data.count);
        commit("SET_LOADING");
      });
  },
};
