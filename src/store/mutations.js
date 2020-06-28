export default {
  SET_CHARACTERS(state, result) {
    state.characters = result;
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
  TOGGLE_SIDE_MENU(state) {
    state.isMenuOpen = !state.isMenuOpen;
  },
};
